import React, { ChangeEvent } from 'react';

export interface IInputFile {
  onChange: (picture: string) => void;
  errorFile: string;
}

export const InputFile: React.FC<IInputFile> = ({ onChange, errorFile }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const look =
      event.target.files && event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : '';
    onChange(look);
  };
  return (
    <>
      <input type="file" aria-label="input" onChange={handleFileChange} />
      <div className="error-input">{errorFile && <div>{errorFile}</div>}</div>
    </>
  );
};
