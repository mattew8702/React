import React, {Component} from 'react';
import './Persona.css';

export class Persona extends Component{
    constructor(props){
        super(props);
        this.state={
            maggioreeta:"",
            scritta: <button onClick={(e) => this.setMaggioreEta(e)}>Imposta la maggiore età</button>
        }
    }
    render(){
        return (
            <div className="persona">
                <h1>Nome: {this.props.nome}</h1>
                <h1>Cognome: {this.props.cognome}</h1>
                {this.state.scritta}
            </div>
        );
    }

    setMaggioreEta(e){
        if (this.state.maggioreeta===""){
            this.setState(state => ({
                maggioreeta: "Maggiore età",
                scritta: <div><button onClick={(e) => this.setMaggioreEta(e)}>Togli la maggiore età</button><h1 id="maggiore">Maggiore Età</h1></div>
            }));
        }else{
            this.setState(state => ({
                maggioreeta: "",
                scritta:  <button onClick={(e) => this.setMaggioreEta(e)}>Imposta la maggiore età</button>
            }));
        }
        console.log("setMaggioreEta in esecuzione")
    }
}