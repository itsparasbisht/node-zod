import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().gt(10),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().default(false),
  userType: z.literal("GUEST"),
  country: z.enum(["India", "USA", "Canada"]),
});

// creating type by infering to the schema
type User = z.infer<typeof UserSchema>;

const user = {
  username: "harry",
  email: "harry@mail.com",
  age: 20,
  userType: "GUEST",
  country: "India",
};

console.log(UserSchema.parse(user));
