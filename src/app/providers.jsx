'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId="cm42dxh2l0121wbahu9v1hhvl"
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