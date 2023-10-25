import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };

  searchMovies = async () => {
    const { query } = this.state;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9a4b9e4760b7564e10a80d0c72f50665&query=${query}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ movies: data.results });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  handleSearchChange = (e) => {
    this.setState({ query: e.target.value });
  }

  render() {
    return (
      <div className={styles.movies}>
        <h1>Popular Movies</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for movies..."
            value={this.state.query}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.searchMovies}>Search</button>
        </div>
        <ul className={styles.movieList}>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
