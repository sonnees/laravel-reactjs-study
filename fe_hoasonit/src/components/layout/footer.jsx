import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col sm={8}>
                        <h5 className="text-uppercase">Footer </h5>
                        <p>
                            Cám ơn bạn rất nhiều vì đã lướt hết trang!
                        </p>
                    </Col>

                    <Col sm={4}>
                        <h5 className="text-uppercase">SiteMap</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="/home" className="text-dark">home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">product</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">management</a>
                            </li>
                        </ul>
                    </Col>
                   
                </Row>
            </Container>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className="text-dark" href="/"> Hoason Infotech</a>
            </div>
        </footer>
    )
}