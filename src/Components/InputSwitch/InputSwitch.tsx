import { newGender } from '../../app/formFieldSlice';
import { AppDispatch } from '../../app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface ICheckbox {
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  radioLabel: string;
}

export const InputSwitch: React.FC<ICheckbox> = memo(({ value, register, required, label }) => {
  const useConfigDispatch = () => useDispatch<AppDispatch>();
  const updateDispatch = useConfigDispatch();
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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          updateDispatch(newGender((event.target as HTMLInputElement).value))
        }
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
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          updateDispatch(newGender((event.target as HTMLInputElement).value))
        }
      />
    </>
  );
});
