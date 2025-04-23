import Redis from "ioredis"

if (!process.env.REDIS_URL) {
  console.error("redis url not found")
  process.exit(1)
}

const redis = new Redis(process.env.REDIS_URL!)

redis.on("ready", () => {
  console.log("Redis instance is ready and connected.")
})

redis.on("error", (err) => {
  console.error("Redis connection error:", err)
})

export default redis
