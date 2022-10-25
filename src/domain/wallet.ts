export type Wallet = {
  balance: number;
  address: string;
};

export const getWalletsSum = (wallets: Wallet[]) => {
  return wallets.reduce((accum, wallet) => {
    return accum + wallet.balance;
  }, 0);
};
