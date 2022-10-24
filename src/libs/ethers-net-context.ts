import { AsyncLocalStorage } from "async_hooks";

export const asyncEthersNetLocalStorage = new AsyncLocalStorage<{
  ethersNet: {
    getEtherBalance: (address: string) => Promise<number>;
  };
}>();

export function getEthersNetContext() {
  const context = asyncEthersNetLocalStorage.getStore();

  if (!context || !("ethersNet" in context)) {
    throw new Error("ethersNet Context not provided");
  }

  return context;
}
