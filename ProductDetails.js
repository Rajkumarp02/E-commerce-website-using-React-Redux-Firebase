
import Button from 'react-bootstrap/Button';
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from './data';
import { useDispatch } from 'react-redux';
//import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
import { addItem } from '../redux/reducer/Cart';
import { toast } from 'react-toastify'
import { Container } from 'react-bootstrap';

//import { ProductList } from './data';





function ProductDetails(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const addToCart = () => {
    toast.info("success add to cart", {
      position: 'top-center'
    }
    )
    dispatch(addItem(item));
  }
  console.log(addItem);
  const item = ProductList.find((element) => element.id === parseInt(params.id)

  )

  return (

    <Container>
      <Card className="bg-info justify-content-center w-25 m-auto mt-2 mb-4 p-2  ">
        <Card.Img src={item.image} width={10} height={150} fluid />
        <Card.Body >
          <Card.Title className="text-center text-capitalize text-bg-secondary d-1 fw-bold fst-italic">{item.name}</Card.Title>
          <Card.Text className="text-center text-capitalize text-bg-dark d-1 fw-bold fst-italic" >
            {item.id}
          </Card.Text>
          <Card.Text>
            <ul>
              <li>
                E-commerce involves selling products online, building a brand, and online advertising
              </li>
            </ul>
          </Card.Text>
          {item.stock > 0 ? (
            <div>
              <Button className='btn-btn-success p-1 m-1 align-items-start' >Buynow</Button>
              <br />
              <Button className='btn-btn-success p-1 m-1 align-items-end' onClick={addToCart}>AddCart</Button>
              <small className="text-muted">Happy shopping</small>

            </div>
          ) : (
            <Button className='btn-btn-outline-danger'>Out of stock</Button>


          )


          }

        </Card.Body>


      </Card>

    </Container>

  )
}


export default ProductDetails
