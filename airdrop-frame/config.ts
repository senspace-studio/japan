import dotenv from "dotenv"

dotenv.config()

export const APP_URL = process.env.APP_URL as string
export const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS as `0x${string}`
export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY as string
export const MERKLE_DISTRIBUTE_CONTRACT = process.env
  .MERKLE_DISTRIBUTE_CONTRACT as `0x${string}`
