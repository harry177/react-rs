import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IInputDate {
  onChange: (date: string) => void;
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
  validate: (date: string) => boolean;
}

export interface IFormValues {
  dateLabel: string;
}

export const InputDate: React.FC<IInputDate> = ({
  onChange,
  value,
  register,
  required,
  label,
  validate,
}) => {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  console.log(value);
  return (
    <>
      <input
        className="date-input"
        type="date"
        aria-label="input"
        {...register(label, { required, validate })}
        onChange={handleDateChange}
        value={value}
      />
    </>
  );
};
