import React from 'react';
import './HeaderStyles.css';
import { Link } from 'react-router-dom';

export interface IHeader {
  page: string;
}

export class Header extends React.Component<IHeader> {
  constructor(props: IHeader) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="header-page">{this.props.page}</div>
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
  }
}
