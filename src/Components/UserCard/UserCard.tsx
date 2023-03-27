import React from 'react';

export interface IUserCard {
  name: string;
  date: string;
  language: string;
  approve: boolean;
  gender: string;
  picture: string;
}

export class UserCard extends React.Component<IUserCard> {
  constructor(props: IUserCard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.picture} className="card-picture" alt="picture of card" />
        <p className="card-name">{this.props.picture}</p>
        <p className="card-name">{this.props.name}</p>
        <p className="card-date">{this.props.date}</p>
        <p className="card-language">{this.props.language}</p>
        <p className="card-gender">{this.props.gender}</p>
      </div>
    );
  }
}
