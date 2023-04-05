import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './SearchBarStyles.css';

export const SearchBar = () => {
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
          />
        </div>
      </form>
    </div>
  );
};
