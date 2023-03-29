import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputText } from '../../src/Components/InputText/InputText';

describe('InputText component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputText
        childRef={React.createRef<HTMLInputElement>()}
        errorText={'The first letter of your name must be capitalized. Try again' || ''}
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('text');
  });
});
