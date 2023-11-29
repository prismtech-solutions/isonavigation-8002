"use client";

import { type FC } from "react";
import { useCopyToClipboard } from "../hooks/copyToClipboard";

export const Contract: FC<{ contractAddress: string }> = ({
  contractAddress,
}) => {

  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => copy(contractAddress)}>
        <p
          className={`${
            copied ? "text-lime-500" : "text-t3"
          } hidden text-center font-body text-xl transition-colors duration-300 md:block lg:block xl:block`}
        >
          Contract : {contractAddress}
        </p>
      </button>
      <button onClick={() => copy(contractAddress)}>
        <p
          className={`${
            copied ? "text-lime-500" : "text-t3"
          } block text-center font-body text-xl transition-colors duration-300 md:hidden lg:hidden xl:hidden`}
        >
          Contract : {contractAddress.slice(0, 10)}...
          {contractAddress.slice(36, 50)}
        </p>
      </button>
    </div>
  );
};
