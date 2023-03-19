import React, { ChangeEvent } from 'react';
import './SearchBarStyles.css';

export class SearchBar extends React.Component {
  state = { term: localStorage.getItem('input') || '' };

  componentWillUnmount() {
    if (this.state.term) {
      localStorage.setItem('input', this.state.term);
    }
  }

  onInputChange = (event: ChangeEvent) => {
    this.setState({ term: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <div className="search-field">
            <label className="search-label">Search</label>
            <input
              className="search-input"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
