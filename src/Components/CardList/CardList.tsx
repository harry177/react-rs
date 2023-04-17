import React from 'react';
import './CardListStyles.css';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../app/apiSlice';
import { RootState } from '../../app/store';

export interface IUser {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
}

export interface ICardList {
  request: string | undefined;
}

export const CardList: React.FC<ICardList> = () => {
  const configSelector: TypedUseSelectorHook<RootState> = useSelector;

  const fetchState = configSelector((state) => state.search.search);

  const { data = [], isSuccess, isError, isFetching } = useGetCharactersQuery(fetchState);

  return (
    <div className="cards-container">
      {isSuccess &&
        data.results.map((user: IUser) => {
          return <Card key={user.id} {...user} />;
        })}
      {isError && <p>Nothing was found on your request...</p>}
      {isFetching ? (
        <div className="loader">
          <Loader />
        </div>
      ) : null}
    </div>
  );
};
