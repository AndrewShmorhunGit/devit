import { FastifyReply, FastifyRequest } from "fastify";
import { ApiRequest } from "../schemas/api.schema";
import { handleApiRequest } from "../services/api.service";

export const apiController = async (request: FastifyRequest<{ Querystring: ApiRequest }>, reply: FastifyReply) => {
    try {
        const { index } = request.query;
        const result = await handleApiRequest(index);

        return reply.send(result);
    } catch (error) {
        return reply.status(500).send({ error: "Internal Server Error" });
    }
};
