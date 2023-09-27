import * as React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './Login';
import Signup from './Signup';
import Home from "./Home";


function App(){
    

   return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<LogIn />}></Route>
      <Route path = '/Home' element = {<Home />}></Route>
      <Route path = '/signup' element = {<Signup />}></Route>
    </Routes>
    </BrowserRouter>
)
}

export default App;

