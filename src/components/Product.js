import React, { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

function Product(props) {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3030/api/info')
        .then(response => response.json())
        .then(data => {
            let products = data.data.products;
            setProducts(products);
        })
        
    }, []);


    return (
        <Row>
            { products.map( product => {                
                return (
                    <Col xs={12} md={4} lg={3} className="product">            
                            
                        <div className="product-card">                
                            <img className="product-image" src="https://www.musikalessons.com/blog/wp-content/uploads/2016/10/electric-bass.jpg" alt=""></img>
                            <p className="product-category">{product.category}</p>
                            <h2 className="product-name">{product.title}</h2>
                            <Link to="/">Ver más</Link>
                            <p className="product-price">${product.price}</p>
                        </div>
                                
                    </Col>
                )  
            })}

        </Row>      
    )
}

export default Product;


