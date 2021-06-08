import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import { Context } from "../../Context";
import BidderViews from "./BidderViews";
import {loadStdlib} from '@reach-sh/stdlib';
const Reach = loadStdlib('ALGO');

export class Bidder extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            appState: "",
            args: [],
            resGetBid: null,
            resIsAuctionOn: null,            
        };
        this.getBidExt = this.getBidExt.bind(this);
        this.isAuctionOnExt = this.isAuctionOnExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , , ,] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 5000);
        Backend.Bidder(ctc[0], this);
    }

    async updateBalance() {        
        const [account, , , setBalance] = this.context;
        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
    }

    async informTimeout() {
         this.setState({
            appState: "informTimeout",
        });
    }

    async showBid(getId, nftViewAddress, bid, address) {
         const addressFormat = Reach.formatAddress(address);
         const bidFormat = Reach.formatCurrency(bid, 4);         
         this.setState({
             appState: "showBid",
             args: [getId ,nftViewAddress, bidFormat ,addressFormat],
         })
     }

     async seeOutcome(getId, nftViewAddress, address) {
        const addressFormat = Reach.formatAddress(address);
        this.setState({
            appState: "seeOutcome",
            args: [getId, nftViewAddress, addressFormat],
            
        })
    }

    async getBid(getId ,nftViewAddress) {
        const bid = await new Promise(res => {
            this.setState({
                appState: "getBid",
                args: [getId, nftViewAddress],
                resGetBid: res,
            });
        });
        return bid;
    }
    getBidExt(bid) {
        this.state.resGetBid(bid);
    }

    async isAuctionOn(getId, nftViewAddress) {
        const response = await new Promise (res => {
            this.setState({
                appState: "isAuctionOn",
                args: [getId,nftViewAddress],
                resIsAuctionOn: res,
            })
        });
        return response;
    }

    isAuctionOnExt(res) {
        this.state.resIsAuctionOn(res);
    }

    render() {
        return (<BidderViews
            appState={this.state.appState}
            args={this.state.args}
            getBidReady={this.state.resGetBid !== null}
            getBid={this.getBidExt} 
            isAuctionOnReady={this.state.resIsAuctionOn !== null}
            isAuctionOn={this.isAuctionOnExt} />
        );            
    }
}
