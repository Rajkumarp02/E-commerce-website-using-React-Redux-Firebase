import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Contact() {
  return (


    <div className='bg-dark'>

      <h4 className='text-center text-primary bg-light my-2 py-2 '>Comments<i class="bi bi-chat-fill"></i></h4>
      <Container className='pt-5 m-auto w-100 h-150'>
        <Row className='justify-content-center'>
          <Col md={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1"><i class="bi bi-person"></i></InputGroup.Text>
              <FloatingLabel
                controlId="floatingInput"
                label="UserName"

              >
                <Form.Control type="text" placeholder="Name" />
              </FloatingLabel>
            </InputGroup>

            <InputGroup className="mb-3">

              <InputGroup.Text id="basic-addon2"><i class="bi bi-envelope-open"></i></InputGroup.Text>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"

              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </InputGroup>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"

            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Button className='mt-2 my-2 p-2  text-bg-dark ' variant="danger">Send</Button>
          </Col>

        </Row>
      </Container>

      <br />






      <div className='text-center mt-5 text-bg-action bg-info'>
        <Link to='/'>
          <Button className='mt-2 my-2 p-2  text-bg-dark ' variant="dark">Back Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default Contact;
