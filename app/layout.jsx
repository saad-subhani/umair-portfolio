import './globals.css'
import { Space_Grotesk, Sora, JetBrains_Mono } from 'next/font/google'

const bodyFont = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-body', display: 'swap' })
const displayFont = Sora({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-display', display: 'swap' })
const monoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata = {
  title: 'Umair — Web Developer & Graphic Designer',
  description: 'Fresher web developer (BSCS) and graphic designer building fast, modern interfaces with Next.js, React, GSAP and Web3 (wagmi + viem).',
  keywords: ['Umair', 'web developer', 'Next.js developer', 'React developer', 'GSAP', 'Web3', 'wagmi', 'viem', 'graphic designer', 'portfolio'],
  openGraph: {
    title: 'Umair — Web Developer & Graphic Designer',
    description: 'Fresher web developer (BSCS) and graphic designer building fast, modern interfaces with Next.js, React, GSAP and Web3.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  twitter: { card: 'summary_large_image', title: 'Umair — Web Developer & Graphic Designer' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05060c',
  colorScheme: 'dark',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
