import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DrinksPage from '../pages/DrinksPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import WebshopPage from '../pages/WebshopPage';
import Drink from './Drink';
import PageNotFound from '../pages/PageNotFound';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='about' element={<AboutPage />}/>
        <Route  path='drinks' element={<DrinksPage />}>
          <Route path=':drinkId' element={<Drink />}/>
          <Route index element={<h3>Select one of the coffees from above</h3>}/>
        </Route>
        <Route  path='webshop' element={<WebshopPage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
