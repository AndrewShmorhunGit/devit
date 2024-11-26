import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { apiRequestSchema, apiResponseSchema, apiErrorSchema } from "../schemas/api.schema";

// Swagger settings
export const swagger_settings = {
    swagger: {
        info: {
            title: "API with Rate Limiting and Delays",
            description: "API for handling requests with rate limiting and random delay",
            version: "1.0.0"
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 5050}`
            }
        ],
        consumes: ["application/json"],
        produces: ["application/json"]
    }
};

// Settings UI Swagger
export const swagger_ui_settings = {
    routePrefix: "/docs",
    uiConfig: {
        docExpansion: "full",
        deepLinking: false
    },
    staticCSP: true,
    transformSpecification: (swaggerObject: Readonly<Record<string, any>>, req: any, reply: any) => {
        return swaggerObject;
    },
    transformSpecificationClone: true
};

// Register Swagger function
export const swaggerRoutes = (fastify: any) => {
    fastify.register(swagger, swagger_settings);
    fastify.register(swaggerUi, swagger_ui_settings);
    // Register schemas
    fastify.addSchema(apiRequestSchema);
    fastify.addSchema(apiResponseSchema);
    fastify.addSchema(apiErrorSchema);
};
