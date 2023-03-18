import React from 'react';
import { Header } from './Header';

export class ErrorNotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <Header page="404" />
      </div>
    );
  }
}
