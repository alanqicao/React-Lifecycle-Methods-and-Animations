import React, {Component} from 'react';
import './App.css';

class WindowInfo extends Component {
  constructor(props){
    super(props)
    this.state ={
      screenWidth:0,
      screenHeight:0
    }
  }

  componentDidMount(){
    this.updateWindowDimensions()
    //add evenlistenner
    window.addEventListener('resize',this.updateWindowDimensions)
  }




  updateWindowDimensions=()=>{
    this.setState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    })
  }

  render(){

    const {screenWidth,screenHeight} = this.state
  return (
    
    <div >
      <p>screenHeight: {screenHeight}</p>
      <p>screenWidth: {screenWidth}</p>

    </div>
  );
}}

export default WindowInfo;
