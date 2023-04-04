import { FormsTable } from '../FormsTable/FormsTable';
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './FormsStyles.css';
import { UserCardContainer } from '../UserCardContainer/UserCardContainer';
import { IUserCard } from 'Components/UserCard/UserCard';

export const Forms = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [language, setLanguage] = useState('');
  const [approve, setApprove] = useState(false);
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState('');
  const [cardsList, setCardsList] = useState<IUserCard[]>([]);

  const handleTextChange = (name: string) => {
    setName(name);
  };

  const handleDateChange = (date: string) => {
    setDate(date);
  };

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  const handleApproveChange = (approve: boolean) => {
    setApprove(approve);
  };

  const handleGenderChange = (gender: string) => {
    setGender(gender);
  };

  const handlePictureChange = (picture: string) => {
    setPicture(picture);
  };

  return (
    <div className="container">
      <Header page="Forms" />
      <FormsTable
        name={name}
        date={date}
        language={language}
        approve={approve}
        gender={gender}
        picture={picture}
        onTextChange={handleTextChange}
        onDateChange={handleDateChange}
        onLanguageChange={handleLanguageChange}
        onApproveChange={handleApproveChange}
        onGenderChange={handleGenderChange}
        onPictureChange={handlePictureChange}
        onSubmit={setCardsList}
      />
      <UserCardContainer userData={cardsList} />
    </div>
  );
};
