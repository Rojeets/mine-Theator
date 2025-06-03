import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Call from './components/apicall';
import SearchBar from './components/Header.component';
import FaviorateMovies from './components/FaviorateList.component';
import MovieCard from './components/Movielist.component';



function App() {
  const [movieData, setMovieData] = useState();
  const clicked = async (value, type) => {
    // setresult(apiresult);
    console.log("search = " ,type);
    const result = await Call(value, type);
    setMovieData(result);
  }
  return (
    <>
      {/* <Call /> */}

      <Router>
        <SearchBar clicked={clicked} />
        <Routes>
          <Route path='/search' element={<MovieCard data={movieData} />} ></Route>
          <Route path='/' element={<FaviorateMovies />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
