import React, { useContext, useEffect } from 'react'
import Context from '../context/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Card, Col, ListGroup, Button } from 'react-bootstrap';

export const DetallePizza = () => {

    // Hooks
    const {pizzas, setPizzas, pizzaDetalle, setPizzaDetalle} = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate()

    const volver = () => {
      navigate(`/`)
  }

    const selPizza = (paramsId) => {
      let pizza_desc = pizzas.filter(pizza => pizza.id === paramsId)
      if (pizza_desc.length !== 0) {
        pizza_desc = pizza_desc[0];
        setPizzaDetalle(pizza_desc)
      } else {
        pizza_desc = null;
      }
    } 

    useEffect(() => {
      selPizza(id)
  }, [])

  return (
    <div>
    <Container style={{ width: '60rem' }} fluid key={pizzaDetalle.id} className='p-6 m-6' >
        <Col >
                <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="card">
                      <div className="card-horizontal">
                        <div className="img-square-wrapper">
                          <img
                            src={pizzaDetalle.img}
                            style={{ width: '20rem', borderRadius: '100%' }}
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title" style={{ textTransform: 'uppercase' }}>{pizzaDetalle.name}</h4>
                          <p className="card-text mx-6">
                          {pizzaDetalle.desc}
                          </p>
                          <Card>
                          <Card.Body>
                          <ListGroup variant="flush">
                        {
                            pizzaDetalle?.ingredients?.map(ingredient =>{
                                return(
                                    <ListGroup.Item key={`${ingredient}`}>🍕 {ingredient}</ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                    <Button variant="outline-success" className='m-2' onClick={volver}>Volver 🔙</Button>
                    <Button variant="warning" className='m-2' >Añadir 🛒</Button>
                    <Card.Title className="my-2">Precio: {pizzaDetalle.price}</Card.Title>
                    </Card.Body>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Col>
    </Container>
</div>
  )
}
