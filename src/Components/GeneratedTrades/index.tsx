// GeneratedTrades.tsx
import React from 'react';

type GeneratedTradesProps = {
  generatedList: { index: number; value: number }[];
  cryptoName: string;
};

const GeneratedTrades: React.FC<GeneratedTradesProps> = ({
  generatedList,
  cryptoName,
}) => {
  console.log('generatedList', generatedList);
  return (
    <div className="center-container">
      <h2>Generated Trades</h2>
      <ul className="number-list">
        {generatedList.map((item) => (
          <li key={item.index} className="number-item">
            {item.value} {cryptoName ? `${cryptoName}` : '$'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneratedTrades;
