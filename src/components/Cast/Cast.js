import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    this.loadCast();
  }

  loadCast = async () => {
    const { movieId } = useParams();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9a4b9e4760b7564e10a80d0c72f50665`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ cast: data.cast });
    } catch (error) {
      console.error('Error fetching cast details:', error);
    }
  }

  render() {
    const { cast } = this.state;

    return (
      <div className={styles.cast}>
        <h3>Cast</h3>
        <ul className={styles.castList}>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
