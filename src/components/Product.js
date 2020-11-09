import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

import { Link, useRouteMatch } from "react-router-dom";

function Product(props) {
    let { path, url } = useRouteMatch();
    return (
        <Col xs={12} md={4} lg={3} className="product">
            <div className="product-card">
                <img className="product-image" src={props.images} alt=""></img>
                <p className="product-category">{props.category}</p>
                <h2 className="product-name">{props.name}</h2>
                <Link to={`${path}/1`}>Ver más</Link>
                <p className="product-price">${props.price}</p>
            </div>
        </Col>
    )
}

export default Product;


