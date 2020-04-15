import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Global SCSS
import './App.scss';

// PAGES
import ZoneSearchPage from './pages/ZoneSearchPage/ZoneSearchPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <BrowserRouter>
          <Route path="/search" exact component={ZoneSearchPage}></Route>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
