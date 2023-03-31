import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';

export interface IHeader {
  page: string;
}

export const Header = (props: IHeader) => {
  return (
    <div className="header">
      <div className="header-page">{props.page}</div>
      <ul className="header-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about-us">
          <li>About us</li>
        </Link>
        <Link to="/forms">
          <li>Forms</li>
        </Link>
      </ul>
    </div>
  );
};
