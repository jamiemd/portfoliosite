import React, { Component } from 'react';

class Intro extends Component {

render () {
    return (
        <div>
        <div style={name}>
            Jamie Domingo
            </div>
              <div style={intro}>
             I'm an aspiring software engineer living in the San Francisco Bay Area. My interests are web development using React/Redux as well as learning more about VR/AR with C#/Unity. I'm also a Lambda School graduate of their computer science program. 
                </div>
                <div>Skills: Javascript, HTML, CSS, React, Redux, Express, Node, MongoDB, C#, Unity, Illustrator, Photoshop
                  </div>
                  </div>
            ) 

    
}


}


const name = {
    color: 'red',
    paddingTop: '200px'
  };
  
  const intro = {
    height: '200px',
    width: '400px'
  }

export default Intro;