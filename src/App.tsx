import React from "react";
import { Route, Switch } from "react-router-dom";

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
      <section className="modal-section">
<<<<<<< HEAD
        <ListViewContainer />
      </section>
      <header>
        <HeaderPage />
      </header>
      <main>
        <Switch>
          <Route path="/search" exact component={ZoneSearchPage}></Route>
        </Switch>
      </main>
      <footer></footer>
=======

      </section>
      <header>
        
      </header>
      <main>
        <BrowserRouter>
          <Route path="/search" exact component={ZoneSearchPage}></Route>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
>>>>>>> 1c09f127abd7fa025ed161b1d957cb63ed1f9aad
    </div>
  );
}

export default App;
