import { EtherCalc } from "./ether-calc";
import { asyncEthersNetLocalStorage } from "./src/libs/ethers-net-context";
import { walletAddresses } from "./wallets.json";

const main = async () => {
  const service = process.argv[2];

  const { getEtherBalance } = await import(`./src/services/${service}`);

  await asyncEthersNetLocalStorage.run(
    { ethersNet: { getEtherBalance: getEtherBalance } },
    async () => {
      const balance = await EtherCalc.getBalancesSum(walletAddresses);
      console.log(balance);
    }
  );
};

main();
