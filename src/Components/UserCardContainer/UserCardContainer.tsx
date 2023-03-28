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
          if (
            /[A-Z]/.test(this.props.userData[index]?.name?.charAt(0)) &&
            +this.props.userData[index]?.date.slice(0, 4) < 2005 &&
            this.props.userData[index]?.language !== '-- List of languages --' &&
            this.props.userData[index]?.approve === true &&
            this.props.userData[index]?.gender
          ) {
            return <UserCard key={index} {...card} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
