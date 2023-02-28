import React from 'react'
import { ProductList } from '../components/data'
import Product from './Product'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Dash() {


  return (
    <Container>
      <Row md={4}>

        {ProductList?.map((product) => {
          return (
            <Col>

              <img src={product.image} />
            </Col>


          )
        }



        )}


        <Col xs={6}><Product /></Col>
        <Col><Product /></Col>
      </Row>
    </Container>




  )

}
