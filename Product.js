import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
//import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { ProductList } from '../components/data';
//import { addItem } from '../redux/reducer/Cart';




function Product(props) {
  const nav = useNavigate()

  return (
    <>
      <Container>


        <div role="button" onClick={() => nav(`/productDetails/${props.id}`)}>

          < div className='p-1 m-1 mt-1 mb-1 d-flex '>
            <Card bg="dark" text="variant.toLowerCase()"

            >

              <Card.Header >

                <Card.Img variant="top" bg="info" src={props.image} width={160} height={190} />
              </Card.Header>

              <Card.Body className="text-center" >
                <Card.Title className="text-center text-bg-danger"><b>{props.name}</b></Card.Title>
                <Card.Text className="text-center text-bg-danger"> <b> {props.id}</b>
                  <h2 className='text-bg-danger'>${props.price}</h2>
                  <p className='text-align-center text-bg-danger'>
                    By 2040, around 95% of all purchases are expected to be via eCommerce. Online stores with a loud social media presence will get 32% more sales on average those who do not.
                  </p>
                  {props.stock > 0 ?
                    <Button >Buy now</Button> :
                    <Button>Out of stock</Button>

                  }
                </Card.Text>
              </Card.Body>
            </Card>
          </div>





        </div>
      </Container>

    </>

  )
}

export default Product;