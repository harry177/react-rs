import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { ErrorNotFound } from './ErrorNotFound';

export class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
