import React, { useContext, useState } from "react";
import './Auction.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Contract from "../../assets/contract.png";
import ConnectWallet from "../reach/ConnectWallet";
import { Context } from "../../Context";
import { AttachButton, DeployButton } from "../reach/DeployAttach";

const Home = () => {
    const [account, , , , , , , , , ,image, setImage] = useContext(Context);
    const [id, setId] = useState();
    const [deadline, setDeadline] = useState();
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'nftwithauction');
        setLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/aalimsahin/image/upload',
          {
            method: 'POST',
            body: data
          }
        );
        setLoading3(true)
        const file = await res.json();
        setLoading2(true);
        setImage(file.secure_url);
        setLoading(false);
        setId(file.asset_id);
  }
    return account !== "" ? (
        <div style={{backgroundColor:"white"}}>
            <Container>             
                <div style={{
                    display:"grid",
                    backgroundColor: "white",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 20px",
                    borderRadius:"0.3rem",
                    padding: "1.5rem",
                    border: "1px solid gray"
                }} className="auction ">
                    <div className="auction__title ">
                        <h1 style={{textAlign:"center"}}>Auction System</h1>
                        <hr className="mt-3" style={{width:"15%"}}></hr>
                        <Row>
                            <Col md-6>
                                <h2 style={{textAlign: "center"}}> Are You Creator?</h2>
                            </Col>
                            <Col>
                                <h2 style={{textAlign: "center"}} >Are You Bidder?</h2>
                            </Col>
                        </Row>
                    </div>
                    <div className="auction__thumbnail">
                        <Card className="p-3">                        
                            <Card.Text style={{fontSize:"1.5rem"}} className="cardtext">
                                Deploy your own application
                            </Card.Text>                            
                            <Card.Text className="cardtext mt-2">
                                <h2>NFT</h2>
                            </Card.Text>
                            <Form.Group>
                                <h5>Upload </h5>
                                <input  style= {{borderRadius: "8px" ,border: "2px solid #000"}} type='file' name='file' placeholder="upload an image" onChange={uploadImage}/>
                                {loading ? (
                                    <div>
                                        <hr></hr>
                                        <h3>Loading...</h3>
                                    </div>
                                ): (loading3 ? (
                                        <div>
                                            <hr></hr>
                                            <img alt= "" src={image} style={{borderRadius: "0.3rem", border: "3px solid #000", height:"266px", width: "300px"}} /> 
                                        </div>
                                    ) : (
                                        <div>
                                            <hr></hr>
                                            <img alt= "" src={image} style={{borderRadius: "0.3rem", border: "3px solid #000"}} /> 
                                        </div>
                                    )
                                    )
                                }                            
                                <hr></hr>
                                <Form.Control
                                style= {{border: "1px solid #000"}}
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    type="text"
                                    placeholder="Enter ID" />
                                <Form.Control
                                style= {{border: "1px solid #000"}}
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    type="number"
                                    placeholder="Enter Deadline" />
                            </Form.Group>
                            <DeployButton ctcArgs={[
                                {
                                    getId: id,
                                    deadline: deadline,
                                    nftViewAddress: image,
                                }
                            ]} />
                        </Card>                    
                    </div>
                    <div className="auction__content auction__thumbnail">
                        <Card className="p-3">
                            <Card.Title className="cardtitle">
                                Attach to Contract
                            </Card.Title>
                            <hr className="mt-1" />
                            <Card.Text className="cardtext">
                                Attach to an already existing application
                            </Card.Text>
                            {loading2
                            ? <div style={{textAlign:"center"}}>
                            <img alt= "" src={Contract} style={{alignItems:"center", textAlign:"center" ,borderRadius: "0.3rem", height: "500px"}} />                                
                            </div>
                            : <div style={{textAlign:"center"}}>
                            <img alt= "" src={Contract} style={{alignItems:"center", textAlign:"center" ,borderRadius: "0.3rem", width: '272px'}} />                                
                            </div>}                            
                            <AttachButton style={{display: "flex", flexDirection: "row" , alignSelf: "flex-end"}}/>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    ) : (        
        <Container className="mt-5">
            <h1>Please connect your wallet</h1>
            <ConnectWallet />
        </Container>        
    );
}
export default Home;
