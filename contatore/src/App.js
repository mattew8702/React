import React from 'react';
import './App.css';
import {Contatore} from './component/Contatore';
import {Persona} from './component/Persona';
import {FormDati} from './component/FormDati';

function App() {
  return (
    
    <div className="App">
      <FormDati/>
      <Persona nome="Valentina" cognome="Sommella" />
      <Persona nome="Carlo" cognome="Gatti" />
      <Persona nome="Giuseppe" cognome="Sommella" />
      <Persona nome="Carmen" cognome="Ribaudo" />
      <Contatore titolo="Contatore1" />
      <Contatore titolo="Contatore2" />
    </div>
  );
}


export default App;
