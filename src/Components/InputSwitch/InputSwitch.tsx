import React, { ChangeEvent } from 'react';

export interface ICheckbox {
  onChange: (gender: string) => void;
  errorSwitch: string;
}

export const InputSwitch: React.FC<ICheckbox> = ({ onChange, errorSwitch }) => {
  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      Male
      <input
        className="switch-input"
        type="radio"
        name="gender"
        value="Male"
        data-testid="Male"
        onChange={handleSwitchChange}
      />
      Female
      <input
        className="switch-input"
        type="radio"
        name="gender"
        value="Female"
        data-testid="Female"
        onChange={handleSwitchChange}
      />
      <div className="error-input">{errorSwitch && <div>{errorSwitch}</div>}</div>
    </>
  );
};
