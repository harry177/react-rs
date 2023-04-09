import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IInputFile {
  onChange: (picture: string) => void;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  fileLabel: string;
}

export const InputFile: React.FC<IInputFile> = ({ onChange, register, required, label }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const look =
      event.target.files && event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : '';
    onChange(look);
  };
  return (
    <>
      <input
        type="file"
        aria-label="input"
        {...register(label, {
          required,
        })}
        onChange={handleFileChange}
      />
    </>
  );
};
