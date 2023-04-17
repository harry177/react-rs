import { newName } from '../../app/formFieldSlice';
import { AppDispatch } from 'app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface IInputText {
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
  minLength: number;
}

export interface IFormValues {
  textLabel: string;
}

export const InputText: React.FC<IInputText> = memo(
  ({ value, register, required, label, minLength }) => {
    const useConfigDispatch = () => useDispatch<AppDispatch>();
    const updateDispatch = useConfigDispatch();

    return (
      <>
        <input
          className="name-input"
          type="text"
          aria-label="input"
          {...register(label, { required, minLength })}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateDispatch(newName((event.target as HTMLInputElement).value))
          }
          value={value}
        />
      </>
    );
  }
);
