"use client";
import { useSignUp } from "@clerk/nextjs";
import { signUpSchema } from "../schemas";
import { FormEvent, useState } from "react";
import { FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { EMAIL_PLACEHOLDER } from "../constants";
import { useForm } from "@tanstack/react-form";

export function SignUpForm() {
  const form = useForm({
    validators: {
      onChange: signUpSchema,
    },
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    console.log(event.currentTarget);
  };

  const [verifying, setVerifying] = useState(false);

  return (
    <Form onSubmit={onSubmit}>
      <TextField name="email" type="email">
        <Label>Email</Label>
        <Input placeholder={EMAIL_PLACEHOLDER} />
        <FieldError />
      </TextField>
      <TextField name="password" type="password">
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
    </Form>
  );
}
