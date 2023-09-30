import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, title }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <head>
        <link rel="icon" href="/assets/Quran.png" />
        <title>{title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
