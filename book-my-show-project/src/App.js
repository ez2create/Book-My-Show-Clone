
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';
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
