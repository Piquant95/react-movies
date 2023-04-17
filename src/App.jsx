import './App.css';
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from './pages/LoginPage/LoginPage';
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';

function App() {
  const [user, setUSer] = useState({});

  return (
    <main className="App">
      <h1>Movies</h1>
      {user ? (
        <>
        <NavBar />
        <Routes>
        <Route path="/Movies" element={<MoviesListPage />} />
        <Route path="/Movie/detail" element={<MovieDetailPage />} />
        </Routes>
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default App;
