import React from 'react';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';
import { InputFile } from '../InputFile/InputFile';
import { InputSelect } from '../InputSelect/InputSelect';
import { IUserCard } from '../UserCard/UserCard';

export interface IForm {
  setData: (data: IUserCard) => void;
}

export class FormsTable extends React.Component<IForm> {
  constructor(props: IForm) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  formRef = React.createRef<HTMLFormElement>();
  textInputRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxInputRef = React.createRef<HTMLInputElement>();
  radioInputMaleRef = React.createRef<HTMLInputElement>();
  radioInputFemaleRef = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();

  textErrorRef = '';
  dateErrorRef = '';

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.setData({
      name: this.textInputRef.current?.value || '',
      date: this.dateInputRef.current?.value || '',
      language: this.selectRef.current?.value || '',
      approve: this.checkboxInputRef.current?.checked || false,
      gender: this.radioInputMaleRef.current?.checked
        ? this.radioInputMaleRef.current?.value
        : this.radioInputFemaleRef.current?.checked
        ? this.radioInputFemaleRef.current?.value
        : '',
      picture: this.fileInputRef.current?.files
        ? URL.createObjectURL(this.fileInputRef.current.files[0])
        : '',
    });
    if (this.textInputRef.current && !/[A-Z]/.test(this.textInputRef.current.value.charAt(0))) {
      this.textErrorRef = 'The first letter of your name must be capitalized. Try again';
    } else {
      this.textErrorRef = '';
    }
    if (this.dateInputRef.current && +this.dateInputRef.current.value.slice(0, 4) > 2005) {
      this.textErrorRef = 'It seems, you too young to be a RS Student. Try again';
    } else {
      this.textErrorRef = '';
    }
    this.formRef.current?.reset();
  };

  render() {
    return (
      <form className="form-table" onSubmit={this.handleSubmit} ref={this.formRef}>
        <label className="label-form">
          Name:&nbsp;
          <InputText childRef={this.textInputRef} errorText={this.textErrorRef} />
          <br />
          Date of birth:&nbsp;
          <InputDate childRef={this.dateInputRef} errorDate={this.dateErrorRef} />
          <br />
          Languages you know:&nbsp;
          <InputSelect childRef={this.selectRef} />
          <br />
          I consent to my personal data:&nbsp;
          <InputCheckbox childRef={this.checkboxInputRef} />
          <br />
          Select your gender:&nbsp;
          <InputSwitch maleRef={this.radioInputMaleRef} femaleRef={this.radioInputFemaleRef} />
          <br />
          Upload profile picture:&nbsp;
          <InputFile childRef={this.fileInputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
