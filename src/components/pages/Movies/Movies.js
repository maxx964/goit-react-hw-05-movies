import React, { Component } from 'react';
import MoviesList from '../MovieList/MoviesList';
import SearchForm from '../SearchForm/SearchForm';

import styles from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
  };

  defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  componentDidMount() {
    const savedMovies = localStorage.getItem('searchedMovies');
    if (savedMovies) {
      this.setState({ movies: JSON.parse(savedMovies) });
    }
  }

  handleSearch = async (query) => {
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

  render() {
    return (
      <div className={styles.movies}>
        <h1>Popular Movies</h1>
        <div className={styles.searchContainer}>
          <SearchForm onSearch={this.handleSearch} />
        </div>
        <MoviesList movies={this.state.movies} basePath="/movies" />
      </div>
    );
  }
}

export default Movies;
