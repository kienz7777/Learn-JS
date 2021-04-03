import React, { Component } from 'react';
import './App.css';
import Increase from './Increase';
import HelloWorld from './HelloWorld';
import MyChild from './MyChild';

class App extends Component{

  constructor(props){
    super(props)
    
    this.state = {
      childName : 'ChildName'
    }
  }

  render(){
    return (
      <div className="App">
        <Increase/>
  
        <HelloWorld/>
  
        <MyChild name={this.state.childName}/>
      </div>
    );
  }
}

export default App;
