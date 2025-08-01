import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joybrata Sarkar - Portfolio',
  description: 'Full Stack Developer & Software Engineer Portfolio',
  keywords: 'Joybrata Sarkar, Full Stack Developer, Software Engineer, React, Next.js, Node.js',
  authors: [{ name: 'Joybrata Sarkar' }],
  creator: 'Joybrata Sarkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joybrata-sarkar.dev',
    title: 'Joybrata Sarkar - Portfolio',
    description: 'Full Stack Developer & Software Engineer Portfolio',
    siteName: 'Joybrata Sarkar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joybrata Sarkar - Portfolio',
    description: 'Full Stack Developer & Software Engineer Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}