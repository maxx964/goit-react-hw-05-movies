import React, { useState } from 'react';

import styles from './Cast.module.css';

const Cast = ({ cast, actorPhotosData }) => {
  const [isCastActive, setIsCastActive] = useState(false);

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <h2
        onClick={() => setIsCastActive(!isCastActive)}
        className={`${styles.clickableHeader} ${isCastActive ? styles.active : ''}`}
      >
        Cast
      </h2>
      {isCastActive && (
        <ul className={styles.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.castItem}>
              {actorPhotosData[actor.id] && (
                <img
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${actor.profile_path}` : defaultImg}
                  alt={actor.name}
                  className={styles.actorPhoto}
                />
              )}
              <p className={styles.actorName}>{actor.name}</p>
              <p className={styles.characterName}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
