import React, { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Context } from "../../Context";
import FaucetModal from "./FaucetModal";

const FaucetButton = () => {
    const [account, , , setBalance] = useContext(Context);
    const [show, setShow] = useState(false);
    const handleOpen = () => setShow(true);

    return Object.keys(account).length !== 0 ?
        (
            <div>
                <Nav.Link style={{color:"#fff"}}  onClick={handleOpen}>
                    Faucet
                </Nav.Link>
                <FaucetModal setBalance={setBalance} account={account} show={show} setShow={setShow} unit="ALGO" />
            </div>
        ) : (<div />);
}

export default FaucetButton;
