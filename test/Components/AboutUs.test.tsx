import React from 'react';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AboutUs } from './../../src/Components/AboutUs/AboutUs';

describe('AboutUs component', () => {
  test('Should show title "About us" in header', () => {
    render(<AboutUs />, { wrapper: BrowserRouter });
    expect(screen.getAllByText(/About us/i)).toBeDefined();
  });
});
