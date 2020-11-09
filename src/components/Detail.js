import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Detail() {
    return (
        <div id="detail">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4} className="detail-image">
                        <img src="/bass.jpg" alt="" ></img>
                    </Col>
                    <Col xs={12} md={6} lg={8} className="detail-info">
                        <h2>Fender</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>$80.000</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail;