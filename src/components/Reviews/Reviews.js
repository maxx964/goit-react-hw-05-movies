import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.loadMovieReviews();
  }

  loadMovieReviews = async () => {
    const { movieId } = useParams();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9a4b9e4760b7564e10a80d0c72f50665`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ reviews: data.results });
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
    }
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.reviews}>
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    );
  }
}

export default Reviews;
