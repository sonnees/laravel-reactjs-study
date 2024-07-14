import { Card, Placeholder, Button, Modal, Form, Spinner } from 'react-bootstrap'
import '../styles/management-tr.css'

function ManagementTr({ product, loadDelete }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td><img id='management-tr-image-placeholder' src={product.url} alt="img" /></td>
            <td>{product.name}</td>
            <td>{product.date}</td>
            <td>
                <Button variant='dark' className='btn-delete' value={product.id}>
                    {loadDelete == product.id ?
                        (<Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />) : ('Xóa')
                    }
                </Button>
            </td>
        </tr>
    )
}

function ManagementTrPlaceholder() {
    return (
        <tr >
            <td>
                <Placeholder animation="glow">
                    <Placeholder xs={2} />
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow" >
                    <Placeholder xs={6} id='management-tr-image-placeholder' />
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
            </td>
            <td>
                <Placeholder animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
            </td>
            <td>
                <Button variant='dark' disabled>Xóa</Button>
            </td>
        </tr>
    )
}

export {
    ManagementTr,
    ManagementTrPlaceholder,
} 