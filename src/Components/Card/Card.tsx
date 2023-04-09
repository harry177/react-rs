import React from 'react';
import './CardStyles.css';

export interface ICard {
  id: number;
  header: string;
  text: string;
  picture: string;
}

export const Card = (props: ICard) => {
  return (
    <div className="card">
      <img src={props.picture} className="card-picture" alt="picture of card" />
      <p className="card-header">{props.header}</p>
      <div className="card-text">{props.text}</div>
    </div>
  );
};
