import { useState } from 'react'
import './App.css'
import { ethers } from 'hardhat';
// import Token from './artifacts/contracts/Token.sol/Token.json'

const tokenAddress = '0x2f8d6A0083EFc0E718D3b768c05AAd3be777e8C1';

function App() {
  const [amount, setAmount] = useState(0);
  const [flipStatus, setFlipStatus] = useState();

  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  const requestFlip = async (isFront) => {
    if (amount > 0 && typeof window.ethereum !== 'undefined') {
      const [account] = window.ethereum.request({ method: 'eth_requestAcounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider);

      console.log(contract.balanceOf(account))
    }
  }

  return (
    <div className="App">
      <div>
        <button type='button' onClick={requestAccount}>Connnect Wallet</button>
        <p>{ flipStatus }</p>
      </div>
      <div>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        {/* <button type='button' onClick={() => requestFlip(true)}>Front</button>
        <button type='button' onClick={() => requestFlip(false)}>Back</button> */}
      </div>
    </div>
  )
}

export default App
