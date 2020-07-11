import React, { Component} from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Persona} from './Persona';
import ReactDOM from 'react-dom';
import './FormDati.css';

export class FormDati extends Component {
    constructor(props){
        super(props);
        this.state={
            nome:"",
            cognome:""
        }
    }

    cambiamento = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    eventoSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
        const elemento = <Persona nome={this.state.nome} cognome={this.state.cognome} />;
        ReactDOM.render(
        elemento,
        document.getElementById('root')
        );
        this.setState({
            nome:'',
            cognome:''
        })
        
    }

    render() {
        return (
            <div align="center" id="form">
            <Form onSubmit={this.eventoSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control name="nome" value={this.state.nome} onChange={this.cambiamento} type="text" placeholder="Inserisci il nome" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control name="cognome" value={this.state.cognome} onChange={this.cambiamento} type="text" placeholder="Inserisci il tuo cognome" />
                </Form.Group>
                <Button variant="primary" type="submit">
                   Invia
                </Button>
            </Form>
            </div>
        )
    }

}

export default FormDati
