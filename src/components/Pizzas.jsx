import React, { useContext } from 'react'
import Context from '../context/Context'
import { Button, Card, Container, Row } from 'react-bootstrap';

export const Pizzas = () => {
    const {pizzas, setPizzas} = useContext(Context);

  return (
    <div>
        <Container fluid className='mx-6 my-3 p-2'>
            <Row className='justify-content-md-center'>
                {pizzas?.slice(0,4).map(
                    pizza => {
                        return (
                            <Card style={{width:'18rem'}}>
                                <Card.Img src={pizza.img} variant='top' className='m-2'/>
                                <Card.Body>
                                    <Card.Title className='titulo-pizza'>{pizza.name}</Card.Title>
                                    <Card.Text>
                                        <h6>Ingredientes:</h6>
                                        <ul className='ingredientes-pizza'>
                                            {pizza?.ingredients?.map(
                                                ingrediente => {
                                                    return (
                                                        <li>{ingrediente}</li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                    </Card.Text>
                                    <Card.Title>$ {pizza.price}</Card.Title>
                                    <Button variant='info'>Ver Más</Button>
                                    <Button variant='danger'>Añadir</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                )
                }
            </Row>
            </Container>

    </div>
    // <div>
    //     {pizzas.map(
    //         (pizza) => {
    //             return (
    //                 <img src={pizza.img} />
    //             )
    //         }
    //     )
    //     }
    // </div>
  )
}
