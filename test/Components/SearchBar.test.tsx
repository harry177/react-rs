import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchBar } from './../../src/Components/SearchBar/SearchBar';

describe('SearchBar component', () => {
  test('Should show existance of input element and equality of values in input and localStorage', () => {
    render(<SearchBar />);
    const input: HTMLInputElement = screen.getByLabelText('input');
    const storageValue = localStorage.getItem(JSON.stringify('input'));
    expect(input).toBeInTheDocument();
    expect(input.value).toEqual(storageValue || '');
  });
});
