import './App.css';

//Vistas
import { Home } from './views/Home';
import { Pizza } from './components/Pizza';
import { Carrito } from './views/Carrito';

// React-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// useContext
import Context from './context/MyContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
