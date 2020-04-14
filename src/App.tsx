import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <BrowserRouter>
          <Route path="/search" exact>searchPage</Route>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
