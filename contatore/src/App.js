import React from 'react';
import './App.css';
import {Contatore} from './component/Contatore';
import {Persona} from './component/Persona';

function App() {
  return (
    <div className="App">
      <Contatore titolo="Contatore1" />
      <Contatore titolo="Contatore2" />
      <Persona nome="Valentina" cognome="Sommella" />
      <Persona nome="Carlo" cognome="Gatti" />
      <Persona nome="Giuseppe" cognome="Sommella" />
      <Persona nome="Carmen" cognome="Ribaudo" />
    </div>
  );
}


export default App;
