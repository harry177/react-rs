import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputCheckbox } from '../../src/Components/InputCheckbox/InputCheckbox';

describe('InputCheckbox component', () => {
  test('Should show existance of input element and input type', () => {
    render(
      <InputCheckbox
        childRef={React.createRef<HTMLInputElement>()}
        errorCheckbox={'Please, consent your personal data. Try again' || ''}
      />
    );
    const input: HTMLInputElement = screen.getByLabelText('input');
    expect(input).toBeInTheDocument();
    expect(input.type).toEqual('checkbox');
  });
});
