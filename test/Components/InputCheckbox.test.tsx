import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputCheckbox } from '../../src/Components/InputCheckbox/InputCheckbox';

describe('InputCheckbox component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputCheckbox
        onChange={(approve: boolean) => {}}
        value
        register={(name: string) => ({
          required: true,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
          name: 'input',
        })}
        required
        label="checkboxLabel"
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('checkbox');
  });
});
