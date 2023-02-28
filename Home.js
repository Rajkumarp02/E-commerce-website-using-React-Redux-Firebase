
import React from 'react';
//import img from './image/InShot_20230206_170543693'
//import Product from './Product';
//import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import { ProductList } from '../components/data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Home() {




  return (
    <>
      <Container>
        <div className='justify-content-center bt-2  p-2 m-auto '>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="https://www.highsnobiety.com/static-assets/thumbor/9Bx8G1yTruymJv0u3UzMM2E1g-E=/1600x1066/www.highsnobiety.com/static-assets/wp-content/uploads/2023/01/31143415/tiffany-nike-air-force-1-new-001.jpg" width={150} height={450} />
              <Carousel.Caption>
                <h4 className='text-dark p-1 py-1 my-1 text-center mt-3 text-bg-info'>Shoe</h4>
                <p className='text-bg-primary'>The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/71Kq8TN18LL._UX522_.jpg" width={150} height={450}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h4 className='text-dark p-1 py-1 my-1 text-center mt-3 text-bg-info'>Watch</h4>
                <p className='text-bg-primary'>Fastrack was launched in 1998 and became an independent urban youth brand in 2005..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://in.benetton.com/dw/image/v2/BBSF_PRD/on/demandware.static/-/Sites-ucb-in-master/default/dwf69c1d76/images/Full_PDP_h/Benetton_21PI_21P30447ECOMI_D58_FS_Full_PDP_h.jpg?sw=2400&sh=1800"
                width={150} height={450} alt="Third slide"
              />

              <Carousel.Caption>
                <h4 className='text-dark p-1 py-1 my-1 text-center mt-3 text-bg-info'>Hoodie</h4>
                <p className='text-bg-primary'>
                  A hoodie (in some cases spelled hoody and alternatively known as a hooded sweatshirt).
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>


        <div>
          <Row>
            {ProductList?.map((props) => {
              return (
                <Col md={4}>
                  <Product image={props.image}
                    name={props.name}
                    id={props.id}
                    price={props.price}
                    stock={props.stock}

                  />
                </Col>
              )

            })}
          </Row>
        </div>



      </Container>


      <div className='text-center text-dark my-3 small bg-light'>
        <h5>@Copyright 2013</h5>
      </div>


    </>



  )
}

export default Home;