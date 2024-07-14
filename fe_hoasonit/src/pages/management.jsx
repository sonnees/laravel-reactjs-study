import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Pagination, Row, Col, Modal, Form } from 'react-bootstrap';
import { ManagementTr, ManagementTrPlaceholder } from '../components/sub-componet/management-tr';
import { useNavigate } from 'react-router-dom';
import { CreateProduct, DeleteProduct, LoadProducts } from '../jquery/managementJQuery';

export default function Management() {

    const navigate = useNavigate();

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [page, setPage] = useState(null);
    const [loadPage, setLoadPage] = useState(1);
    const [loadDelete, setLoadDelete] = useState(0);
    const [load, setLoad] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        LoadProducts(navigate, setProducts, setLoading, setPage, loadPage, setSaving);
    }, [loadPage, load]);
    
    useEffect(() => {
        CreateProduct(products, setProducts, setSaving, show, setShow);
        DeleteProduct(setLoadDelete, load, setLoad)
    }, [show]);

    if (loading)
        return (
            <Container className='mt-4 mb-4'>
                <Row>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Ảnh sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày tạo</th>
                                <th>Tùy Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <ManagementTrPlaceholder key={idx}></ManagementTrPlaceholder>
                            ))}
                        </tbody>
                    </Table>
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
    else
        return (
            <Container className='mt-4 mb-4'>
                <Row>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Ảnh sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày tạo</th>
                                <th>Tùy Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <ManagementTr key={product.id} product={product} loadDelete={loadDelete}></ManagementTr>
                            ))}
                        </tbody>
                    </Table>
                </Row>

                <Row className='mt-5 mb-5'>
                    <Button onClick={handleShow} variant='success' className='justify-content-center'>Thêm mới</Button>
                </Row>

                {products.length != 0 ? (
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

                {/* Create */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton hidden={saving}>
                        <Modal.Title>Thêm sản phẩm mới</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form id='form_create'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control
                                    name='name'
                                    type="text"
                                    placeholder="Enter name product"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ảnh sản phẩm</Form.Label>
                                <Form.Control
                                    name='url'
                                    placeholder="Enter name url img"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ngày tạo sản phẩm</Form.Label>
                                <Form.Control
                                    name='date'
                                    type='datetime-local'
                                    placeholder="Enter date"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Mô tả thông tin chi tiết</Form.Label>
                                <Form.Control name='description' as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type='submit' disabled={saving}>
                                {saving ? 'Saving...' : 'Save'}
                            </Button>
                        </Form>
                    </Modal.Body>
                    
                </Modal>
                
            </Container>
        )

}