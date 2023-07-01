import React from 'react'
import { Pizzas } from '../components/Pizzas'

export const Home = () => {
    return (
        <div>
            <div>
                <h1>¡Pizzeria Mamma Mia!</h1>
                <h6>Tenemos las mejores pizzas que podrás encontrar</h6>
            </div>
            <Pizzas/>
        </div>
    )
}
