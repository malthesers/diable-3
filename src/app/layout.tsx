import './globals.css'
import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import Header from '../components/layout/Header'

const spectral = Spectral({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Diable',
  description: 'Diablo III Worlde ||| Guess the item by specifications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
