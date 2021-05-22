import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="h-100">
            <Row>
                <Col xs={2} />
                <Col xs={8} className="mt-4">
                    <h1 className="text-center">NFT With Auction System</h1>
                    <hr style={{ width: "25rem" }} />
                    <p className="text-left mt-3">   This program has been prepared to run on algorand.</p>
                    <p className="text-left mt-3">For the program, "react" is used in the front end and "reach" is used in the backend.</p>
                    
                    <h2 className="text-left">How to Use</h2>
                    <p className="text-left mt-3">The id deployed by the Creator will be auctioned off for other bidders bound by this contract.</p>
                    <p className="text-left mt-3">Contracted bidders can bid to own NFT. After the highest bid is submitted, if a new bid is not submitted within the specified time, the bid is sent to the creator and nft to the bidder.</p>
                    <p className="text-left mt-3">When the transfer is made, you will be asked if the new owner wants to auction. If new owner receive a positive answer, the auction starts again.</p>
                </Col>
                <Col xs={2} />
            </Row>
        </Container>
    );
}

export default About;