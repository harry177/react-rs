import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputDate } from '../../src/Components/InputDate/InputDate';

describe('InputDate component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputDate
        childRef={React.createRef<HTMLInputElement>()}
        errorDate={'It seems, you too young to be a RS Student. Try again' || ''}
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('date');
  });
});
