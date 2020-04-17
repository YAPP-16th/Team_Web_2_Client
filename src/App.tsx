import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Global SCSS
import "./App.scss";

// PAGES
import ZoneSearchResultPage from "./pages/ZoneSearchResultPage/ZoneSearchResultPage";
import ZoneDetailPage from './pages/ZoneDetailPage/ZoneDetailPage';
import HeaderPage from "./pages/HeaderPage/HeaderPage";

// Containers
import ListViewContainer from "./containers/ListViewContainer/ListViewContainer";

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
        <BrowserRouter>
          <Switch>
            <Route
              path="/search/result"
              exact
              component={ZoneSearchResultPage}
            ></Route>
            <Route
              path="/search/zone/:id"
              exact
              component={ZoneDetailPage}
            ></Route>
          </Switch>
        </BrowserRouter>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
