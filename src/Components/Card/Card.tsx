import React, { useState } from 'react';
import './CardStyles.css';
import { IUser } from '../CardList/CardList';
import { CardModal } from '../CardModal/CardModal';

export const Card = (props: IUser) => {
  const [modalWindow, setModalWindow] = useState(false);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setModalWindow(true);
  };
  return (
    <>
      <div className="card" onClick={clickHandler}>
        <img src={props.image} className="card-picture" alt="picture of card" />
        <p className="card-header">{props.name}</p>
        <div className="card-text">{props.status}</div>
      </div>
      <CardModal active={modalWindow} setActive={setModalWindow}>
        <p className="modal-string">Full data:</p>
        <p className="modal-string">Name: {props.name}</p>
        <p className="modal-string">Status: {props.status}</p>
        <p className="modal-string">Gender: {props.gender}</p>
        <p className="modal-string">Species: {props.species}</p>
        <img src={props.image} className="card-picture" alt="picture of card" />
      </CardModal>
    </>
  );
};
