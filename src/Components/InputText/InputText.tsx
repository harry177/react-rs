import React, { ChangeEvent } from 'react';

export interface IInputText {
  onChange: (name: string) => void;
  errorText: string;
  value: string;
}
export const InputText: React.FC<IInputText> = ({ onChange, errorText, value }) => {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <input
        className="name-input"
        type="text"
        aria-label="input"
        onChange={handleTextChange}
        value={value}
        required
      />
      <div className="error-input">{errorText && <div>{errorText}</div>}</div>
    </>
  );
};
