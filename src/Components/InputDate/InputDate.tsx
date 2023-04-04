import React, { ChangeEvent } from 'react';

export interface IInputDate {
  onChange: (date: string) => void;
  errorDate: string;
}

export const InputDate: React.FC<IInputDate> = ({ onChange, errorDate }) => {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <input
        className="date-input"
        type="date"
        aria-label="input"
        onChange={handleDateChange}
        required
      />
      <div className="error-input">{errorDate && <div>{errorDate}</div>}</div>
    </>
  );
};
