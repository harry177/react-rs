import React from 'react';
import { Header } from '../Header/Header';

export class ErrorNotFound extends React.Component {
  render() {
    return (
      <div className="error-container">
        <Header page="404" />
      </div>
    );
  }
}
