import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string(),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters." }),
});
