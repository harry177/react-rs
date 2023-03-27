import { FormsTable } from '../FormsTable/FormsTable';
import React from 'react';
import { Header } from '../Header/Header';
import './FormsStyles.css';
import { UserCardContainer } from '../UserCardContainer/UserCardContainer';
import { IUserCard } from '../UserCard/UserCard';

export class Forms extends React.Component<object, { data: IUserCard[] }> {
  state = { data: [] };
  setData = (form: IUserCard) => {
    this.setState((state) => {
      return {
        data: [...state.data, form],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <Header page="Forms" />
        <FormsTable setData={this.setData} />
        <UserCardContainer userData={this.state.data} />
      </div>
    );
  }
}
