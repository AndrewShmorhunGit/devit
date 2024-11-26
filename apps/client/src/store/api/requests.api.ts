import {
  ApiContentType,
  HttpHeader,
  HttpMethod,
} from "@/utils/enums/api.enums";
import { baseApi } from "./base.api";
import { BASE_API_URL } from "@/configs/env.config";
import { z } from "zod";

// Define the Zod schema based on the API response
const AmountResponseSchema = z.object({
  index: z.number().nonnegative(), // Ensure 'index' is a non-negative number
});

// Infer TypeScript type from the Zod schema
type AmountResponseType = z.infer<typeof AmountResponseSchema>;

// Define the request payload type separately
type AmountPayloadType = {
  index: number;
  signal?: AbortSignal; // Allow optional AbortSignal for request cancellation
};

const handleTransformSubmitAmountResponse = (
  response: AmountResponseType
): AmountResponseType => {
  return AmountResponseSchema.parse(response); // Validate the response
};
export const requestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitAmount: builder.mutation<AmountResponseType, AmountPayloadType>({
      query: (values) => ({
        url: `${BASE_API_URL}?index=${values.index}`,
        method: HttpMethod.GET,
        headers: {
          [HttpHeader.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        },
        extraOptions: { cacheTime: 0 },
      }),
      transformResponse: handleTransformSubmitAmountResponse,
    }),
  }),
});

export const { useSubmitAmountMutation } = requestsApi;
