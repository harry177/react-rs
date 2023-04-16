import { IUserCard, UserCard } from '../UserCard/UserCard';
import React from 'react';
import './UserCardContainer.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { TypedUseSelectorHook } from 'react-redux';

export const UserCardContainer = () => {
  const configSelector: TypedUseSelectorHook<RootState> = useSelector;

  const savedForm = configSelector((state) => state.forms.forms);

  return (
    <div className="cards-container">
      {savedForm.map((card: IUserCard, index) => {
        if (
          savedForm[index]?.name.length > 3 &&
          +savedForm[index]?.date.slice(0, 4) <= 2005 &&
          savedForm[index]?.language !== '' &&
          savedForm[index]?.approve &&
          savedForm[index]?.gender &&
          savedForm[index]?.picture
        ) {
          return <UserCard key={index} {...card} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};
