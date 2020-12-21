import React from 'react';
import  Dashboard  from './Dashboard';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div className="ui grid container" style={{ marginTop: '10px' }}>
         <div className="row">
          <div className="twelve wide column">
            <i className="calculator"></i>
            <h1>Calculate Mortgage with RBC</h1>
          </div>
          </div>
          <div className="row">
          <div className="fourteen wide column">
            <Dashboard/>
          </div>
          </div>
        </div>
    );
  }
}

export default App;