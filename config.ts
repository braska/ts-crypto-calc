import dotenv from "dotenv";
import { Env } from "./src/libs/env";

dotenv.config();

export type Config = {
  API_KEY: string;
};

const getEnvOrThrowLogs = Env.getEnvOrThrow(console.error);

export const config: Config = {
  API_KEY: getEnvOrThrowLogs("API_KEY"),
};
