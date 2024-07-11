import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../components/context/user-context';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import '../styles/login.css'


export default function Login() {
    return (
        <Container className='mt-4 mb-4 bg-light rounded-4' style={{ maxWidth: '500px' }}>
            <Row className="justify-content-center pt-3">
                <Col xs={12} className='text-center mb-4'>
                    <img
                        src="/LOGO-HOASON-nho-xanh.png"
                        className="logo"
                        alt="logo"
                    />
                </Col>
               
            </Row>
            <hr></hr>
            
            <Row className="justify-content-center pb-4 ">
                <Col xs={10}>
                    <Form action="/login" method="POST"> {/* Thêm action và method ở đây */}
                       

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>
                        
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>

                        <Form.Text id="ds" className='d-flex justify-content-end'>
                            <Link to="/register">bạn chưa có tài khoản?</Link>
                        </Form.Text>

                        <Button variant="primary" type="submit" className="w-100 mt-4">
                            Log In
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}