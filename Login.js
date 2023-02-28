import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-con';
import { NavLink, useNavigate } from 'react-router-dom'
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>

            <div className='bg-dark'>
                <Container className='pt-5 m-auto w-100 h-150'>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">   <i class="bi bi-envelope-open"></i>

                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email"

                                >
                                    <Form.Control id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FloatingLabel>
                            </InputGroup>

                            <InputGroup className="mb-3">

                                <InputGroup.Text id="basic-addon2">   <i class="bi bi-person"></i>
                                </InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"

                                >
                                    <Form.Control id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FloatingLabel>
                            </InputGroup>
                        </Col>
                        <div className='text-center py-3 my-3'>
                            <button
                                onClick={onLogin}
                            >
                                Login
                            </button>
                        </div>


                        <p className="text-sm text-white text-center" >
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login
