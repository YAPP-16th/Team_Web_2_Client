import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Global SCSS
import './App.scss';

// PAGES
import ZoneSearchPage from './pages/ZoneSearchPage/ZoneSearchPage';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import SearchInputPage from './pages/SearchInputPage/SearchInputPage';

// Containers
import ListViewContainer from './containers/ListViewContainer/ListViewContainer';

function App() {
  return (
    <div className="App">
      <section className="modal-section">
        <ListViewContainer />
      </section>
      <header>
        <HeaderPage />
      </header>
      <main>
        <Switch>
          <Route path="/search" exact component={ZoneSearchPage}></Route>
          <Route path="/searchInput/:step" exact component={SearchInputPage}></Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
