import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputText } from '../../src/Components/InputText/InputText';

describe('InputText component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputText
        onChange={(name: string) => {}}
        value="John"
        required={true}
        register={(name: string) => ({
          required: true,
          minLength: 4,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
          name: 'input',
        })}
        label="textLabel"
        minLength={4}
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('text');
  });
});
