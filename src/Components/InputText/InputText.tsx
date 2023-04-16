import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IInputText {
  onChange: (name: string) => void;
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
  minLength: number;
}

export interface IFormValues {
  textLabel: string;
}

export const InputText: React.FC<IInputText> = ({
  onChange,
  value,
  register,
  required,
  label,
  minLength,
}) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(event.target.value);
  };
  return (
    <>
      <input
        className="name-input"
        type="text"
        aria-label="input"
        {...register(label, { required, minLength })}
        onChange={handleTextChange}
        value={value}
      />
    </>
  );
};
