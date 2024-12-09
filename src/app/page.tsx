"use client";
import Web3 from "web3";

export default function Home() {
  const web3 = new Web3(Web3.givenProvider);

  console.info("web3", web3);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Web 3 stuff I guess</h1>
      </main>
    </div>
  );
}
