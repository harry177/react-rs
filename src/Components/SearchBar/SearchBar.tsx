import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './SearchBarStyles.css';

export interface IState {
  searchValue: string;
}
interface ISubmit {
  onClick: (name: string | undefined) => void;
}

export const SearchBar: React.FC<ISubmit> = (props: ISubmit) => {
  const [state, setState] = useState(localStorage.getItem('input') || '');
  const initialValue = useRef('');

  useEffect(() => {
    initialValue.current = state;
  }, [state]);

  useEffect(() => {
    return () => {
      localStorage.setItem('input', initialValue.current);
    };
  }, []);

  const updateInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onClick(initialValue.current);
    localStorage.setItem('input', initialValue.current);
  };

  const buttonInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault();
      props.onClick(initialValue.current);
      localStorage.setItem('input', initialValue.current);
    }
  };

  return (
    <div className="search-bar">
      <form className="search-form">
        <div className="search-field">
          <label className="search-label">Search</label>
          <input
            className="search-input"
            type="text"
            aria-label="input"
            value={state}
            onChange={(event: ChangeEvent) => setState((event.target as HTMLInputElement).value)}
            onKeyDown={buttonInput}
          />
          <button type="button" onClick={updateInput}>
            Request
          </button>
        </div>
      </form>
    </div>
  );
};
