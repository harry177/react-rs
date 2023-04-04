import React, { ChangeEvent } from 'react';

export interface IInputChecknox {
  onChange: (approve: boolean) => void;
  errorCheckbox: string;
  value: boolean;
}

export const InputCheckbox: React.FC<IInputChecknox> = ({ onChange, errorCheckbox, value }) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <input
        className="checkbox-input"
        type="checkbox"
        aria-label="input"
        onChange={handleCheckboxChange}
        checked={value}
      />
      <div className="error-input">{errorCheckbox && <div>{errorCheckbox}</div>}</div>
    </>
  );
};
