import React, { useContext } from 'react'
import Context from '../context/Context'
import { Button, Card, Container, Row, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Pizzas = () => {
    const {pizzas, setPizzas, pizzaDetalle, setPizzaDetalle} = useContext(Context);
    const navigate = useNavigate();

    const irPizza = (pizzaId) => {
        navigate(`/pizza/${pizzaId}`)
    }

  return (
    <div>
        <Container fluid className='mx-6 my-3 p-2'>
            <Row className='justify-content-md-center'>
                {pizzas?.slice(0,4).map(
                    pizza => {
                        return (
                            <Card key={pizza.id} style={{width:'18rem'}}>
                                <Card.Img src={pizza.img} variant='top' className='m-2'/>
                                <Card.Body>
                                    <Card.Title className='titulo-pizza'>{pizza.name}</Card.Title>
                                    <ListGroup.Item>
                                        <h6>Ingredientes:</h6>
                                        <ul className='ingredientes-pizza'>
                                            {pizza?.ingredients?.map(
                                                ingrediente => {
                                                    return (
                                                        <li key={ingrediente+pizza.id}><i>🍕</i>{ingrediente}</li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </ListGroup.Item>
                                    <Card.Title>$ {pizza.price}</Card.Title>
                                    <Button variant='info' onClick={() => irPizza(pizza.id)}>Ver Más 👀</Button>
                                    <Button variant='danger'>Añadir 🛒</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                )
                }
            </Row>
            </Container>

    </div>
  )
}
