import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { ErrorNotFound } from './Components/ErrorNotFound/ErrorNotFound';
import { Forms } from './Components/Forms/Forms';

export class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="forms" element={<Forms />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
