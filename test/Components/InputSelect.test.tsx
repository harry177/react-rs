import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputSelect } from '../../src/Components/InputSelect/InputSelect';

describe('InputSelect component', () => {
  test('Should show existance of select element and matching of one option value', () => {
    render(
      <InputSelect
        childRef={React.createRef<HTMLSelectElement>()}
        errorSelect={'Please, select language from the list. Try again' || ''}
      />
    );
    const select: HTMLSelectElement = screen.getByRole('listbox');
    expect(select).toBeInTheDocument();
    const option: HTMLOptionElement = screen.getByRole('option', { name: /German/i });
    expect(option).toBeInTheDocument();
  });
});
