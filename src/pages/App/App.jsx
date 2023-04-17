import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUSer] = useState({});

  return (
    <main className="App">
      <h1>Movies</h1>
      {user ? (
        <>
        <NavBar />
        <Routes>
        <Route path="/" element={<MoviesListPage />} />
        <Route path="/Movie/:movieName" element={<MovieDetailPage />} />
        <Route path="/actors" element={<ActorListPage />} />
        </Routes>
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default App;
