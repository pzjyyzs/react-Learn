import React from "react";
import Movies from "./components/vidly/Movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/vidly/customers";
import Rentals from "./components/vidly/rentals";
import NotFound from "./components/vidly/notFound";
import NavBar from "./components/vidly/navBar";
import MovieForm from "./components/vidly/movieForm";
import "./App.css";
import LoginForm from "./components/vidly/loginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="App">
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
