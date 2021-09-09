import { Component } from "react";
import ChoiceButton from "./ChoiceButton";
import data from "./data.json"

class Choice extends Component{
    
    constructor(){
        super();
        this.state = {
            valor:1,
            historia:data[0],
            choice:"",
            choiceArray:[],
        };
        this.changeChoice = this.changeChoice.bind(this);
    };
    
    componentDidMount(){console.log("se cargo el componente choice")};
    componentDidUpdate(){ if(this.state.historia.id !== this.state.valor + this.state.choice){
        this.setState({historia:data.find(x => x.id === this.state.valor + this.state.choice)})}}
    componentWillUnmount(){};

    changeChoice(choice){
        if(this.state.valor >= 5){
            alert("Fin.")
        }
        else{
            let temp = this.state.choice;
            this.setState({
                valor:this.state.valor + 1,
                choiceArray: temp === "" ? this.state.choiceArray:[...this.state.choiceArray, temp.toUpperCase()],
                choice: choice
            })
        }
    };

    changeChoice = this.changeChoice.bind(this);
    
    render(){
        return( 
            <div className="layout" >
                <h1 className="historia">{this.state.historia.historia}</h1>
                <div className="opciones">
                    <ChoiceButton choice="a" description={this.state.historia.opciones.a} changeChoice={this.changeChoice}></ChoiceButton>
                    <ChoiceButton choice="b" description={this.state.historia.opciones.b} changeChoice={this.changeChoice}></ChoiceButton>
                </div>
                <div className="recordatorio">
                    <h3>Selección anterior: {this.state.choice.toUpperCase()}</h3>
                    <h4>Historial de opciones elegidas: </h4>
                    <ul>
                        {this.state.choiceArray.map((choice, i) => <li key={i}>{choice}</li>)}
                    </ul>
                </div>
            </div>
        )
    };
  }
  
  
  export default Choice;