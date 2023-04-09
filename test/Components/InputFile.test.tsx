import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputFile } from '../../src/Components/InputFile/InputFile';

describe('InputFile component', () => {
  test('Should show existance of input element and input type', () => {
    const component = <InputFile childRef={React.createRef<HTMLInputElement>()} />;
    render(component);
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('file');
  });
});
