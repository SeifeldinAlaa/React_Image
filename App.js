import React, { Component } from 'react';
import theImage from './stallone-variety-story.jpg';



class App extends Component {



  render() {

    return (
      <div>
        <img src={theImage} className="img" />
      </div>


    );
  }
}

export default App;
