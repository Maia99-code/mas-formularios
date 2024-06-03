import './App.css';
import { useState } from 'react';
import Forms from './components/Forms';

function App() {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    email: ''
  });

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(datos);
  };


  return (
    <div>
      <Forms 
      handleSubmit = {handleSubmit}
      handleChange = {handleChange}
      datos = {datos}
      />

      <h2>Datos ingresados:</h2>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p>
      <p>Email: {datos.email}</p>
    </div>
  );

}
export default App;

