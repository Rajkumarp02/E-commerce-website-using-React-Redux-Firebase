import React from 'react';
import { useSelector } from 'react-redux';
//import ProductItem from '../../components/ProductItem';
import { incrementQuantity, decrementQuantity, removeItem } from './Cart';
//import Button from 'react-bootstrap/Button';
import { Container } from '@mui/system';
import Table from 'react-bootstrap/Table';

//import { addItem } from './Cart';
import { useDispatch } from 'react-redux';

function Cart() {
  const { cart } = useSelector((item) => item.user)
  const dispatch = useDispatch();







  return (
    <>
      <Container>




        {cart.map((props) => (
          <section className='py-4 container'>

            <div
            >
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {props.id}</td>
                    <td>{props.name}</td>
                    <td className='m-auto p-2 w-70 m-2 '> <img src={props.image} width={200} height={150} /></td>
                    <td>
                      <div className='cartItem__incrDec'>
                        <button onClick={() => dispatch(decrementQuantity(props.id))}>-</button>
                        <p>{props.quantity}</p>
                        <button onClick={() => dispatch(incrementQuantity(props.id))}>+</button>
                      </div>
                      <button
                        className='cartItem__removeButton'
                        onClick={() => dispatch(removeItem(props.id))}>
                        Remove
                      </button>


                    </td>
                    <td>
                      <p className="total__p">
                        Total:{props.quantity} =
                        <strong>${props.price * props.quantity}</strong>
                      </p>
                    </td>
                  </tr>


                </tbody>
              </Table>

            </div>
          </section>
        ))}

      </Container>

    </>


  )

}

export default Cart;
