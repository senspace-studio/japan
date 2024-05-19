import { NeynarAPIClient } from "@neynar/nodejs-sdk"
import { NEYNAR_API_KEY } from "../config.js"

const NeynarClient = new NeynarAPIClient(NEYNAR_API_KEY)

export const validateAction = async (msg: string) => {
  const validated = await NeynarClient.validateFrameAction(msg)

  return validated
}
