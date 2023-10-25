import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Отримання інформації про фільм
        const movieDetailsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setMovieDetails(movieDetailsResponse.data);

        // Отримання інформації про акторський склад
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setCast(castResponse.data.cast);

        // Отримання обзорів
        const reviewsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={styles.title}>{movieDetails.title}</h1>
       {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
     

      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>

      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Content: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
