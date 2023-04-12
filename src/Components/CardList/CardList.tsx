import React, { useEffect, useState } from 'react';
import './CardListStyles.css';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiURL = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (request !== undefined) {
        const davai = apiURL + `/?name=${request}`;

        const response = await fetch(davai);

        if (response?.ok) {
          const data = await response.json();
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setUsers(data.results);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setUsers([]);
        }
      } else {
        const chance = apiURL + `/?name=${users}`;
        const response = await fetch(chance);
        if (response?.ok) {
          const data = await response.json();
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setUsers(data.results);
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setUsers([]);
        }
      }
    };
    fetchData();
  }, [request]);

  return (
    <div className="cards-container">
      {((users && request) || users) &&
        (users as []).map((user: IUser) => {
          return <Card key={user.id} {...user} />;
        })}
      {!users[0] && <p>Nothing was found on your request...</p>}
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : null}
    </div>
  );
};
