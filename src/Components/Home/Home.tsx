import { CardList } from '../CardList/CardList';
import React from 'react';
import { Header } from '../Header/Header';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomeStyles.css';

export const Home = () => {
  return (
    <div className="container">
      <Header page="Main" />
      <SearchBar />
      <CardList />
    </div>
  );
};
