import { Component } from "react";

class ChoiceButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="opcion">
            <button className="botones" onClick={() => this.props.changeChoice(this.props.choice)}>{this.props.choice.toUpperCase()}</button>
            <h2 className="opciones">{this.props.description}</h2>
        </div>
        )
    }
}
export default ChoiceButton;