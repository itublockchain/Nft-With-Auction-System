import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import { InformTimeout, SeeOutcome, IsAuctionOn, ShowBid } from "./PlayerViews";
import Button from "react-bootstrap/Button";
import { parseCurrency } from "@reach-sh/stdlib/ALGO";


const BidderViews = ({appState, args, getBidReady, getBid, isAuctionOnReady, isAuctionOn}) => {
  switch (appState) {
    case "getBid":
      return getBidReady ? (
        <GetBid nftViewAddress={args[0]} getBid={getBid} />
      ) : (
        <Container style={{
          display: "grid",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
          borderRadius: "0.3rem",
          padding: "2rem",
      }} className="mt-4">
          <h1>Waiting the Contract...</h1>
          <Button variant="info" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      
        </Container>
      );
    case "informTimeout":
      return <InformTimeout />;
    case "seeOutcome":
      return <SeeOutcome nftViewAddress={args[0]} address={args[1]} />;
    case "showBid":
      return <ShowBid nftViewAddress={args[0]} getBid={args[1]} address={args[2]}/>; 
    case "isAuctionOn":
      return (isAuctionOnReady ? 
      (        <IsAuctionOn nftViewAddress={args[0]} isAuctionOn={isAuctionOn} />
      ) : (
        <Container style={{
          display: "grid",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
          borderRadius: "0.3rem",
          padding: "2rem",
      }} className="mt-4">
          <h1>Waiting the Contract...</h1>
          <Button variant="info" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      
        </Container>
      ));
    default:
      break;
  }
  return (
    <Container style={{
      display: "grid",
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
      borderRadius: "0.3rem",
      padding: "2rem",
  }} className="mt-4">
      <h1>Waiting the Contract...</h1>
      <Button variant="info" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  
    </Container>
  );
};

export default BidderViews;

export const GetBid = ({nftViewAddress, getBid}) => {

    const [bid, setBid] = useState(0);
    const handleSet = () => {
        const bid2= parseCurrency(bid)
        getBid(bid2)
    } 
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
    <Form.Group>
      <Form.Label><h3> </h3><h3>Please, Enter Your Bid</h3></Form.Label>
      <Form.Control
        
        value={bid}
        onChange={(e) => setBid(e.target.value)}
        type="number"
        placeholder=" Enter Bid"
      />
    </Form.Group>
    <Button variant="info" onClick={handleSet} >Give Offer</Button>
    </Container>
  );
};