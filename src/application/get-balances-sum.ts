import { getWalletsSum } from "../domain/wallet";
import { withRateLimiter } from "../libs/rate-limiter";
import { getWallet } from "./get-wallet";

export async function getBalancesSum(
  walletAddresses: string[]
): Promise<number> {
  const getWalletLimited = withRateLimiter(getWallet);

  const walletPromises = walletAddresses.map(getWalletLimited);
  const wallets = await Promise.all(walletPromises);

  return getWalletsSum(wallets);
}
