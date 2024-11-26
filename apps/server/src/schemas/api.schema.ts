import { FromSchema } from "json-schema-to-ts";

export const apiRequestSchema = {
    $id: "apiRequestSchema",
    type: "object",
    properties: {
        index: { type: "integer", minimum: 1 }
    },
    required: ["index"],
    additionalProperties: false
} as const;

export const apiResponseSchema = {
    $id: "apiResponseSchema",
    type: "object",
    properties: {
        success: { type: "boolean" },
        index: { type: "integer" }
    },
    required: ["success", "index"],
    additionalProperties: false
} as const;

export const apiErrorSchema = {
    $id: "apiErrorSchema",
    type: "object",
    properties: {
        error: { type: "string" }
    },
    required: ["error"],
    additionalProperties: false
} as const;

export type ApiRequest = FromSchema<typeof apiRequestSchema>;
export type ApiResponse = FromSchema<typeof apiResponseSchema>;
export type ApiError = FromSchema<typeof apiErrorSchema>;
