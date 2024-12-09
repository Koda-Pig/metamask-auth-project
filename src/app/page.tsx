"use client";

import Web3 from "web3";

export default function Home() {
  const web3 = new Web3(Web3.givenProvider);

  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="text-center">
        <h1 className="text-3xl mb-4">Web 3 stuff I guess</h1>
        <p>Your public key is {web3?.ENS?.registryAddress}</p>
      </main>
    </div>
  );
}
