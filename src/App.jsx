import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import './index.css'
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  //api url
  const API_URL = 'http://www.omdbapi.com/?apikey=d2ce09c2'

  //initial state
  const initialState = {
    movies: [],
    search: '',
    headTitle: 'Avengers'
  }

  //function reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_MOVIES' :
        return {...state, movies: action.payload}
      case 'SET_SEARCH':
        return {...state, search: action.payload}
      case 'SET_HEADER_TITLE':
        return {...state, headTitle: action.payload}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  //fetch movie
  useEffect(() => {
    fetchMovies('avengers') //default
  }, [])

  const fetchMovies = async (query) => {
    try{
      const res = await fetch(`${API_URL}&s=${query}`)
      const data = await res.json()
      if (data.Search) {
        dispatch({ type: 'SET_MOVIES', payload: data.Search })
      }
      else {
        dispatch({ type: 'SET_MOVIES', payload: [] })
      }
    } catch (error){
      console.error('Error fetching data movies', error)
    }
  }

  const handleSearch = (query) => {
    dispatch({ type: 'SET_SEARCH', payload: query })
    dispatch({ type: 'SET_HEADER_TITLE', payload: query || 'Avengers' })
    fetchMovies(query)
  }

  return (
    <>
    {/*navbar*/}
      <nav className='py-3 bg-dark border-bottom fixed-top'>
        <div className='container d-flex flex-wrap'>
          <ul className='nav me-auto gap-5'>
            <li className='nav-item'>
              <div className='align-item-center text-center'>
                <h2 className='quicksand-600 text-white fs-3 text-decoration-none'>N'Chills</h2>
              </div>
            </li>
            <li className='nav-item'>
              <div className='d-flex gap-2 align-items-center'>
                <img className="nav-icon" src="https://cdn-icons-png.freepik.com/256/8129/8129602.png?uid=R172635660&ga=GA1.1.214562797.1730967086&semt=ais_hybrid://cdn-icons-png.flaticon.com/128/1179/1179120.png" alt="" />
                <a href="/" className='quicksand-600 text-white fs-5 text-decoration-none'>Movie</a>
              </div>
            </li>
            <li className='nav-item'>
              <div className='d-flex gap-2 align-items-center'>
                <img className="nav-icon" src="https://cdn-icons-png.freepik.com/256/8129/8129604.png?uid=R172635660&ga=GA1.1.214562797.1730967086" alt="" />
                <a href="/" className='quicksand-600 text-white fs-5 text-decoration-none'>Genre</a>
              </div>
            </li>
            <li className='nav-item'>
              <div className='d-flex gap-2 align-items-center'>
                <img className="nav-icon" src="https://cdn-icons-png.freepik.com/256/8129/8129645.png?uid=R172635660&ga=GA1.1.214562797.1730967086://cdn-icons-png.freepik.com/256/8129/8129602.png?uid=R172635660&ga=GA1.1.214562797.1730967086&semt=ais_hybrid://cdn-icons-png.flaticon.com/128/1179/1179120.png" alt="" />
                <a href="/" className='quicksand-600 text-white fs-5 text-decoration-none'>Year</a>
              </div>
            </li>
          </ul>
          <Search onSearch={handleSearch}/>
          <ul className='nav'>
            <li className='nav-item mx-5'>
              <a href="/" className='quicksand-600 text-white fs-5 text-decoration-none'>Login</a>
            </li>
            <li className='nav-item'>
              <a href="/" className='quicksand-600 text-white fs-5 text-decoration-none'>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
      {/*navbar*/}
      <Header title={state.headTitle}/>
      <Movie movies={state.movies}/>
    </>
  );
}

export default App;
