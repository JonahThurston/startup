import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return( 
    <div className='body bg-dark '>
        <header>
            <nav class="navbar fixed-top navbar-dark">
                <h1>Wut2Watch<sup>&#8482;</sup></h1>

                <menu class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="watchList.html">Watch List</a>
                </li>
                </menu>
            </nav>
        </header>

        <main>App components go here</main>

        <footer>
            <p>Jonah Thurston</p>
            <a href="https://github.com/JonahThurston/startup.git" class="btn btn-primary">Jonah's GitHub</a>
        </footer>
    </div>
  );
}