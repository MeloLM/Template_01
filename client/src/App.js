import './App.css';
import React from 'react';
import NavBar  from './components/NavBar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import ArticleDetail from './components/ArticleDetail';
import ArticleIndex from './components/ArticleIndex';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/articles' element={<ArticleIndex />} />
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/article-detail/:articleId' element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
