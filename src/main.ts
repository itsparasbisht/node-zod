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

// .extend({ name: z.string() }) extend the current schema

// .merge(z.object({ city: z.string() })) merge another schema

// .strict() will through error if any extra field is found in the object

// .passthrough() returns the extra key value pairs from the parse method

// creating type by infering to the schema
// type User = z.infer<typeof UserSchema>;

const user = {
  username: "harry",
  name: "harry",
  email: "harry@mail.com",
  age: 20,
  userType: "GUEST",
  country: "India",
};

console.log(UserSchema.parse(user));
// console.log(UserSchema.partial().parse(user)); // partial makes all fields optional
