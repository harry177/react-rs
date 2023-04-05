import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface ICheckbox {
  onChange: (gender: string) => void;
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  radioLabel: string;
}

export const InputSwitch: React.FC<ICheckbox> = ({
  onChange,
  value,
  register,
  required,
  label,
}) => {
  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      Male
      <input
        {...register(label, {
          required,
        })}
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
        {...register(label, {
          required,
        })}
        className="switch-input"
        type="radio"
        name="gender"
        value="Female"
        data-testid="Female"
        checked={value === 'Female'}
        onChange={handleSwitchChange}
      />
    </>
  );
};
