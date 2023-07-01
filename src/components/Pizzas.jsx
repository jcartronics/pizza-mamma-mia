import React, { useContext } from 'react'
import Context from '../context/Context'
import { Button, Card, Container, Row } from 'react-bootstrap';

export const Pizzas = () => {
    const {pizzas, setPizzas} = useContext(Context);

  return (
    <div>
        <Container fluid className='mx-6 my-3 p-2'>
            <Row>
                <Card>
                    <Card.Img/>
                    <Card.Body>
                        <Card.Title>Napolitana</Card.Title>
                        <Card.Text>Ingredientes</Card.Text>
                        <Card.Title>Precio:</Card.Title>
                        <Button>Ver Más</Button>
                        <Button>Añadir</Button>
                    </Card.Body>
                </Card>
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
