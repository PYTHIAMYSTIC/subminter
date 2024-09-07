import { useState } from 'react';
import WalletConnect from '../components/WalletConnect';
import { ethers } from 'ethers';
import { useMintSubdomain } from '../utils/mintSubdomain';

export default function Home() {
  const [subdomain, setSubdomain] = useState('');
  const [tld, setTld] = useState('');
  const [recipient, setRecipient] = useState('');
  const { mintSubdomain } = useMintSubdomain();

  const handleMint = async (e) => {
    e.preventDefault();
    try {
      await mintSubdomain(subdomain, tld, recipient);
    } catch (error) {
      console.error('Error minting subdomain:', error);
    }
  };

  return (
    <div>
      <h1>Mint a Web3 Subdomain</h1>
      <WalletConnect />

      <form onSubmit={handleMint}>
        <label>
          Subdomain:
          <input value={subdomain} onChange={(e) => setSubdomain(e.target.value)} />
        </label>
        <label>
          TLD:
          <input value={tld} onChange={(e) => setTld(e.target.value)} />
        </label>
        <label>
          Recipient Address:
          <input value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </label>
        <button type="submit">Mint Subdomain</button>
      </form>
    </div>
  );
}
