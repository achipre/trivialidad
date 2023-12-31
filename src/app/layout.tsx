import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: './iconLogo.svg',
  title: 'Trivialidad',
  description: 'Pagina donde encontraras miles de preguntas en español e ingles',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
