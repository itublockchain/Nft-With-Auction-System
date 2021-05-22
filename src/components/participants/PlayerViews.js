import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export const InformTimeout = () => {

    return (        
        <Container style={{
            display: "grid",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
            borderRadius: "0.3rem",
            padding: "2rem",
        }} className="mt-4">
            <h2>Last Bidder Did Not Pay</h2>
        </Container>
    );
}
export const SeeOutcome = ({nftViewAddress, address }) => { 

    const adres = {address}.address.toString()
    const addresssum = adres.slice(0,10) + "  . . . . .  "  + adres.slice((adres.length-10), adres.length);
    // kimin kazandığını ekle
        return (
            <Container style={{
                display: "grid",
                backgroundColor: "white",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
                borderRadius: "0.3rem",
                padding: "2rem",
            }} className="mt-4">
                <div style={{textAlign:"center"}}>
            <img alt= "NFT" src={nftViewAddress} style={{borderRadius: "0.3rem", border: "3px solid #000", width: '300px'}} />                                
            <hr></hr>                               
            </div>
                <h2>{`Winner Address: ${addresssum}`}</h2> 
            </Container>
        );
    }



export const ShowBid = ({nftViewAddress, getBid, address }) => {
    const adres = {address}.address.toString()
    const addresssum = adres.slice(0,10) + "  . . . . .  "  + adres.slice((adres.length-10), adres.length);
    console.log(getBid);


    return (
      <Container style={{
        display: "grid",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
        borderRadius: "0.3rem",
        padding: "2rem",
        marginTop:"2rem"
    }}>
        <div style={{textAlign:"center"}}>
            <img alt= "NFT" src={nftViewAddress} style={{borderRadius: "0.3rem", border: "3px solid #000", width: '300px'}} />                                
            <hr></hr>                               
            </div>
        <h1>
          Bid: <small>{getBid}</small> Algo
        </h1>
        <h1>
          Bidder Address: <small>{addresssum}</small>
        </h1>
      </Container>
    );
  };

export const IsAuctionOn = ({nftViewAddress, isAuctionOn}) => {

    const handleReject = () => {
        isAuctionOn(false);
    }
    const handleTrue = () => {
        isAuctionOn(true);
    };

    return (
        <Container style={{
            display: "grid",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
            borderRadius: "0.3rem",
            padding: "2rem",
        }} className="mt-4">
            <div style={{textAlign:"center"}}>
            <img alt= "NFT" src={nftViewAddress} style={{borderRadius: "0.3rem", border: "3px solid #000", width: '300px'}} /> 
                                           
            <hr></hr>                               
            </div>
            <h2 className="text-center">You are the owner of NFT.</h2>
            <p className="text-center">Do you want to start auction?</p>
            <Row>
                <Col sm={6} >
                    <Button block variant="success" onClick={handleTrue}>Yes, I want to start auction.</Button>
                </Col>
                <Col sm={6} >
                    <Button block variant="danger" onClick={handleReject}>No, I don't want to start auction</Button>
                </Col>
            </Row>
        </Container>
    );
}
