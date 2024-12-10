"use client";

import Web3, { Web3 as IWeb3 } from "web3";

interface Web3WithENS extends IWeb3 {
  ENS: {
    registryAddress: string;
  };
}

export default function Home() {
  const web3 = new Web3(Web3.givenProvider) as Web3WithENS;

  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="text-center">
        <h1 className="text-3xl mb-4">Web3.js stuff I guess</h1>
        <p>
          Your public key is
          <br /> <strong>{web3.ENS?.registryAddress}</strong>
        </p>
      </main>
    </div>
  );
}
