import { InputSelect } from '../InputSelect/InputSelect';
import React from 'react';
import './FormsTableStyles.css';
import { InputText } from '../InputText/InputText';
import { InputDate } from '../InputDate/InputDate';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { InputSwitch } from '../InputSwitch/InputSwitch';

export class FormsTable extends React.Component {
  render() {
    return (
      <form className="form-table">
        <label className="label-form">
          Name:&nbsp;
          <InputText />
          <br />
          Date of birth:&nbsp;
          <InputDate />
          <br />
          Languages you know:&nbsp;
          <InputSelect />
          <br />
          I consent to my personal data:&nbsp;
          <InputCheckbox />
          <br />
          Choose your gender:&nbsp;
          <InputSwitch />
        </label>
      </form>
    );
  }
}
