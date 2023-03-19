import React from 'react';
import './CardListStyles.css';
import { Card, ICard } from '../Card/Card';

const cards: ICard[] = [
  {
    id: 0,
    picture: '../src/assets/barselona.jpg',
    header: 'Barselona',
    text: 'A beautiful pearl in the coastal nacklace of Spain',
  },
  {
    id: 1,
    picture: '../src/assets/berlin.jpg',
    header: 'Berlin',
    text: 'Actually a central capital of Europe',
  },
  {
    id: 2,
    picture: '../src/assets/belgrade.jpg',
    header: 'Belgrade',
    text: 'A pleasant discovery in the heart of the Balkans',
  },
  {
    id: 3,
    picture: '../src/assets/istanbul.jpg',
    header: 'Istanbul',
    text: 'The place where Europe and Asia meet each other',
  },
  {
    id: 4,
    picture: '../src/assets/london.jpg',
    header: 'London',
    text: 'London is.. a capital of Great Britain!',
  },
  {
    id: 5,
    picture: '../src/assets/new-york.jpg',
    header: 'New-York',
    text: 'Just a Big Apple of the world',
  },
  {
    id: 6,
    picture: '../src/assets/paris.jpg',
    header: 'Paris',
    text: 'See Paris and see again',
  },
  {
    id: 7,
    picture: '../src/assets/rome.jpg',
    header: 'Rome',
    text: 'Everyone knows that all roads lead to Rome',
  },
  {
    id: 8,
    picture: '../src/assets/tokyo.jpg',
    header: 'Tokyo',
    text: 'East is a delicate matter',
  },
];

export class CardList extends React.Component {
  render() {
    return (
      <div className="cards-container">
        {cards.map((card: ICard) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    );
  }
}
