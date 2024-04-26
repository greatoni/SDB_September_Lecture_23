import logo from './logo.svg';
import Auth from './components/auth/Auth';
import './App.css';
import { useState, useEffect  } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieIndex from './components/movies/MovieIndex';
import MovieEdit from './components/movies/MovieEdit';
import LogOut from './components/auth/logout/logout';

function App() {

  const [sessionToken, setSessionToken ]= useState('Sample Token')


  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

/* 
  # useEffect()
    - Allows us to perform side effects in functional components.
    - Accepts two arguments
      - function
      - dependency
        - optional
        - Can denote a specific event to to trigger

    EXAMPLES:
    useEffect(() => {
      Runs on every render
    });

    useEffect(() => {
      Runs only on the first render
    }, []);

    useEffect(() => {
        Runs on first render
        Runs any time any dependency changes
    }, [state]);

  */

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])
  

  console.log('App:', sessionToken)
  return (
    <div className="App">
      {
        sessionToken !== '' ?
        <LogOut setToken={setSessionToken} /> :
        null
      }
      <Routes>
      <Route
        path='/'
        element={<Auth updateToken={updateToken}/>}
      />

      <Route
        path='/movie' 
        element = {<MovieIndex token ={sessionToken}/>}
      />

      <Route
        path='/movie/update/:id' 
        element = {<MovieEdit token ={sessionToken}/>}
      />
      </Routes>
    </div>
  );
}

export default App;
