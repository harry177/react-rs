import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';
import { InputFile } from '../InputFile/InputFile';
import { InputSelect } from '../InputSelect/InputSelect';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { formSubmit } from '../../app/formsTableSlice';

export interface IFormsTable {
  name: string;
  date: string;
  language: string;
  approve: boolean;
  gender: string;
  picture: string;
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
  onTextChange,
  onDateChange,
  onLanguageChange,
  onApproveChange,
  onGenderChange,
  onPictureChange,
}) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const useConfigDispatch = () => useDispatch<AppDispatch>();

  const updateDispatch = useConfigDispatch();

  const handleForm: SubmitHandler<FieldValues> = () => {
    updateDispatch(
      formSubmit({
        name,
        date,
        language,
        approve,
        gender,
        picture,
      })
    );
    formRef.current?.reset();
    onTextChange('');
    onDateChange('');
    onLanguageChange('');
    onApproveChange(false);
    onGenderChange('');
    onPictureChange('');
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form className="form-table" onSubmit={handleSubmit(handleForm)} ref={formRef}>
      <label className="label-form">
        Name:&nbsp;
        <InputText
          value={name}
          label="textLabel"
          register={register}
          required={true}
          minLength={4}
          onChange={onTextChange}
        />
        <div className="error-input">
          {errors?.textLabel?.type === 'required' && (
            <p>The field cannot be empty. Please, enter your name</p>
          )}
          {errors?.textLabel?.type === 'minLength' && (
            <p>The length of name must be at least 4 characters long. Try again</p>
          )}
        </div>
        <br />
        Date of birth:&nbsp;
        <InputDate
          value={date}
          label="dateLabel"
          register={register}
          required
          validate={(date) => +date.slice(0, 4) <= 2005}
          onChange={onDateChange}
        />
        <div className="error-input">
          {errors?.dateLabel?.type === 'required' && (
            <p>The field cannot be empty. Please, enter your birth date</p>
          )}
          {errors?.dateLabel?.type === 'validate' && (
            <p>The year of birth cannot be more than 2005. Try again</p>
          )}
        </div>
        <br />
        Languages you know:&nbsp;
        <InputSelect
          value={language}
          label="selectLabel"
          register={register}
          required
          onChange={onLanguageChange}
        />
        <div className="error-input">
          {errors?.selectLabel?.type === 'required' && (
            <p>Language should be selected. Try again</p>
          )}
        </div>
        <br />
        I consent to my personal data:&nbsp;
        <InputCheckbox
          required
          value={approve}
          label="checkboxLabel"
          register={register}
          onChange={onApproveChange}
        />
        <div className="error-input">
          {errors?.checkboxLabel?.type === 'required' && <p>Please, fill this field.</p>}
        </div>
        <br />
        Select your gender:&nbsp;
        <InputSwitch
          label="radioLabel"
          register={register}
          onChange={onGenderChange}
          value={gender}
          required
        />
        <div className="error-input">
          {errors?.radioLabel?.type === 'required' && <p>Please, fill this field.</p>}
        </div>
        <br />
        Upload profile picture:&nbsp;
        <InputFile label="fileLabel" register={register} onChange={onPictureChange} required />
        <div className="error-input">
          {errors?.fileLabel?.type === 'required' && (
            <p>You should upload your profile picture. Try again</p>
          )}
        </div>
      </label>
      <button type="submit" className="button-submit">
        Submit
      </button>
    </form>
  );
};
