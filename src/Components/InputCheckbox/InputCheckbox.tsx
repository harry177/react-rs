import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IInputChecknox {
  onChange: (approve: boolean) => void;
  value: boolean;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  checkboxLabel: string;
}

export const InputCheckbox: React.FC<IInputChecknox> = ({
  onChange,
  value,
  register,
  required,
  label,
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <input
        {...register(label, {
          required,
        })}
        className="checkbox-input"
        type="checkbox"
        aria-label="input"
        onChange={handleCheckboxChange}
        checked={value}
      />
    </>
  );
};
