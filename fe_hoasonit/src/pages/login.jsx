import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../components/context/user-context';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/login.css'
import { loginJQ } from '../jquery/loginJQuery';

export default function Login() {
    const navigate = useNavigate();
    const { login, logout } = useUser();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loginJQ(login, logout, navigate, setLoading);
    }, [isLoading]);


    return (
        <Container className='mt-4 mb-4 bg-light rounded-4' style={{ maxWidth: '500px' }}>
            <Row className="justify-content-center pt-3">
                <Col xs={12} className='text-center mb-4'>
                    <img
                        src="/LOGO-HOASON-nho-xanh.png"
                        className="logo"
                        alt="logo"
                        id='logo'
                    />
                </Col>
               
            </Row>
            <hr></hr>
            
            <Row className="justify-content-center pb-4 ">
                <Col xs={10}>
                    <Form id='form_login'>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" defaultValue={'son@gmail.org'}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" defaultValue={'123456'} />
                        </Form.Group>
                        
                        <Form.Text id="error" muted>
                            
                        </Form.Text>

                        <Form.Text id="ds" className='d-flex justify-content-end'>
                            <Link to="/register">bạn chưa có tài khoản?</Link>
                        </Form.Text>

                        <Button type='submit' id='btn_login' variant="primary" className="w-100 mt-4" disabled={isLoading}>
                            {isLoading ? 'Loading…' : 'Login'}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}