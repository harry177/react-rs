import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputSelect } from '../../src/Components/InputSelect/InputSelect';

describe('InputSelect component', () => {
  test('Should show existance of select element and matching of one option value', () => {
    render(
      <InputSelect
        onChange={(name: string) => {}}
        value="English"
        register={(name: string) => ({
          required: true,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
          name: 'select',
        })}
        required
        label="selectLabel"
      />
    );
    const select: HTMLSelectElement = screen.getByRole('listbox');
    expect(select).toBeInTheDocument();
    const option: HTMLOptionElement = screen.getByRole('option', { name: /German/i });
    expect(option).toBeInTheDocument();
  });
});
