import React, { component } from 'react';
import MovieCard from '../../components/NavBar/MovieCard/MovieCard';



function MoviesListPage(props) {
  return (
    <div className ="container">
        {
            props.movies.map(movie => {
                return <MovieCard key={movie.title} movie={movie} />
            })
        }
    </div>
  )
}


export default MoviesListPage;