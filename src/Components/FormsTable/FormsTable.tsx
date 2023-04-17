import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';
import { InputFile } from '../InputFile/InputFile';
import { InputSelect } from '../InputSelect/InputSelect';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { formSubmit } from '../../app/formsTableSlice';
import {
  newApprove,
  newDate,
  newGender,
  newLanguage,
  newName,
  newPicture,
} from '../../app/formFieldSlice';

export const FormsTable = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const useConfigDispatch = () => useDispatch<AppDispatch>();
  const updateDispatch = useConfigDispatch();
  const configSelector: TypedUseSelectorHook<RootState> = useSelector;

  const bestName = configSelector((state) => state.text.text);
  const bestDate = configSelector((state) => state.text.date);
  const bestLanguage = configSelector((state) => state.text.language);
  const bestApprove = configSelector((state) => state.text.approve);
  const bestGender = configSelector((state) => state.text.gender);
  const bestPicture = configSelector((state) => state.text.picture);

  const handleForm: SubmitHandler<FieldValues> = () => {
    updateDispatch(
      formSubmit({
        name: bestName,
        date: bestDate,
        language: bestLanguage,
        approve: bestApprove,
        gender: bestGender,
        picture: bestPicture,
      })
    );
    formRef.current?.reset();
    updateDispatch(newName(''));
    updateDispatch(newDate(''));
    updateDispatch(newLanguage(''));
    updateDispatch(newApprove(false));
    updateDispatch(newGender(''));
    updateDispatch(newPicture(''));
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
          value={bestName}
          label="textLabel"
          register={register}
          required={true}
          minLength={4}
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
          value={bestDate}
          label="dateLabel"
          register={register}
          required
          validate={(date) => +date.slice(0, 4) <= 2005}
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
        <InputSelect value={bestLanguage} label="selectLabel" register={register} required />
        <div className="error-input">
          {errors?.selectLabel?.type === 'required' && (
            <p>Language should be selected. Try again</p>
          )}
        </div>
        <br />
        I consent to my personal data:&nbsp;
        <InputCheckbox required value={bestApprove} label="checkboxLabel" register={register} />
        <div className="error-input">
          {errors?.checkboxLabel?.type === 'required' && <p>Please, fill this field.</p>}
        </div>
        <br />
        Select your gender:&nbsp;
        <InputSwitch label="radioLabel" register={register} value={bestGender} required />
        <div className="error-input">
          {errors?.radioLabel?.type === 'required' && <p>Please, fill this field.</p>}
        </div>
        <br />
        Upload profile picture:&nbsp;
        <InputFile label="fileLabel" register={register} required />
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
