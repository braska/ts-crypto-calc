import { EtherCalc } from "./ether-calc";
import { asyncEthersNetLocalStorage } from "./src/libs/ethers-net-context";
import { getEtherBalanceFromApi } from "./src/services/ether-scan-api";

const main = async () => {
  await asyncEthersNetLocalStorage.run(
    { ethersNet: { getEtherBalance: getEtherBalanceFromApi } },
    async () => {
      const balance = await EtherCalc.getBalance();
      console.log(balance);
    }
  );
};

main();
