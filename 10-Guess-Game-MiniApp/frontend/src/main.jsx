import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  coreDao,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const coreTestnet = {
  id: 1114,
  name: 'Core Testnet',
  iconUrl: 'https://images.app.goo.gl/rqMHLjxM8YPaGZHT9',
  iconBackground: '#fff',
  nativeCurrency: { name: 'CORE', symbol: 'tCORE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.test2.btcs.network'] },
  },
  blockExplorers: {
    default: { name: 'Core Explorer', url: 'https://scan.test2.btcs.network/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
};


const config = getDefaultConfig({
  appName: 'Core DAO Hello World',
  projectId: '2c22698ed6fa65b5ab4a6acb4af0b952',//your wallet connect project  ID passed in string. you could use an env for security 
  chains: [coreDao,coreTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});


const queryClient = new QueryClient();





import './index.css'

createRoot(document.getElementById('root')).render(
<StrictMode>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider  modalSize='wide'>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
