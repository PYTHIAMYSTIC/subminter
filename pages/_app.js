import { useEffect } from 'react';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Web3Auth } from '@web3auth/web3auth';
import { ethers } from 'ethers';

import '@rainbow-me/rainbowkit/styles.css';

// Configure chains for RainbowKit and wagmi
const { chains, provider } = configureChains(
  [Chain.mainnet, Chain.polygon],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My Web3 App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId: 'Your_Web3Auth_Client_ID',  // Replace with your Web3Auth client ID
          chainConfig: {
            chainNamespace: 'eip155',
            chainId: '0x1',  // Ethereum Mainnet
            rpcTarget: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',  // Replace with your Infura project ID
          },
        });

        await web3auth.initModal();
      } catch (error) {
        console.error('Error initializing Web3Auth:', error);
      }
    };

    initWeb3Auth();
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
