import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


import { Context } from "../../Context";

const DeployScreen = () => {
    const [copied, setCopied] = useState(false);
    const [, , , , ctcInfo, , , , , ,image,setImage] = useContext(Context);
    const history = useHistory();
    setImage(image);

    const preStyle = {
        backgroundColor: "#ddd",
        boxShadow: "-10px 10px #f2f3f4 "
    }

    const handleProceed = () => { 
        history.push("/app/creator")}
    const handleCopy = () => { setCopied(true) }

    return (
        
        
        <Container style={{
            display: "grid",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 20px",
            borderRadius: "0.3rem",
            padding: "2rem",
        }} className="mt-3 text-left">
            <h2>Contract Details: </h2>
            
            <div style={{textAlign:"center"}}>
            <img alt= "NFT" src={image} style={{borderRadius: "0.3rem", border: "3px solid #000", width: '300px'}} />                                
            <hr></hr>                               
            </div>
            
            
            <pre className="mt-4 p-4" style={preStyle}>
                {ctcInfo}
            </pre>
            <CopyToClipboard onCopy={handleCopy} text={ctcInfo}>
                <Button variant="primary">
                    {copied ? "Copied" : "Copy to clipboard"}
                </Button>
            </CopyToClipboard>
            <hr></hr>
            <Button
                className=""
                variant="secondary"
                onClick={handleProceed}>
                Proceed to Application                
            </Button>
        </Container>
        
    );
}

export default DeployScreen;