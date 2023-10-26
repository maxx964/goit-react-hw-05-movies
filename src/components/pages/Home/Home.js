import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <h2 className={styles.title}>Trending today</h2>
      <ul className={styles.movieList}>
        {trendingMovies.map((movie) => (
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
};

export default Home;
