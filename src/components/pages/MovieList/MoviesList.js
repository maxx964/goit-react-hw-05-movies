import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MoviesList.module.css';

const MoviesList = ({ movies, basePath }) => {
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link to={`${basePath}/${movie.id}`} className={styles.movieLink}>
            <div className={styles.moviePoster}>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w154${movie.poster_path}` : defaultImg}
                alt={movie.title}
              />
            </div>
            <p className={styles.movieTitle}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
