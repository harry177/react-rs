import React from 'react';
import './CardStyles.css';
import { IUser } from '../CardList/CardList';

export const Card = (props: IUser) => {
  return (
    <div className="card">
      <img src={props.image} className="card-picture" alt="picture of card" />
      <p className="card-header">{props.name}</p>
      <div className="card-text">{props.status}</div>
    </div>
  );
};
