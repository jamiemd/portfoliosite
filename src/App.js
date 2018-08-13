import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="name">
      Jamie Domingo
      </div>
        <div className="intro">
        I'm a web developer living in the San Francisco Bay Area.
          </div>
          <div>Skills: Javascript, HTML, CSS, React, Redux, Express, Node, MongoDB, C#, Unity, Illustrator, Photoshop
            </div>
        <div className="projects">
          <ul>
            <li>WikaKita</li>
            <li>DecisionJam</li>
              <li>Lantern Drop</li>
            </ul>
          </div>
        <div className="contact">
        Drop me message at contact@jamiedomingo.com
          </div>
      </div>
    );
  }
}

export default App;
