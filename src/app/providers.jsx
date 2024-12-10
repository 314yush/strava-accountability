'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="cm42dxh2l0121wbahu9v1hhvl"
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#FF4C02', // Strava orange
          logo: 'https://your-logo-url',
        },
        loginMethods: ['email', 'wallet'],
      }}
    >
      {children}
    </PrivyProvider>
  );
} 