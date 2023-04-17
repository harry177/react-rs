import { newLanguage } from '../../app/formFieldSlice';
import { AppDispatch } from '../../app/store';
import React, { ChangeEvent, memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export interface IInputSelect {
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  selectLabel: string;
}

export const InputSelect: React.FC<IInputSelect> = memo(({ value, register, required, label }) => {
  const options = [
    { id: 0, name: 'English', value: 'English' },
    { id: 1, name: 'German', value: 'German' },
    { id: 2, name: 'Ukranian', value: 'Ukranian' },
    { id: 3, name: 'Russian', value: 'Russian' },
    { id: 4, name: 'Polish', value: 'Polish' },
  ];

  const useConfigDispatch = () => useDispatch<AppDispatch>();
  const updateDispatch = useConfigDispatch();

  return (
    <>
      <select
        {...register(label, {
          required,
        })}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          updateDispatch(newLanguage(event.target.value))
        }
        role="listbox"
        value={value}
      >
        <option hidden value="">
          -- List of languages --
        </option>
        {options.map((option) => {
          return <option key={option.id}>{option.name}</option>;
        })}
      </select>
    </>
  );
});
