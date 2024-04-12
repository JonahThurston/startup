import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { WatchList } from './watchlist/watchlist';

export default function App() {
    return(
        <BrowserRouter>
            <div className='body bg-dark '>
            <header>
                <nav className="navbar fixed-top navbar-dark">
                    <h1>Wut2Watch<sup>&#8482;</sup></h1>

                    <menu className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="WatchList">Watch List</NavLink>
                    </li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/WatchList' element={<WatchList />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <p>Jonah Thurston</p>
                <a href="https://github.com/JonahThurston/startup.git" className="btn btn-primary">Jonah's GitHub</a>
            </footer>
            </div>
        </BrowserRouter>
      );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}