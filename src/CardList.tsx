import React from 'react';
import './CardListStyles.css';
import { Card, ICard } from './Card';

const cards: ICard[] = [
  {
    id: 0,
    picture: 'uuuuu',
    header: 'one',
    text: '1111111',
  },
  {
    id: 1,
    picture: 'uuuuu',
    header: 'two',
    text: '222222',
  },
  {
    id: 2,
    picture: 'uuuuu',
    header: 'three',
    text: '333333',
  },
  {
    id: 3,
    picture: 'uuuuu',
    header: 'four',
    text: '444444',
  },
  {
    id: 4,
    picture: 'uuuuu',
    header: 'five',
    text: '555555',
  },
  {
    id: 5,
    picture: 'uuuuu',
    header: 'six',
    text: '6666666',
  },
  {
    id: 6,
    picture: 'uuuuu',
    header: 'seven',
    text: '777777777',
  },
  {
    id: 7,
    picture: 'uuuuu',
    header: 'eight',
    text: '888888',
  },
  {
    id: 8,
    picture: 'uuuuu',
    header: 'nine',
    text: '9999999',
  },
];

export class CardList extends React.Component {
  render() {
    return (
      <div className="card-container">
        {cards.map((card: ICard) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    );
  }
}
