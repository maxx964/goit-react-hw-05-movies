import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';

import styles from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem('searchedMovies');
    if (savedMovies) {
      this.setState({ movies: JSON.parse(savedMovies) });
    }
  }

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
      const movies = data.results;
      localStorage.setItem('searchedMovies', JSON.stringify(movies));
      this.setState({ movies });
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
          <button onClick={this.searchMovies}>
            <BiSearchAlt size={36} style={{ color: 'white' }} />
          </button>
        </div>
        <ul className={styles.movieList}>
          {this.state.movies.map((movie) => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                <div className={styles.moviePoster}>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <p className={styles.movieTitle}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movies;
