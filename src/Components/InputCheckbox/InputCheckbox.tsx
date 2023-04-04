import React, { ChangeEvent } from 'react';

export interface IInputChecknox {
  onChange: (approve: boolean) => void;
  errorCheckbox: string;
}

export const InputCheckbox: React.FC<IInputChecknox> = ({ onChange, errorCheckbox }) => {
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
      />
      <div className="error-input">{errorCheckbox && <div>{errorCheckbox}</div>}</div>
    </>
  );
};
