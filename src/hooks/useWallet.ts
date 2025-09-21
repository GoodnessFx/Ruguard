import { useState, useEffect } from 'react';
import { WalletConnection } from '../types';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [wallet, setWallet] = useState<WalletConnection>({
    address: '',
    chainId: 0,
    isConnected: false,
  });

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        
        if (accounts.length > 0) {
          const chainId = await window.ethereum.request({
            method: 'eth_chainId',
          });
          
          setWallet({
            address: accounts[0],
            chainId: parseInt(chainId, 16),
            isConnected: true,
            connector: 'metamask',
          });
        }
      } catch (error) {
        console.error('Failed to check wallet connection:', error);
      }
    }
  };

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        
        const chainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        
        setWallet({
          address: accounts[0],
          chainId: parseInt(chainId, 16),
          isConnected: true,
          connector: 'metamask',
        });
        
        return { success: true };
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        return { success: false, error };
      }
    } else {
      return { success: false, error: 'MetaMask not found' };
    }
  };

  const disconnect = () => {
    setWallet({
      address: '',
      chainId: 0,
      isConnected: false,
    });
  };

  const switchNetwork = async (chainId: number) => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId.toString(16)}` }],
        });
        
        setWallet(prev => ({ ...prev, chainId }));
        return { success: true };
      } catch (error) {
        console.error('Failed to switch network:', error);
        return { success: false, error };
      }
    }
  };

  return {
    wallet,
    connect,
    disconnect,
    switchNetwork,
  };
}