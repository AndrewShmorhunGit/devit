import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import dotenv from "dotenv";
import { swaggerRoutes } from "./swagger/swagger.config";
import { apiRoutes } from "./routes/api.rotes";
import fastifyRateLimit from "@fastify/rate-limit";

const env = process.env.NODE_ENV === "local" ? ".env.local" : ".env.dev";
dotenv.config({ path: env });

export const PORT = parseInt(process.env.PORT || "5050", 10);

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors, {
    origin: process.env.ALLOW_ORIGIN || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
});

const BAN_TIME = 30;

fastify.register(fastifyRateLimit, {
    max: 50,
    timeWindow: "1 second",
    ban: BAN_TIME,
    errorResponseBuilder: () => ({
        statusCode: 429,
        error: "Too Many Requests",
        message: `Rate limit exceeded. Try again in ${BAN_TIME}sec.`
    })
});

fastify.get("/", async (request, reply) => {
    return { message: "API is running!" };
});

swaggerRoutes(fastify);

fastify.register(apiRoutes);

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: "0.0.0.0" });
        fastify.log.info(`Server listening on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
