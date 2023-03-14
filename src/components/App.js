import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import DrinksPage from '../components/DrinksPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import WebshopPage from '../components/WebshopPage';
import Drink from '../components/Drink';
import what from '../assets/what.gif'
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
        <Route path='*' element={
          <>
            <h1>Page Not Found</h1>
            <p>Showing the ' * ' route.</p>
            <p>The Payment page going to be an Api from a bank I suppose.</p>
            <img src={what} alt="" />
          </>
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
