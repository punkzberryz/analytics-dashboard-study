import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://apn1-light-mastodon-34091.upstash.io",
  token: process.env.REDIS_KEY!,
});
