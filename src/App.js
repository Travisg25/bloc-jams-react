import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library'
import Album from './components/Album'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src="assets/images/bloc_jams_logo.png" alt="bloc jams logo"/>

          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className="nav-link"  to = '/'>Home</Link>
            <Link className="nav-link"  to = '/library'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path = '/' component= {Landing} />
          <Route path='/library' component= {Library} />
          <Route path='/album/:slug' component= {Album} />

        </main>
      </div>
    );
  }
}

export default App;
