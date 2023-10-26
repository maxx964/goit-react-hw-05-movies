import React, { useEffect, useState } from 'react';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/week?api_key=9a4b9e4760b7564e10a80d0c72f50665'
        );
        if (!response.ok) {
          throw  Error('Network response was not ok');
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
      <h2>Trending today</h2>
      <ul className={styles.movieList}>
        {trendingMovies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
