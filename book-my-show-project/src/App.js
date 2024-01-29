
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';
import React from 'react';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = '8d901cdd2cbe025215a71567913f90a5';

function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/Movies/:id' element={<MoviePage />}></Route>
        <Route path='/play' element={<PlayPage />}></Route>
    </Routes>
  );
}

export default App;
