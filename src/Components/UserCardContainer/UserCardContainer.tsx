import { IUserCard, UserCard } from '../UserCard/UserCard';
import React from 'react';
import './UserCardContainer.css';

export interface IUserCardContainerProps {
  userData: IUserCard[];
}

export class UserCardContainer extends React.Component<IUserCardContainerProps> {
  render() {
    return (
      <div className="cards-container">
        {this.props.userData.map((card: IUserCard, index) => {
          return <UserCard key={index} {...card} />;
        })}
      </div>
    );
  }
}
