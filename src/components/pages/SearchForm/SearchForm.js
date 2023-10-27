import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import styles from './SearchForm.module.css'

class SearchForm extends Component {
  state = {
    query: '',
  };

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value });
  }

   handleSearchSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSearch(query);
  }

  render() {
    return (
      <div className={styles.movies}>
     <form className={ styles.searchContainer} onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
          <button type="submit">
            <BiSearchAlt size={36} style={{ color: 'white' }} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
