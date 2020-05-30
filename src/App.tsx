import React from "react";
import { Route, Switch } from "react-router-dom";

// Global SCSS
import "./App.scss";

// PAGES
import LandingPage from "./pages/LandingPage/LandingPage";
import ZoneSearchPage from "./pages/ZoneSearchPage/ZoneSearchPage";
import HeaderPage from "./pages/HeaderPage/HeaderPage";
import SearchInputPage from './pages/SearchInputPage/SearchInputPage';

// Components
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <header>
        <HeaderPage />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/search" exact component={ZoneSearchPage}></Route>
          <Route path="/searchInput/:step" exact component={SearchInputPage}></Route>
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
