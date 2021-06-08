import React, { useContext, useState } from "react";
import * as Backend from "../../build/index.main.mjs";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Context } from "../../Context";

export const DeployButton = ({ ctcArgs }) => {
    const [account, , , , , setCtcInfo, , setCtc, , setCtcArgs] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const deploy = async () => {
        setShow(true);
        const ctc = account.deploy(Backend);
        setCtc([ctc]);
        setCtcArgs(ctcArgs);
        const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2);
        setCtcInfo([ctcInfo]);
        history.push('/deploy');
    }
    return (
        <>
            <Button variant="success" onClick={deploy}>
                Deploy
            </Button>
            <DeployModal show={show} />
        </>
    );
}

export const AttachButton = () => {
    const [account, , , , , , , setCtc] = useContext(Context);
    const [show, setShow] = useState(false);
    const history = useHistory();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const attach = async (ctcInfo) => {
        const ctc = await account.attach(Backend, JSON.parse(ctcInfo));
        setCtc([ctc]);
        console.log("Attached to the contract");
        history.push("/app/bidder");
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Attach
            </Button>
            <AttachModal
                show={show}
                handleClose={handleClose}
                attach={attach} />
        </>
    );
}

const AttachModal = ({ show, handleClose, attach }) => {
    const handleAttach = () => {
        const info = document.querySelector("#ctcArea").value;
        attach(info);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Attach to Contract</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    id="ctcArea"
                    as="textarea"
                    rows="10"
                    placeholder="Paste contract info here" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAttach}>
                    Attach
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const DeployModal = ({ show }) => {
    return (
        <Modal show={show} centered className="text-center">
            <Modal.Body>
                <h2>Deploying the contract</h2>
                <Spinner animation="border" />
            </Modal.Body>
        </Modal>
    );
}
