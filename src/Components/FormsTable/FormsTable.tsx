import React, { useState } from 'react';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';
import { InputFile } from '../InputFile/InputFile';
import { InputSelect } from '../InputSelect/InputSelect';
import { IUserCard } from 'Components/UserCard/UserCard';

export interface IFormsTable {
  name: string;
  date: string;
  language: string;
  approve: boolean;
  gender: string;
  picture: string;
  onSubmit: React.Dispatch<React.SetStateAction<IUserCard[]>>;
  onTextChange: (name: string) => void;
  onDateChange: (date: string) => void;
  onLanguageChange: (language: string) => void;
  onApproveChange: (approve: boolean) => void;
  onGenderChange: (gender: string) => void;
  onPictureChange: (picture: string) => void;
}

export const FormsTable: React.FC<IFormsTable> = ({
  name,
  date,
  language,
  approve,
  gender,
  picture,
  onSubmit,
  onTextChange,
  onDateChange,
  onLanguageChange,
  onApproveChange,
  onGenderChange,
  onPictureChange,
}) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [errorInputText, setErrorInputText] = useState<string>('');
  const [errorInputDate, setErrorInputDate] = useState<string>('');
  const [errorInputSelect, setErrorInputSelect] = useState<string>('');
  const [errorInputCheckbox, setErrorInputCheckbox] = useState<string>('');
  const [errorInputRadio, setErrorInputRadio] = useState<string>('');
  const [errorInputPicture, setErrorInputPicture] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const cardData = { name, date, language, approve, gender, picture };
    onSubmit((prevState) => {
      return [...prevState, cardData];
    });
    if (name && !/[A-Z]/.test(name.charAt(0))) {
      setErrorInputText('The first letter of your name must be capitalized. Try again');
    } else {
      setErrorInputText('');
    }
    if (date && +date.slice(0, 4) > 2005) {
      setErrorInputDate('It seems, you too young to be a RS Student. Try again');
    } else {
      setErrorInputDate('');
    }
    if (language && language === '-- List of languages --') {
      setErrorInputSelect('Please, select language from the list. Try again');
    } else {
      setErrorInputSelect('');
    }
    if (!approve) {
      setErrorInputCheckbox('Please, consent your personal data. Try again');
    } else {
      setErrorInputCheckbox('');
    }
    if (!gender) {
      setErrorInputRadio('A gender should be selected. Try again');
    } else {
      setErrorInputRadio('');
    }
    if (!picture) {
      setErrorInputPicture('You need to upload a picture. Try again');
    } else {
      setErrorInputPicture('');
    }

    formRef.current?.reset();
    onTextChange('');
    onDateChange('');
    onLanguageChange('');
    onApproveChange(false);
    onGenderChange('');
    onPictureChange('');
  };

  return (
    <form className="form-table" onSubmit={handleSubmit} ref={formRef}>
      <label className="label-form">
        Name:&nbsp;
        <InputText errorText={errorInputText} onChange={onTextChange} value={name} />
        <br />
        Date of birth:&nbsp;
        <InputDate errorDate={errorInputDate} onChange={onDateChange} value={date} />
        <br />
        Languages you know:&nbsp;
        <InputSelect errorSelect={errorInputSelect} onChange={onLanguageChange} value={language} />
        <br />
        I consent to my personal data:&nbsp;
        <InputCheckbox
          errorCheckbox={errorInputCheckbox}
          onChange={onApproveChange}
          value={approve}
        />
        <br />
        Select your gender:&nbsp;
        <InputSwitch errorSwitch={errorInputRadio} onChange={onGenderChange} value={gender} />
        <br />
        Upload profile picture:&nbsp;
        <InputFile errorFile={errorInputPicture} onChange={onPictureChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
