import React from 'react';
import product01 from "./images/bag.jpeg"
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from "react-bootstrap";
import "../../components/home/Home.css";
import Heading from '../common/heading/Heading';

function Home(props) {
    return (

        <div className="product-list">
            <Heading></Heading>

{/* TODO - add json and loop all */}
            {Array.from({ length: 2 }).map((_, idx) => (
                <Row>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col className='product-column'>
                            < Card style={{ width: "18rem", height: "33rem" }} className="my-3" rounded>
                                <Card.Img className="product-images" variant="top" src={"http://localhost:3000" + product01} alt="Card image cap" />
                                <Card.Body>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Card.Text className="price-text">Rs. 3100.00 </Card.Text>
                                    <Button class="btn btn-default active" variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default Home;

