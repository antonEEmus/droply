import z from "zod";

export const signUpSchema = z
  .object({
    email: z
      .email()
      .nonempty({ error: "Please provide an email." })
      .nonoptional(),
    password: z
      .string()
      .nonempty({ error: "Please provide a password." })
      .min(8, { error: "Password must be at least 8 characters long." })
      .nonoptional(),
    passwordConfirmation: z
      .string()
      .nonempty({ error: "Please confirm your password." })
      .nonoptional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    error: "Passwords must match.",
    path: ["passwordConfirmation"],
  });

export type SignUpValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  identifier: z.email().nonempty({ error: "Please enter your email." }),
  password: z
    .string()
    .nonempty({ error: "Please enter your password." })
    .min(8, { error: "Password must be at least 8 characters long." }),
});

export type SignInValues = z.infer<typeof signInSchema>;
