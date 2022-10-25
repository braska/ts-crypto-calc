import { Wallet } from "../domain/wallet";
import { getEthersNetContext } from "../libs/ethers-net-context";

export async function getWallet(walletAddress: string): Promise<Wallet> {
  const { ethersNet } = getEthersNetContext();
  const balance = await ethersNet.getEtherBalance(walletAddress);
  return { balance, address: walletAddress };
}
