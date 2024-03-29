import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viraj Sharma',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='md:pt-20'>
      <link  rel="icon" href="/photo.ico" sizes="any" type="image/x-icon"/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
