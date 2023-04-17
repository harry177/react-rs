import { newApprove } from '../../app/formFieldSlice';
import { AppDispatch } from '../../app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface IInputChecknox {
  value: boolean;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  checkboxLabel: boolean;
}

export const InputCheckbox: React.FC<IInputChecknox> = memo(
  ({ value, register, required, label }) => {
    const useConfigDispatch = () => useDispatch<AppDispatch>();
    const updateDispatch = useConfigDispatch();

    return (
      <>
        <input
          {...register(label, {
            required,
          })}
          className="checkbox-input"
          type="checkbox"
          aria-label="input"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateDispatch(newApprove((event.target as HTMLInputElement).checked))
          }
          checked={value}
        />
      </>
    );
  }
);
