import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Idea Board – Capture ideas. Upvote what matters.',
  description: 'Submit bite-sized ideas, upvote the best, and collaborate in a live-feel board.',
  openGraph: {
    title: 'Idea Board',
    description: 'Capture ideas. Upvote what matters.',
    type: 'website',
    url: 'https://example.com/',
    siteName: 'Idea Board',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idea Board',
    description: 'Capture ideas. Upvote what matters.',
  },
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



