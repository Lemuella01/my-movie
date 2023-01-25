import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import FooterNav from './component/footer/FooterNav';
import Home from './component/MovieCategories/PopularMovies';
import MoviesList from './component/moviecontents/MoviesList';
import Shows from './component/MovieCategories/Shows';
// import Movie from './component/moviecards/Movie';
import Nav from './component/nav/Nav';
import MovieDetails from './component/moviecontents/MovieDetails';
// import MovieInfo from './component/detailsBtn/Details';
import Reviews from './component/detailsBtn/Reviews';
import Details from './component/detailsBtn/Details';
import Description from './component/detailsBtn/Description';
import Search from './component/searchmovies/Search';

function App() {
  return (
    
    <div className="App">
   <Router>
      <Nav/> 
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        
        <Route path=':category' element={<MoviesList />}/>
        <Route path='/moviedetails/:id' element={<MovieDetails />}>
          {/* <Route path='de' element={<Description/>}/> */}
          <Route path='details' element={<Details/>}/>
          <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='tvshow' element={<Shows/>}/>
        <Route path='/search' element={<Search/>}/>

        
    
      </Routes>
         <FooterNav/>
       </Router>
    </div>
  );
}

export default App;
