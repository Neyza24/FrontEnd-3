import React, {Component} from "react";
import {Container, ContainerBtn, ContainerCounter, BtnStyleAdd, BtnStyleSub} from "./CounterStyles.js";

class ParentCount extends Component{

  constructor(props) {
    super(props);

    this.state = {
      number: 1
    }

  }
  
    
  
  


  addition = ()=>{
    console.log("función de agregar");
    this.setState(prevState => {
      return {
        number: prevState.number +1
      }
    })
  }

  substraction = ()=>{
    console.log("función de restar");
    this.setState(prevState => {
      return {
        number: prevState.number > 0 ? prevState.number -1: prevState.number
      }
    });
  }
    




render(){
  return (
    <Container>
          <ContainerCounter>
          <p>{this.state.number}</p>
          </ContainerCounter>
          
          <ContainerBtn>
          <BtnStyleAdd onClick={this.substraction.bind(this)}>Restar</BtnStyleAdd>
          <BtnStyleSub onClick={this.addition.bind(this)}>Sumar</BtnStyleSub>
          </ContainerBtn>

    

    </Container>

  );
};
}

export default ParentCount;
