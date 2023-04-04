import React, { ChangeEvent } from 'react';

export interface IInputSelect {
  onChange: (date: string) => void;
  errorSelect: string;
}

export const InputSelect: React.FC<IInputSelect> = ({ onChange, errorSelect }) => {
  const options = [
    { id: 0, name: '-- List of languages --', value: '' },
    { id: 1, name: 'English', value: 'English' },
    { id: 2, name: 'German', value: 'German' },
    { id: 3, name: 'Ukranian', value: 'Ukranian' },
    { id: 4, name: 'Russian', value: 'Russian' },
    { id: 5, name: 'Polish', value: 'Polish' },
  ];

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <select onChange={handleOptionChange} role="listbox">
        {options.map((option) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
      <div className="error-input">{errorSelect && <div>{errorSelect}</div>}</div>
    </>
  );
};
