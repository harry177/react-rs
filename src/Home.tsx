import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { Card } from './Card';

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header page="Main" />
        <SearchBar />
        <Card
          picture="skdfjhkshfdk"
          header="First one"
          text="dolor ipsum dolor ipsum dolor ipsum"
          id={0}
        />
      </div>
    );
  }
}
