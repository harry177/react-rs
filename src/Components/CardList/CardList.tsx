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

interface ICardList {
  request: string | undefined;
}

export const CardList: React.FC<ICardList> = ({ request }) => {
  const [users, setUsers] = useState();

  const apiURL = 'https://rickandmortyapi.com/api/character';

  const fetchData = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(request);
    if (data && request !== undefined) {
      const yupi = data.results.filter((user: IUser) => {
        return user.name.toLowerCase().includes(request.toLowerCase());
      });
      setUsers(yupi);
    } else {
      setUsers(data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, [request]);

  return (
    <div className="cards-container">
      {((users && request) || users) &&
        (users as []).map((user: IUser) => {
          return <Card key={user.id} {...user} />;
        })}
    </div>
  );
};
