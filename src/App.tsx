import { useState, useMemo } from 'react';
import './App.css';
import { CurrencyCarousel } from './Components/CurrencyCarousel';
import GeneratedTrades from './Components/GeneratedTrades';
import AutocompleteInput from './Components/AutocompleteInput';
import { CRYPTOS } from './Constants';

type FromToList = {
  index: number;
  value: number;
};

function createArray(from?: number, to?: number, step?: number): FromToList[] {
  if (
    from !== undefined &&
    to !== undefined &&
    step !== undefined &&
    step !== 0
  ) {
    const result: FromToList[] = [];
    let iterationCount = 0;

    if (from <= to) {
      for (let i = from; i <= to; i += step) {
        if (iterationCount >= 100) break;
        result.push({ index: i, value: i });
        iterationCount++;
      }
    } else {
      for (let i = from; i >= to; i += step) {
        if (iterationCount >= 100) break;

        result.push({ index: i, value: i });
        iterationCount++;
      }
    }

    return result;
  }
  return [];
}

function App() {
  const [from, setFrom] = useState<string>('0');
  const [to, setTo] = useState<string>('0');
  const [step, setStep] = useState<string>('1');
  const [cryptoStepPercent, setCryptoStepPercent] = useState<string>('0');
  const [cryptoName, setCryptoName] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');

  const fromToList = useMemo(() => {
    const parsedFrom = parseFloat(from);
    const parsedTo = parseFloat(to);
    const parsedStep = parseFloat(step);

    if (
      !isNaN(parsedFrom) &&
      !isNaN(parsedTo) &&
      !isNaN(parsedStep) &&
      parsedStep !== 0
    ) {
      return createArray(parsedFrom, parsedTo, parsedStep);
    }
    return [];
  }, [from, to, step]);

  return (
    <>
      <header>
        <h1>Number Generator</h1>
        <div className="api-config">
          <label>API KEY</label>
          <input
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key"
          />
        </div>
        <CurrencyCarousel />
      </header>

      <div className="app-container">
        <div className="main-content">
          <div className="left-container">
            <h2>Calculation Configuration</h2>
            <div className="input-group">
              <label>From</label>
              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="Start value"
              />
            </div>

            <div className="input-group">
              <label>To</label>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="End value"
              />
            </div>

            <div className="input-group">
              <label>Step</label>
              <input
                value={step}
                onChange={(e) => setStep(e.target.value)}
                type="text"
                placeholder="Step value"
              />
            </div>
          </div>
          <div className="right-container">
            <h2>Crypto Configuration</h2>
            <div className="input-group">
              <label>Crypto Name</label>
              <AutocompleteInput
                options={CRYPTOS}
                value={cryptoName}
                onChange={setCryptoName} // Updates the cryptoName state
              />
            </div>

            <div className="input-group">
              <label>Crypto Step Percent</label>
              <input
                value={cryptoStepPercent}
                onChange={(e) => setCryptoStepPercent(e.target.value)}
                type="text"
                placeholder="Enter step percentage"
              />
            </div>
          </div>
        </div>
        <div className="center-container">
          <GeneratedTrades generatedList={fromToList} cryptoName={cryptoName} />
        </div>
      </div>
    </>
  );
}

export default App;
