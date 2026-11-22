
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ImageKitWrapper from '@/components/ImageKitProvider'
import './globals.css'

const GA_ID = 'G-VCB3G228TZ'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Little Flower English School | Rajgarh, Jhansi',
  description:
    'Little Flower English School provides quality education for students up to Class 9, with a focus on academic learning, discipline, values, and overall development in Rajgarh, Jhansi.',
  keywords: [
    'Little Flower English School',
    'school in Rajgarh',
    'school in Jhansi',
    'school near Ballampur Road',
    'English school in Rajgarh',
    'school up to Class 9',
    'school admission in Rajgarh',
    'schools in Jhansi',
  ],
}

export const viewport: Viewport = {
  themeColor: '#4a7cc9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <ImageKitWrapper>
          {children}
        </ImageKitWrapper>

        <Analytics />
      </body>
    </html>
  )
}
