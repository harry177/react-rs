import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputFile } from '../../src/Components/InputFile/InputFile';

describe('InputFile component', () => {
  test('Should show existance of input element and input type', () => {
    const component = (
      <InputFile
        onChange={(name: string) => {}}
        register={(name: string) => ({
          required: true,
          onBlur: undefined,
          onChange: (e) => console.log(e),
          ref: undefined,
        })}
        required
        label="fileLabel"
      />
    );
    render(component);
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('file');
  });
});
