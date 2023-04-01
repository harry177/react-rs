import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './SearchBarStyles.css';

export const SearchBar = () => {
  // state = { term: localStorage.getItem('input') || '' };

  const [state, setState] = useState(localStorage.getItem('input') || '');
  const initialValue = useRef('');

  /* componentWillUnmount() {
    if (this.state.term) {
      localStorage.setItem('input', this.state.term);
    }
  } */

  useEffect(() => {
    initialValue.current = state;
  }, [state]);

  useEffect(() => {
    return () => {
      localStorage.setItem('input', initialValue.current);
    };
  }, []);

  /* onInputChange = (event: ChangeEvent) => {
    this.setState({ term: (event.target as HTMLInputElement).value });
  }; */

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
