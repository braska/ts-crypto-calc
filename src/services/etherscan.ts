import { config } from "../../config";

const API_KEY = config.ETHERSCAN_API_KEY;

export type EtherScanApiResponse = {
  status: string;
  message: string;
  result: string;
};

async function getEtherFromAPI(
  walletAddress: string
): Promise<EtherScanApiResponse> {
  const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${API_KEY}`;
  const apiResp = await fetch(apiUrl);
  return apiResp.json();
}

export async function getEtherBalance(
  walletAddress: string
): Promise<number> {
  const apiResp = await getEtherFromAPI(walletAddress);
  return Number(apiResp.result) / 10 ** 18;
}
