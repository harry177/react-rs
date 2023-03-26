import React from 'react';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';
import { InputFile } from '../InputFile/InputFile';
import { InputSelect } from '../InputSelect/InputSelect';

export class FormsTable extends React.Component {
  constructor(props: never) {
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

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.textInputRef.current?.value);
    console.log(this.dateInputRef.current?.value);
    console.log(this.selectRef.current?.value);
    console.log(this.checkboxInputRef.current?.checked);
    console.log(
      this.radioInputMaleRef.current?.checked
        ? this.radioInputMaleRef.current?.value
        : this.radioInputFemaleRef.current?.checked
        ? this.radioInputFemaleRef.current?.value
        : false
    );
    console.log(this.fileInputRef.current?.value);
  }

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
