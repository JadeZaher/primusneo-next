import { createClient } from "next-sanity";
import { env } from "~/env";

export const writeClient = createClient({
  projectId: "0ho6tcbk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});
