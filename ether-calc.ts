import { getWallet } from "./src/application/get-wallet";

export const EtherCalc = {
  getBalance: async () => {
    const wallet = await getWallet("0xab5801a7d398351b8be11c439e05c5b3259aec9b");
    return wallet.balance;
  },
};
