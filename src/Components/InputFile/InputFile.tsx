import { newPicture } from '../../app/formFieldSlice';
import { AppDispatch } from '../../app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface IInputFile {
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  fileLabel: string;
}

export const InputFile: React.FC<IInputFile> = memo(({ register, required, label }) => {
  const useConfigDispatch = () => useDispatch<AppDispatch>();
  const updateDispatch = useConfigDispatch();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const look =
      event.target.files && event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : '';
    updateDispatch(newPicture(look));
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
});
