import { CardList } from './CardList';
import React from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import './HomeStyles.css';

export class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header page="Main" />
        <SearchBar />
        <CardList />
      </div>
    );
  }
}
