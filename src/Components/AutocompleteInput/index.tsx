import React, { useState } from 'react';
import './styles.css';

type AutocompleteInputProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  options,
  value,
  onChange,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    // Filter the options based on the input value
    if (inputValue) {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setFilteredOptions([]);
  };

  return (
    <div className="autocomplete-input">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter crypto name"
      />
      {filteredOptions.length > 0 && (
        <ul className="autocomplete-options">
          {filteredOptions.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
