import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../components/context/user-context';
import { Container, Carousel } from 'react-bootstrap';

export default function Home() {
    return (
        <Container className='mt-4 mb-4'>
            <Carousel data-bs-theme="dark" >
                <Carousel.Item className='carousel-img-container'>
                    <img 
                        className="d-block w-100 rounded-3 opacity-75 carousel-img"
                        src="/img1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-img-container'>
                    <img
                        className="d-block w-100 rounded-3 opacity-75 carousel-img"
                        src="/img2.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}