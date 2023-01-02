import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import FooterNav from './component/footer/FooterNav';
import Home from './component/main/Home';
import MoviesList from './component/moviecards/MoviesList';
import Shows from './component/main/Shows';
// import Movie from './component/moviecards/Movie';
import Nav from './component/nav/Nav';

function App() {
  return (
    <div className="App">
   <Router>
      <Nav/> 
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='movie/' element={<MoviesList/>}/>
        <Route path='show/' element={<Shows/>}/>
    
      </Routes>
         <FooterNav/>
       </Router>
    </div>
  );
}

export default App;
