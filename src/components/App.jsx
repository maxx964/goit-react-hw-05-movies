import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

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
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;

