import { useEffect, useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Web3Auth } from '@web3auth/web3auth';

const clientId = 'Your_Web3Auth_Client_ID'; // Get this from the Web3Auth dashboard

export default function WalletConnect() {
  const [web3auth, setWeb3Auth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3authInstance = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: 'eip155',
            chainId: '0x1', // Mainnet
          },
        });
        setWeb3Auth(web3authInstance);
        await web3authInstance.initModal();
      } catch (error) {
        console.error('Error initializing Web3Auth:', error);
      }
    };
    
    initWeb3Auth();
  }, []);

  const connectWeb3Auth = async () => {
    try {
      const provider = await web3auth.connect();
      setProvider(provider);
      console.log('Connected to Web3Auth:', provider);
    } catch (error) {
      console.error('Error connecting to Web3Auth:', error);
    }
  };

  return (
    <div>
      <h2>Connect Your Wallet</h2>
      <ConnectButton />
      <button onClick={connectWeb3Auth}>Connect with Web3Auth</button>
    </div>
  );
}
