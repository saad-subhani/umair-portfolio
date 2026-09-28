'use client'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const config = createConfig({ chains: [mainnet, sepolia], connectors: [injected()], transports: { [mainnet.id]: http(), [sepolia.id]: http() }, ssr: true })
const qc = new QueryClient()
export default function Providers({ children }) {
  return <WagmiProvider config={config}><QueryClientProvider client={qc}>{children}</QueryClientProvider></WagmiProvider>
}
