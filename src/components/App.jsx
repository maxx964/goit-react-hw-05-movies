import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

import styles from './App.module.css'

function App() {
  return (
    <Router>
     <div className={styles.container}>
        <nav className={styles.nav}>
           <ul className={styles.menu}>
            <li>
              <Link to="/" className={styles.menuLink}>
        Home
      </Link>
            </li>
            <li>
              <Link to="/movies" className={styles.menuLink}>
        Movies
      </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
