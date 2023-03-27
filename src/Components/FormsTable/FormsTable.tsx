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
  textInputRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxInputRef = React.createRef<HTMLInputElement>();
  radioInputMaleRef = React.createRef<HTMLInputElement>();
  radioInputFemaleRef = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();

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
      picture: this.fileInputRef.current?.value || '',
    });
    console.log(this.fileInputRef.current?.value.slice(0, 12));
    if (this.textInputRef.current) {
      this.textInputRef.current.value = '';
    }
    if (this.dateInputRef.current) {
      this.dateInputRef.current.value = '';
    }
    if (this.selectRef.current) {
      this.selectRef.current.value = 'Please choose one option';
    }
    if (this.checkboxInputRef.current) {
      this.checkboxInputRef.current.value = '';
    }
    if (this.fileInputRef.current) {
      this.fileInputRef.current.value = '';
    }
    if (this.radioInputMaleRef.current) {
      this.radioInputMaleRef.current.value = '';
    }
    if (this.radioInputFemaleRef.current) {
      this.radioInputFemaleRef.current.value = '';
    }
  };

  render() {
    return (
      <form className="form-table" onSubmit={this.handleSubmit}>
        <label className="label-form">
          Name:&nbsp;
          <InputText childRef={this.textInputRef} />
          <br />
          Date of birth:&nbsp;
          <InputDate childRef={this.dateInputRef} />
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
