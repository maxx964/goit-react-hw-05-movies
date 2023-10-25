import React, { useState } from 'react';

import styles from './Cast.module.css';

const Cast = ({ cast, actorPhotosData }) => {
  const [isCastActive, setIsCastActive] = useState(false);

  return (
    <div>
      <h2
        onClick={() => setIsCastActive(!isCastActive)}
        className={`${styles.clickableHeader} ${isCastActive ? styles.active : ''}`}
      >
        Cast
      </h2>
      {isCastActive && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.castItem}>
              {actorPhotosData[actor.id] && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actorPhotosData[actor.id]}`}
                  alt={actor.name}
                  className={styles.actorPhoto}
                />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
