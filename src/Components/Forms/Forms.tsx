import { FormsTable } from '../FormsTable/FormsTable';
import React from 'react';
import { Header } from '../Header/Header';
import './FormsStyles.css';
import { UserCardContainer } from '../UserCardContainer/UserCardContainer';

export const Forms = () => {
  return (
    <div className="container">
      <Header page="Forms" />
      <FormsTable />
      <UserCardContainer />
    </div>
  );
};
