import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from "../../components/NavBar/NavBar";
import { movies } from "../../data.js";

function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      <h1>Movies</h1>
      {user ? (
        <>
        <NavBar user={user} />
        <Routes>
        <Route path="/" element={<MoviesListPage movies={movies} />} />
        <Route path="/Movie/:movieName" element={<MovieDetailPage movies={movies} />} />
        <Route path="/actors" element={<ActorListPage movies={movies} />} />
        </Routes>
        </>
      ) : (
        <LoginPage setUser ={setUser} />
      )}
    </main>
  );
}

export default App;
