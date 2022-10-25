import { getBalancesSum } from "./src/application/get-balances-sum";
import { getWallet } from "./src/application/get-wallet";

export const EtherCalc = {
  getBalance: async (walletAddress: string) => {
    const wallet = await getWallet(walletAddress);
    return wallet.balance;
  },
  getBalancesSum: async (walletAddresses: string[]) => {
    const sum = await getBalancesSum(walletAddresses);
    return sum;
  },
};
