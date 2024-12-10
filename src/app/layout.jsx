import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Strava Accountability',
  description: 'Get rewarded for your activities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 