import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Button, Col, Pagination } from 'react-bootstrap';
import '../styles/product.css'

export default function Product() {
    return (
        <Container className='mt-2 mb-2'>
            <Row xs={1} md={5} className="g-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.tgdd.vn/Products/Images/2386/80492/bhx/loc-4-hop-sua-tuoi-tiet-trung-it-duong-th-true-milk-180ml-202304262141106303_300x300.jpg" />
                            <Card.Body>
                                <Card.Title className='fixed-height-text'>Sữa tươi tiệt trùng</Card.Title>
                                <Card.Text className='fixed-height-text'>
                                    Sữa hoàn toàn từ sữa bò tươi (97%), đường tinh luyện, chất ổn định dùng cho thực phẩm. Ngoài ra, sản phẩm cung cấp khoảng 70 kcal trên 100ml sữa.
                                </Card.Text>
                                <Button className='justify-content-center'>Chi Tiết</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className='mt-4 mb-2'>
                <Pagination className='justify-content-center'>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item active>{11}</Pagination.Item>
                    <Pagination.Item>{12}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </Row>
        </Container>
    )
}