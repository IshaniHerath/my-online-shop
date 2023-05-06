import logo from "../../../logo.png";
import "../../common/heading/Heading.css"
import { Row, Col } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function Heading(props) {

    return (


        <div>
            <Row>
                <Col xs={7}>
                    <div>
                        <img src={logo} className="leo-logo" />
                    </div>
                </Col>

                <Col>
                    {/* Icons - Cart | login | register */}
                </Col>
            </Row>

            <Row className="dropdown-list">

                <Col>
                    <div className="nav-bar">
                        <Nav.Link href="/">HOME</Nav.Link>
                    </div>
                </Col>

                <Col>
                    <div className="nav-bar">
                        <NavDropdown title="WOMEN PRODUCTS">
                            <NavDropdown.Item href="#tops"> TOPS </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#pants"> PANTS </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#dresses"> DRESSES </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#shoes"> SHOES </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#bags"> BAGS </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Col>

                <Col>
                    <div className="nav-bar">
                        <NavDropdown title="MEN PRODUCTS">
                            <NavDropdown.Item href="#shirts"> SHIRTS </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#gents-pants"> PANTS </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#shoes"> SHOES </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Col>

                <Col>
                    <div className="nav-bar">
                        <Nav.Link href="/">ACCESSORIES</Nav.Link>
                    </div>
                </Col>

            </Row>
        </div>

    )
}

export default Heading