//Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Vistas
import { Home } from './views/Home';
import { Pizza } from './views/Pizza'
import { Carrito } from './views/Carrito';

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Hooks
import Context from './context/Context';
import { useEffect, useState } from 'react';

function App() {

  // Estados
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDetalle, setPizzaDetalle] = useState({})

  
  // Peticion ajax a pizzas.json
  const obtenerPizzas = async() => {
    const url = "/pizzas.json";
    try {
      const res = await fetch(url)
      const data = await res.json();
      setPizzas(data);
    } catch(error){
      console.log("Error al obtener datos:", error)
    }
  }
  
  //Contexto compartido
  const sharedData = { pizzas, setPizzas, pizzaDetalle, setPizzaDetalle, obtenerPizzas}

  // Carga las pizzas al montar componente
  useEffect(() => {
    obtenerPizzas()
  }, [])

  return (
    <div className="App">
      {/* Contexto */}
      <Context.Provider value={sharedData}>

        <BrowserRouter>

        {/* Rutas */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pizza/:id' element={<Pizza/>}/>
          <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
        </BrowserRouter>

      </Context.Provider>
    </div>
  );
}

export default App;
