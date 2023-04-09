import React from 'react';
import './UserCard.css';

export interface IUserCard {
  name: string;
  date: string;
  language: string;
  approve: boolean;
  gender: string;
  picture: string;
}

export const UserCard: React.FC<IUserCard> = ({ ...card }) => {
  return (
    <div className="card">
      <img src={card.picture} className="card-picture" alt="picture of card" />
      <p className="card-name">{card.name}</p>
      <p className="card-date">{card.date}</p>
      <p className="card-language">{card.language}</p>
      <p className="card-gender">{card.gender}</p>
    </div>
  );
};
