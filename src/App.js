import { Component } from "react";

import Home from "./components/Home";
import AboutRoute from './components/AboutRoute'
import ProjectsRoute from './components/ProjectsRoute'
import ResumeRoute from './components/ResumeRoute'
import SkillsRoute from './components/SkillsRoute'
import NotFound from './components/NotFound'

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
            <Route exact path="/projects" component={ProjectsRoute} />
            <Route exact path="/resume" component={ResumeRoute} />
            <Route exact path="/skills" component={SkillsRoute} />
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;
