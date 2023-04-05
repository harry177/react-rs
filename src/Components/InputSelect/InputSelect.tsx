import React, { ChangeEvent } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface IInputSelect {
  onChange: (date: string) => void;
  value: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  label: Path<IFormValues>;
}

export interface IFormValues {
  selectLabel: string;
}

export const InputSelect: React.FC<IInputSelect> = ({
  onChange,
  value,
  register,
  required,
  label,
}) => {
  const options = [
    { id: 0, name: 'English', value: 'English' },
    { id: 1, name: 'German', value: 'German' },
    { id: 2, name: 'Ukranian', value: 'Ukranian' },
    { id: 3, name: 'Russian', value: 'Russian' },
    { id: 4, name: 'Polish', value: 'Polish' },
  ];

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <select
        {...register(label, {
          required,
        })}
        onChange={handleOptionChange}
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
};
