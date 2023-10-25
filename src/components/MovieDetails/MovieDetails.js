import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { Link } from 'react-router-dom';
import Cast from 'components/Cast/Cast'; // Імпортуємо компонент Cast
import Reviews from 'components/Reviews/Reviews'; // Імпортуємо компонент Reviews


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [actorPhotosData, setActorPhotosData] = useState({});
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

        // Отримання фото акторів
        const photosData = {};
        await Promise.all(
          castResponse.data.cast.map(async (actor) => {
            const actorDetails = await axios.get(
              `https://api.themoviedb.org/3/person/${actor.id}?api_key=9a4b9e4760b7564e10a80d0c72f50665`
            );
            if (actorDetails.data.profile_path) {
              photosData[actor.id] = actorDetails.data.profile_path;
            }
          })
        );
        setActorPhotosData(photosData);

        // Отримання відгуків
        const reviewsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details and actor photos:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className={styles.backToHomeLink}>
        Back to Home
      </Link>
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

      <Cast cast={cast} actorPhotosData={actorPhotosData} /> {/* Використовуємо компонент Cast */}
      <Reviews reviews={reviews} /> {/* Використовуємо компонент Reviews */}
    </div>
  );
};

export default MovieDetails;
