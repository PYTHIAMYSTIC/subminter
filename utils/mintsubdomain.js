import { ethers } from 'ethers';
import { useSigner } from 'wagmi';
import { mintingManagerAbi } from './abi'; // Import your ABI here

const contractAddress = '0xYourContractAddress'; // Replace with your contract address

export function useMintSubdomain() {
  const { data: signer } = useSigner();

  const mintSubdomain = async (subdomain, tld, recipient) => {
    try {
      if (!signer) throw new Error('No signer available');
      const contract = new ethers.Contract(contractAddress, mintingManagerAbi, signer);
      const tldHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(tld));
      const tx = await contract.claimTo(recipient, tldHash, subdomain);
      await tx.wait();
      console.log('Subdomain minted successfully:', tx);
    } catch (error) {
      console.error('Error minting subdomain:', error);
    }
  };

  return { mintSubdomain };
}
