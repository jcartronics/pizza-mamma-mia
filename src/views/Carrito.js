import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export const Carrito = () => {
  return (
    <div className='carrito'>
      <h3>Detalle del pedido</h3>
      <div className='det-pedido'>
        <Card className='mb-3 card-pedido'>
          <Row className='no-gutters'>
            <Col md={2}>
              <Card.Img src='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab' alt='...' />
            </Col>
            <Col md={4}>
              <Card.Body>
                <Card.Title>Española</Card.Title>
              </Card.Body>
            </Col>
            <Col md={1}>
            <Card.Body>
                <Card.Text>Cantidad:</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Button variant='danger'>-</Button>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>1</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Button variant='success'>+</Button>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>Total:</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>$12.000</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row className='no-gutters'>
            <Col md={2}>
              <Card.Img src='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c' alt='...' />
            </Col>
            <Col md={4}>
              <Card.Body>
                <Card.Title>Napolitana</Card.Title>
              </Card.Body>
            </Col>
            <Col md={1}>
            <Card.Body>
                <Card.Text>Cantidad:</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Button variant='danger'>-</Button>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>1</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Button variant='success'>+</Button>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>Total:</Card.Text>
              </Card.Body>
            </Col>
            <Col md={1}>
              <Card.Body>
                <Card.Text>$12.000</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Card.Footer>
            <Row className='no-gutters'>
              <Col md={2}>
                <Card.Body>
                  <Card.Text>Total a pagar:</Card.Text>
                </Card.Body>
              </Col>
              <Col md={1}>
                <Card.Body>
                  <Card.Text>$24.000</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card.Footer>
          <Row className='no-gutters'>
            <Col md={2}>
              <Button className='boton-pago' variant='success'>Ir a Pagar</Button>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
