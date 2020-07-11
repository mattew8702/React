import React, {Component} from 'react';
import './Contatore.css';

export class Contatore extends Component{
    constructor(props){
        super(props);
        this.state={
            conteggio:0
        };
    }
    render(){
        return (
        <div className="contatore">
            <h1>{this.props.titolo}</h1>
            <h1 className="contatore">{this.state.conteggio}</h1>
            <button onClick={(e) => this.incrementa(e)}>Incrementa</button>
            <button id="decrementa" onClick={(e) => this.azzero(e)}>Azzera</button>
            <button id="decrementa" onClick={(e) => this.decrementa(e)}>Decrementa</button>
        </div>
        );
    }

    incrementa(e){
        this.setState(state => ({
            conteggio: state.conteggio +1
        }));
        console.log("tasto incrementa cliccato")
    }

    decrementa(e){
        if (this.state.conteggio>0){
            this.setState(state => ({
                conteggio:state.conteggio-1
            }));
        }
        console.log("tasto decrementa cliccato")
    }

    azzero(e){
        this.setState(state => ({
            conteggio:0
        }));
        console.log("tasto azzero cliccato")
    }
}






