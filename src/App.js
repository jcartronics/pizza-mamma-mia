import './App.css';

//Vistas
import { Home } from './views/Home';
import { Pizza } from './components/Pizza';
import { Carrito } from './views/Carrito';

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Hooks
import Context from './context/Context';
import { useEffect, useState } from 'react';

function App() {
  // Estados
  const [pizzas, setPizzas] = useState([]);
  const url = "./pizzas.json";

  const obtenerPizzas = async() => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      setPizzas(data);
    } catch(error){
      console.log("Error al obtener datos:", error)
    }
  }

  useEffect(() => {
    obtenerPizzas()
  }, [])

  console.log(pizzas);

  return (
    <div className="App">
      <Context.Provider value={{pizzas, setPizzas}}>
        <BrowserRouter>
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
