'use client';

import { usePrivy } from '@privy-io/react-auth';
import QRCode from 'react-qr-code';
import { useState } from 'react';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';

function Home() {
  const { login, ready, authenticated } = usePrivy();
  const [requestUrl, setRequestUrl] = useState('');
  const [proofs, setProofs] = useState([]);

  const getVerificationReq = async () => {
    const APP_ID = "0x9FC9629210C55072CfEB3586EC55676e5ab3cB34";
    const APP_SECRET = "0x8c131aa97c3d57297a92ded28458c90b172dd0b0b561addcfe288123ddc24e2b";
    const PROVIDER_ID = "95312cc7-d3ef-44fe-a4c7-b8de178440f7";

    // Initialize the Reclaim SDK with your credentials
    const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID);

    // Generate the verification request URL
    const requestUrl = await reclaimProofRequest.getRequestUrl();
    console.log("Request URL:", requestUrl);
    setRequestUrl(requestUrl);

    // Start listening for proof submissions
    await reclaimProofRequest.startSession({
      onSuccess: (proofs) => {
        console.log("Verification success", proofs);
        setProofs(proofs);
      },
      onError: (error) => {
        console.error("Verification failed", error);
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Earn rewards for every step
        </h1>
        
        {ready && !authenticated && (
          <button
            onClick={login}
            className="bg-[#FF4C02] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#E34902] transition-colors"
          >
            Login to Get Started
          </button>
        )}
        
        {authenticated && (
          <div className="space-y-6">
            <p className="text-xl mb-4">Welcome! You&apos;re logged in.</p>
            
            <button 
              onClick={getVerificationReq}
              className="bg-[#FF4C02] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#E34902] transition-colors"
            >
              Get Verification Request
            </button>

            {requestUrl && (
              <div className="p-6 bg-white rounded-lg shadow-lg inline-block mt-4">
                <p className="text-black mb-4">Scan this QR code to verify:</p>
                <QRCode 
                  value={requestUrl}
                  size={256}
                  level="H"
                />
              </div>
            )}

            {proofs && (
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-green-500 mb-2">Verification Successful!</h2>
                <div className="bg-gray-100 p-4 rounded-lg overflow-auto max-w-xl">
                  <pre className="text-left text-sm">
                    {JSON.stringify(proofs, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
