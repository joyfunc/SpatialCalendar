import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Spatial Calendar',
    default: 'Spatial Calendar - Making Your Calendar Tangible.',
  },
  description:
    'Immerse yourself in a truly authentic calendar experience that makes your moments feel more real and natural.',
  keywords: [
    'Spatial',
    'Desktop',
    'Calendar',
    'Event',
    'Schedule',
    'Photo',
    'Mark',
    'Year',
    'Month',
    'Day',
    'Chinese',
    'Lunar',
    'Solar term',
    'Festival',
  ],
  authors: [
    {
      name: 'joyfunc',
      url: 'https://joyfunc.com',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
