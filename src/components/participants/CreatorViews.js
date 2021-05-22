import React from 'react';
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { InformTimeout, SeeOutcome, IsAuctionOn, ShowBid} from "./PlayerViews";

const CreatorViews = ({appState, args, isAuctionOnReady, isAuctionOn}) => {
    switch (appState) {
        case "informTimeout":
            return (<InformTimeout />);
        case "seeOutcome":
            return (<SeeOutcome nftViewAddress={args[0]} address={args[1]}  />);
        case "showBid":
            return <ShowBid nftViewAddress={args[0]} getBid={args[1]} address={args[2]}/>; 
        case "isAuctionOn":
            return(isAuctionOnReady
                ? <IsAuctionOn nftViewAddress={args[0]} isAuctionOn={isAuctionOn}/>
                :  <Container style={{
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
}



export default CreatorViews;