import React, { useContext } from 'react'
import Context from '../context/Context'

export const Pizzas = () => {
    const {pizzas, setPizzas} = useContext(Context);

  return (
    <div>
        {pizzas.map(
            (pizza) => {
                return (
                    <img src={pizza.img} />
                )
            }
        )
        }
    </div>
  )
}
