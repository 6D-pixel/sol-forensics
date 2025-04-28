import VALKEY from "ioredis"

if (!process.env.VALKEY_URL) {
  console.error("redis url not found")
  process.exit(1)
}

const redis = new VALKEY(process.env.VALKEY_URL!)

redis.on("ready", () => {
  console.log("Redis instance is ready and connected.")
})

redis.on("error", (err) => {
  console.error("Redis connection error:", err)
})

export default redis
