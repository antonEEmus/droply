"use client";
import { useSignUp } from "@clerk/nextjs";
import { signUpSchema } from "../schemas";
import { FormEvent, useState } from "react";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { EMAIL_PLACEHOLDER } from "../constants";
import { useForm } from "@tanstack/react-form";
import { useAppForm } from "../forms";
import z from "zod";

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const form = useForm({
    validators: {
      onChange: signUpSchema,
    },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  const { Field } = form;

  // const [verifying, setVerifying] = useState(false);

  return (
    <Form onSubmit={form.handleSubmit}>
      <Field
        name="email"
        children={({ state, handleChange, handleBlur }) => (
          <TextField
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={state.value}
          >
            <Label>Email</Label>
            <Input placeholder={EMAIL_PLACEHOLDER} />
            <FieldError />
          </TextField>
        )}
      />
      <Field
        name="password"
        children={({ state, handleChange, handleBlur }) => (
          <TextField
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={state.value}
          >
            <Label>Password</Label>
            <Input placeholder={EMAIL_PLACEHOLDER} />
            <FieldError />
          </TextField>
        )}
      />
    </Form>
  );
}
