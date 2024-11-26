import { FastifyInstance } from "fastify";
import { apiController } from "../controllers/api.controller";
import { apiRequestSchema, apiResponseSchema, apiErrorSchema } from "../schemas/api.schema";

export const apiRoutes = async (fastify: FastifyInstance) => {
    fastify.route({
        method: "GET",
        url: "/api",
        schema: {
            querystring: apiRequestSchema,
            response: {
                200: {
                    description: "Successful response containing the request index.",
                    ...apiResponseSchema
                },
                429: {
                    description: "Too many requests - rate limit exceeded.",
                    ...apiErrorSchema
                },
                500: {
                    description: "Internal server error.",
                    ...apiErrorSchema
                }
            }
        },
        handler: apiController
    });
};
