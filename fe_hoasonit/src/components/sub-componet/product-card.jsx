import { Card, Placeholder, Button } from 'react-bootstrap'
import '../styles/product-card.css'

function ProductCard({product}){
    return (
        <Card>
            <Card.Img id='image-placeholder' variant="top" src={product.url} />
            <Card.Body>
                <Card.Title className='fixed-height-title'>{product.name}</Card.Title>
                <Card.Text className='fixed-height-text'>{product.description}</Card.Text>
                <Card.Text className='fixed-height-text'>{product.date}</Card.Text>
                <Button className='justify-content-center'>Chi Tiết</Button>
            </Card.Body>
        </Card>
    )
}

function ProductCardPlaceholder() {
    return (
        <Card >
            <Placeholder id="image-placeholder" size='lg' as={Card.Img} animation="glow" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={5} />
            </Card.Body>
        </Card>
    )
}

export {
    ProductCard,
    ProductCardPlaceholder
} 