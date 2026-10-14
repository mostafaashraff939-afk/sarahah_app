

import { z } from "zod";


export const loginSchema=z.object({

    email: z.email(),
    password:z.string().min(6).max(16)

});
export const signupSchema=loginSchema.extend({
      username:z.string().min(3).max(30),
      phone:z.e164,
      age:z.number().min(16).max(200).optional(),
      gender:z.enum(['male','female','other']).default("other")
})