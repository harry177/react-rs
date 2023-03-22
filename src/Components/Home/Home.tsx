import { CardList } from '../CardList/CardList';
import React from 'react';
import { Header } from '../Header/Header';
import { SearchBar } from '../SearchBar/SearchBar';
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
