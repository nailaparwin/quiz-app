import React from 'react';
//import { fetchURL, DifficultyLevel, Category } from './API/FetchAPI';
import { GlobalProvider } from './context/GlobalState';
import {  GlobalStyle } from './App.styles';
import { Routes, Route } from 'react-router';
import  MainGrid  from './components/MainGrid';
import  Home  from './components/Home';
import  Title  from './components/Title';
import  DLevel  from './components/DLevel';
import  Quiz  from './components/Quiz';

function App() {
  //const data = fetchURL(10, DifficultyLevel.EASY ,Category.ALL);
  //console.log(data);
  return (
    <GlobalProvider>
    < GlobalStyle/>
    <Title/>
    <Home/>
    <Routes>		
		<Route path="/" element={<MainGrid />}> </Route>
    <Route path="/level" element={<DLevel/>}> </Route>
    <Route path="/quiz" element={<Quiz />}> </Route>
    </Routes>
    </GlobalProvider>
    
  );
}

export default App;
