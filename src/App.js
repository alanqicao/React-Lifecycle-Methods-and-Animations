import React, {Component} from 'react';
import './App.css';
import WindowInfo from './WindowInfo';
import Animation from './Animation'

class App extends Component {
  constructor(props){
    super(props)
    
  }

  componentDidMount(){
    
  }




  render(){

  return (
    
    <div className="App" style={{display:'flex',justifyContent:'center',
    flexDirection:'column',alignItems:'center'}}>
      <WindowInfo /> 
      {/* <Mo/> */}
      {/* add another listener mouse postion so when you move your mose show X and Y 
      coordinates is will be sammer in window state */}
      {/* <Animation width ={600} height ={600}/> */}
      {/* passing props that will be used in styling */}
    </div>
  );
}}

export default App;
