import { IUserCard, UserCard } from '../UserCard/UserCard';
import React from 'react';
import './UserCardContainer.css';

export interface IUserCardContainerProps {
  userData: IUserCard[];
}

export const UserCardContainer: React.FC<IUserCardContainerProps> = ({ userData }) => {
  return (
    <div className="cards-container">
      {userData.map((card: IUserCard, index) => {
        if (
          /[A-Z]/.test(userData[index]?.name?.charAt(0)) &&
          +userData[index]?.date.slice(0, 4) < 2005 &&
          userData[index]?.language !== '-- List of languages --' &&
          userData[index]?.approve &&
          userData[index]?.gender &&
          userData[index]?.picture
        ) {
          return <UserCard key={index} {...card} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};
