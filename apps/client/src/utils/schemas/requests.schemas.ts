import { Field } from "@utils/enums/common.enums";
import {
  ObjectSchema,
  ParallelismNumberSchema,
} from "@/utils/schemas/common.schemas";

export const AmountFormSchema = ObjectSchema.extend({
  [Field.NUMBER]: ParallelismNumberSchema,
});

export type AmountFormValuesType = {
  [Field.NUMBER]: number;
};
