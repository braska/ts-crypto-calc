import dotenv from "dotenv";
import { Env } from "./src/libs/env";

dotenv.config();

export type Config = {
  ETHERSCAN_API_KEY: string;
};

const getEnvOrThrowLogs = Env.getEnvOrThrow(console.error);

export const config: Config = {
  ETHERSCAN_API_KEY: getEnvOrThrowLogs("ETHERSCAN_API_KEY"),
};
