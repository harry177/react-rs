import { CardList } from '../CardList/CardList';
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { SearchBar } from '../SearchBar/SearchBar';
import './HomeStyles.css';

export const Home = () => {
  const [data, setData] = useState<string | undefined>();

  const callback = (data: string | undefined) => {
    setData(data);
  };

  return (
    <div className="container">
      <Header page="Main" />
      <SearchBar onClick={callback} />
      <CardList request={data} />
    </div>
  );
};
