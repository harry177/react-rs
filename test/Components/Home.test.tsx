import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './../../src/Components/Home/Home';

describe('Home component', () => {
  test('Should show title "Home" in header', () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getAllByText(/Home/i)).toBeDefined();
  });
});
