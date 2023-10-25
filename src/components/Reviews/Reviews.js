import React, { useState } from 'react';

import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  const [isReviewsActive, setIsReviewsActive] = useState(false);

  return (
    <div>
      <h2
        onClick={() => setIsReviewsActive(!isReviewsActive)}
        className={`${styles.clickableHeader} ${isReviewsActive ? styles.active : ''}`}
      >
        Reviews
      </h2>
      {isReviewsActive && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
