import React, { Component } from 'react'

class Animation extends Component{
  state = {
    xPos: 100,
    dx : 4,

  };

  componentDidMount(){
    this.ticker = setInterval(()=>{
      this.nextStep()
    },60)
  }

  componentDidUpdate(prevProps,prevState){
    // if(prevState.xPos < this.props.width){
    //   //do somthing
      
    // }
    if(prevState.xPos > this.props.width - boxWidth ){
      //do somthing
      this.setState({
        dx: -4,
        xPos: this.props.width - boxWidth -1

      });

    if(prevState.xPos < 0 ){
      //do somthing
      this.setState({
        dx: 4,
        xPos: 1

      })
    }
  }
}

 
nextStep(){
  const{xPos,dx} = this.state
  this.setState({
    xPos: xPos + dx
  })
}




  render(){
    const {width, height} = this.props
    const {xPos} = this.state;
    return(
    <div style={{...styles.container,width, height:height}}>
      <div style ={{...styles.moveMe, left: xPos, } }></div>

    </div>
    )
  }

}

const boxWidth = 20

const styles = {
  container:{
    position:'relative',
    border:'1px solid',
    backgroundColor: '#f1f1f1',
  
  },
  moveMe:{
    position:'absolute',
    height:'20px',
    width:`${boxWidth}px`,
    backgroundColor:'#67fe28',
    // marginLeft: '20px',
    // marginTop: '10px',
    // top:20,
    // bottom:20,

  }
}
export default Animation;