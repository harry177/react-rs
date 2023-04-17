import { newDate } from '../../app/formFieldSlice';
import { AppDispatch } from '../../app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface IInputDate {
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
  validate: (date: string) => boolean;
}

export interface IFormValues {
  dateLabel: string;
}

export const InputDate: React.FC<IInputDate> = memo(
  ({ value, register, required, label, validate }) => {
    const useConfigDispatch = () => useDispatch<AppDispatch>();
    const updateDispatch = useConfigDispatch();
    return (
      <>
        <input
          className="date-input"
          type="date"
          aria-label="input"
          {...register(label, { required, validate })}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateDispatch(newDate((event.target as HTMLInputElement).value))
          }
          value={value}
        />
      </>
    );
  }
);
