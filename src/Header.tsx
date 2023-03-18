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
        {this.props.page}
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about-us">
            <li>About us</li>
          </Link>
        </ul>
      </div>
    );
  }
}
