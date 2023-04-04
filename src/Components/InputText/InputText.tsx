import React, { ChangeEvent } from 'react';

export interface IInputText {
  onChange: (name: string) => void;
  errorText: string;
}
export const InputText: React.FC<IInputText> = ({ onChange, errorText }) => {
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
        required
      />
      <div className="error-input">{errorText && <div>{errorText}</div>}</div>
    </>
  );
};
