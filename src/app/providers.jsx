'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
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