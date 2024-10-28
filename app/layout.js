import { Suspense } from 'react'
import GoogleAnalytics from './components/GoogleAnalytics'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Suspense>
          <GoogleAnalytics measurementId="G-76Q796NRXD" /> {/* Replace with your ID */}
        </Suspense>
      </head>
      <body>{children}</body>
    </html>
  )
}