import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CrypoContext from './components/CrypoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <CrypoContext>
  <Navbar/>
    <Routes>
        <Route exact path='/' element={<App/>}/>
    </Routes>
    </CrypoContext>
  </BrowserRouter>
  </React.StrictMode>
);

