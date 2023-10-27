import React, { useEffect, useState } from 'react';
import MoviesList from '../MovieList/MoviesList';

import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=9a4b9e4760b7564e10a80d0c72f50665'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.home}>
      <h2 className={styles.title}>Trending today</h2>
      <MoviesList movies={trendingMovies} basePath="/movies" />
    </div>
  );
};

export default Home;
