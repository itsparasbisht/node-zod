import { z } from "zod";

// const UserSchema = z.object({
//   username: z.string().min(3),
//   email: z.string().email(),
//   age: z.number().gt(10),
//   birthday: z.date().optional(),
//   isProgrammer: z.boolean().default(false),
//   userType: z.literal("GUEST"),
//   country: z.enum(["India", "USA", "Canada"]),
// })

// .extend({ name: z.string() }) extend the current schema

// .merge(z.object({ city: z.string() })) merge another schema

// .strict() will through error if any extra field is found in the object

// .passthrough() returns the extra key value pairs from the parse method

// creating type by infering to the schema
// type User = z.infer<typeof UserSchema>;

const UserSchema = z.object({
  id: z.union([z.string(), z.number()]), // same as z.string().or(z.number())
  username: z.string().min(3),
  friends: z.array(z.string()).nonempty(), // array type
  coords: z.tuple([z.number(), z.number()]).rest(z.string()), // tuple type
});

const user = {
  id: 1,
  username: "harry",
  friends: ["louis"],
  coords: [1, 2],
};

console.log(UserSchema.parse(user));

// console.log(UserSchema.partial().parse(user)); // partial makes all fields optional

// const promiseSchema = z.promise(z.string()); promise schema with string return type

// adding our own validation by refining
const BikeSchema = z.object({
  id: z
    .string()
    .length(10)
    .refine((val) => val.startsWith("AB"), {
      message: "id must start with AB",
    }),
});

const b1 = {
  id: "AB08980000",
};
console.log(BikeSchema.parse(b1));
