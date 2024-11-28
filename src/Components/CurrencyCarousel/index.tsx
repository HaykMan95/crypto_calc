import { useEffect, useState } from 'react';
import Binance from 'binance-api-node';
import './styles.css';
import { CRYPTOS } from '../../Constants';

export const CurrencyCarousel = () => {
  const [cryptoPrices, setCryptoPrices] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const binance = Binance();

    const ws = binance.ws.trades(CRYPTOS, (trade) => {
      const { symbol, price } = trade;
      setCryptoPrices((prev) => ({
        ...prev,
        [symbol]: price,
      }));
    });

    return () => {
      ws();
    };
  }, []);

  return (
    <div className="currency-carousel-container">
      <div className="currency-carousel">
        {Object.keys(cryptoPrices).map((crypto) => {
          const price = cryptoPrices[crypto];

          return (
            <div key={crypto} className="app-header-crypto-price">
              <div className="crypto-name">{crypto.replace('USDT', '')}</div>
              <div className="crypto-price">${price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
