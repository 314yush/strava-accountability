'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="YOUR_PRIVY_APP_ID"
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#FF4C02',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
} 