import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// PAGES
import ZoneSearchPage from './pages/ZoneSearchPage/ZoneSearchPage';

// Global SCSS
import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <BrowserRouter>
          <Route path="/search" exact component={ZoneSearchPage}>searchPage</Route>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
