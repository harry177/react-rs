import React from 'react';
import './CardStyles.css';

export interface ICard {
  id: number;
  header: string;
  text: string;
  picture: string;
}

export class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.picture} className="card-picture" alt="picture of card" />
        <p className="card-header">{this.props.header}</p>
        <div className="card-text">{this.props.text}</div>
      </div>
    );
  }
}
