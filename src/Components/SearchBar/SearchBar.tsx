import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { TypedUseSelectorHook } from 'react-redux';
import { updateClick, buttonClick } from '../../app/searchBarSlice';
import './SearchBarStyles.css';

export interface IState {
  searchValue: string;
}

export const SearchBar = () => {
  const configSelector: TypedUseSelectorHook<RootState> = useSelector;
  const searchInput = configSelector((state) => state.search.search);
  const [state, setState] = useState(searchInput);

  const useConfigDispatch = () => useDispatch<AppDispatch>();

  const updateDispatch = useConfigDispatch();

  const updateInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateDispatch(updateClick(state));
  };

  const buttonInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault();
      updateDispatch(buttonClick(state));
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
