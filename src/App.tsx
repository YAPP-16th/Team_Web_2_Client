import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// Global SCSS
import "./App.scss";

// PAGES
import ZoneSearchPage from "./pages/ZoneSearchPage/ZoneSearchPage";
import HeaderPage from "./pages/HeaderPage/HeaderPage";

// Containers
import ListViewContainer from "./containers/ListViewContainer/ListViewContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section className="modal-section">
          <ListViewContainer />
        </section>
        <header>
          <HeaderPage />
        </header>
        <main>
          <Link to="/search?key=value">Click</Link>
          <Switch>
            <Route path="/search" exact component={ZoneSearchPage}></Route>
          </Switch>
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
