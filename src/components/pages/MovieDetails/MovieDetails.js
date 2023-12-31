import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

import styles from './MovieDetails.module.css'

const Cast = lazy(() => import('../Cast/Cast')); 
const Reviews = lazy(() => import('../Reviews/Reviews')); 

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [actorPhotosData, setActorPhotosData] = useState({});
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetailsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setMovieDetails(movieDetailsResponse.data);
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9a4b9e4760b7564e10a80d0c72f50665`
        );
        setCast(castResponse.data.cast);
        const photosData = {};
        await Promise.all(
          castResponse.data.cast.map(async (actor) => {
            const actorDetails = await axios.get(
              `https://api.themoviedb.org/3/person/${actor.id}?api_key=9a4b9e4760b7564e10a80d0c72f50665`
            );
            if (actorDetails.data.profile_path) {
              photosData[actor.id] = actorDetails.data.profile_path;
            } else {
              photosData[actor.id] = defaultImg;
            }
          })
        );
        setActorPhotosData(photosData);
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
  const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.div}>
      <Link to="/" className={styles.backToHomeLink} onClick={handleGoBack}>
        <TiArrowBackOutline size={16} style={{ color: 'white' }} />Go back
      </Link>
      <h1 className={styles.title}>{movieDetails.title}</h1>
      <hr />
      <p><b>Release Date:</b> {movieDetails.release_date}</p>
      <img 
            src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : defaultImg}
            alt="poster"
            className="movie-poster"
        style={{ maxWidth: '400px'}}
          />
      <p><b>Rating:</b> {movieDetails.vote_average}</p>
      <p><b>Overview:</b> {movieDetails.overview}</p>
      <p><b>Genres:</b> {genres}</p>
      <hr />
      <h2>Additional Information</h2>
      <hr />
      <Suspense fallback={<div>Loading Cast and Reviews...</div>}>
        <Cast cast={cast} actorPhotosData={actorPhotosData} />
        <Reviews reviews={reviews} />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
