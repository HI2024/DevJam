import { useState } from "react";
// import { ethers } from 'ethers';

// const style = {
//     button: `text-white`,
// }

function ConnectMetamask() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      alert("Meta Mask not detected");
    }
  }

  // async function connectWallet() {
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount();

  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   }
  // }

  // return (
  //   <div>
  //     <button onClick={requestAccount} className={style.button}>
  //       Connect Metamask
  //     </button>
  //     {/* <h3>Wallet Address: {walletAddress}</h3> */}
  //   </div>
  // );

  return (
    <div>
      <button
        style={{
          backgroundColor: "#246BFD",
          color: "white",
          borderRadius: "13px",
          height: "40px",
          width: "165px",
          stroke: "blue 5px",
          fontFamily: "Light",
        }}
        onClick={requestAccount}
      >
        Connect Metamask
      </button>
      {/* <h3>Wallet Address: {walletAddress}</h3> */}
    </div>
  );
}

export default ConnectMetamask;
