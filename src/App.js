import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';

const Page = ({ title }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </header>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
    <p>
      <a href="http://sertiscorp.com">sertiscorp</a>
    </p>
  </div>
);

const Home = props => ( <Page title="Home" /> );
const About = props => ( <Page title="About" /> );
const Settings = props => ( <Page title="Settings" /> );

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;
