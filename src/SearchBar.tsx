import React, { ChangeEvent } from 'react';

export class SearchBar extends React.Component {
  state = { term: localStorage.getItem('input') || '' };

  onInputChange = (event: ChangeEvent) => {
    this.setState({ term: (event.target as HTMLInputElement).value });
    localStorage.setItem('input', (event.target as HTMLInputElement).value);
  };

  render() {
    return (
      <div className="search-bar">
        <form className="search-form">
          <div className="search-field">
            <label>Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
