import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

function Product(props) {
    return (
        <Col xs={12} md={4} lg={3} className="product">
            <div className="product-card">
                <img className="product-image" src={props.images} alt=""></img>
                <p className="product-category">{props.category}</p>
                <h2 className="product-name">{props.name}</h2>
                <p className="product-price">${props.price}</p>
            </div>
        </Col>
    )
}

export default Product;


