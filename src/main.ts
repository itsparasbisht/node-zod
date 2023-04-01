import { z } from "zod";

const UserSchema = z.object({
  username: z.string(),
  age: z.number(),
});

const user = {
  username: "harry",
  age: 20,
};

console.log(UserSchema.safeParse(user));
