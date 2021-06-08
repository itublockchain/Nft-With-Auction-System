import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../assets/logo-notext-color.png";
import Logo2 from "../assets/algorand.png";
import FaucetButton from "./reach/FaucetButton";
import Balance from "./reach/Balance";

const AppNavbar = () => {
    return (
        <Navbar style={{backgroundColor:"#000"}} >
            <Container>
                <Nav className=" col-4 ml-2">
                    <Navbar.Brand >
                        <img
                            src={Logo}
                            width="60"
                            className="d-inline-block align-top"
                            alt="Reach Logo" />
                        {' '}

                        {' '}
                        <img style={{marginLeft:"2%"}}
                            src={Logo2}
                            width="60"
                            className="d-inline-block align-top"
                            alt="Reach Logo" />
                    </Navbar.Brand>
                </Nav>
                <Nav className="col-4">
                    <p style={{color:"#fff", fontSize:"2rem",marginTop:"8px"}} className="ml-auto ">NFT With Auction System</p>
                </Nav>
                <Nav className="col-1"></Nav>
                <Nav className=" col-4 ">
                    <Nav variant="tabs" className=" ml-4">
                        <Nav.Item >
                            <Nav.Link href="/" style={{color:"#fff"}} eventKey="link-1">Home</Nav.Link>
                        </Nav.Item>                    
                        <LinkContainer style={{color:"#fff"}} to="/about">
                            <Nav.Link eventKey="link-1">
                                About
                            </Nav.Link>
                        </LinkContainer>
                        <FaucetButton />
                    </Nav>
                    <Nav>
                        <Balance />
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
