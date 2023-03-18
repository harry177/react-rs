import React from 'react';
import { Header } from './Header';

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header page="Main" />
      </div>
    );
  }
}
