import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputDate } from '../../src/Components/InputDate/InputDate';

describe('InputDate component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputDate
        onChange={(name: string) => {}}
        value={'2023-04-05'}
        register={(name: string) => ({
          required: true,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
          name: 'input',
        })}
        required
        label="dateLabel"
        validate={(date) => +date.slice(0, 4) <= 2005}
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('date');
  });
});
