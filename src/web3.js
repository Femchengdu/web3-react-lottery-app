import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccounts" });
// Highjack the metamask provider
const web3 = new Web3(window.ethereum);

export default web3;
