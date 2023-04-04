import React, { ChangeEvent } from 'react';

export interface ICheckbox {
  onChange: (gender: string) => void;
  errorSwitch: string;
  value: string;
}

export const InputSwitch: React.FC<ICheckbox> = ({ onChange, errorSwitch, value }) => {
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
        checked={value === 'Male'}
        onChange={handleSwitchChange}
      />
      Female
      <input
        className="switch-input"
        type="radio"
        name="gender"
        value="Female"
        data-testid="Female"
        checked={value === 'Female'}
        onChange={handleSwitchChange}
      />
      <div className="error-input">{errorSwitch && <div>{errorSwitch}</div>}</div>
    </>
  );
};
