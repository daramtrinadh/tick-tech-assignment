import { Component } from "react";
import Home from "./components/Home";
import AboutRoute from './components/AboutRoute'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import "./App.css";

class App extends Component {
  state = { isDarkTheme: false };

  toggleTheme = () => {
    this.setState((prevState) => ({ isDarkTheme: !prevState.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <ThemeContext.Provider
        value={{ isDarkTheme, toggleTheme: this.toggleTheme }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutRoute} />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;
