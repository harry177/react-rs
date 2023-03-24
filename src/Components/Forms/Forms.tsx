import { FormsTable } from '../FormsTable/FormsTable';
import React from 'react';
import { Header } from '../Header/Header';
import './FormsStyles.css';

export class Forms extends React.Component {
  render() {
    return (
      <div className="container">
        <Header page="Forms" />
        <FormsTable />
      </div>
    );
  }
}
