import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Pagination, Row, Col } from 'react-bootstrap';

export default function Management() {
    return (
        <Container className='mt-4 mb-4'>
            <Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ảnh sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Thông tin chi tiết</th>
                            <th>Tùy Chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Button variant='dark'>Xóa</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row className='mt-5 mb-5'>
                <Button variant='success' className='justify-content-center'>Thêm mới</Button>
            </Row>
            <Row>
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