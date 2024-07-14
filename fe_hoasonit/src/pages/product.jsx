import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Card, Button, Col, Pagination, Placeholder } from 'react-bootstrap';
import '../styles/product.css'
import { ProductCard, ProductCardPlaceholder } from '../components/sub-componet/product-card';
import { LoadProducts } from '../jquery/productJQuery';
import { useNavigate } from 'react-router-dom';

export default function Product() {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(null);
    const [loadPage, setLoadPage] = useState(1);

    useEffect(() => {
        LoadProducts(navigate, setProducts, setLoading, setPage, loadPage)
    }, [loadPage]);

    if (loading){
        return (
            <Container className='mt-2 mb-2'>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <Col key={idx}>
                            <ProductCardPlaceholder />
                        </Col>
                    ))}
                </Row>

                <Row className='mt-4 mb-2'>
                    <Pagination className='justify-content-center'>
                        <Pagination.Prev />
                        <Pagination.Ellipsis />
                        <Pagination.Next />
                    </Pagination>
                </Row>

            </Container>
        )
    } else {
        return (
            <Container className='mt-2 mb-2'>
                <Row xs={1} md={5} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id} >
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>

                {products.length != 0 ?(
                    <Row className='mt-4 mb-2'>
                        <Pagination className='justify-content-center'>
                            {page.current_page > 1 && <Pagination.Prev onClick={() => { setLoadPage(page.current_page - 1) }} />}
                            {page.current_page > 2 && <Pagination.Item onClick={() => setLoadPage(1)}>1</Pagination.Item>}
                            {page.current_page > 2 && <Pagination.Ellipsis />}

                            {page.current_page > 1 && <Pagination.Item onClick={() => setLoadPage(page.current_page - 1)} >{page.current_page - 1}</Pagination.Item>}
                            <Pagination.Item active>{page.current_page}</Pagination.Item>
                            {page.current_page < page.last_page && <Pagination.Item onClick={() => setLoadPage(page.current_page + 1)} >{page.current_page + 1}</Pagination.Item>}

                            {page.current_page < page.last_page - 1 && <Pagination.Ellipsis />}
                            {page.current_page < page.last_page - 1 && <Pagination.Item onClick={() => setLoadPage(page.last_page)}>{page.last_page}</Pagination.Item>}
                            {page.current_page < page.last_page && <Pagination.Next onClick={() => setLoadPage(page.current_page + 1)} />}
                            
                        </Pagination>
                    </Row>
                ) : (<Row className='mt-4 mb-2' />)}
                
            </Container>
        )
    }
}