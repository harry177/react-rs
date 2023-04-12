import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputSwitch } from '../../src/Components/InputSwitch/InputSwitch';

describe('InputSwitch component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputSwitch
        onChange={(gender: string) => {}}
        value="Male"
        register={(name: string) => ({
          required: true,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
          name: 'input',
        })}
        required
        label="radioLabel"
      />
    );
    const input: HTMLInputElement[] = screen.getAllByRole('radio');
    expect(input[0] && input[1]).toBeInTheDocument();
    expect(input[0] && input[1]).not.toBeChecked();
    expect(input[0].type).toEqual('radio');
    expect(input[1].type).toEqual('radio');
  });
});
