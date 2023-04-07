import React, { useEffect, useState } from 'react';
import './CardListStyles.css';
import { Card } from '../Card/Card';

export interface IUser {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
}

export const CardList = () => {
  const [users, setUsers] = useState();

  const apiURL = 'https://rickandmortyapi.com/api/character';

  const fetchData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();

    setUsers(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cards-container">
      {users &&
        (users as []).map((user: IUser) => {
          return <Card key={user.id} {...user} />;
        })}
    </div>
  );
};
