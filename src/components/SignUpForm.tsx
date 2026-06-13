"use client";
import { signUpSchema, SignUpValues } from "../schemas";
import {
  Button,
  ErrorMessage,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { EMAIL_PLACEHOLDER } from "../constants";
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "@gravity-ui/icons";
import { useState } from "react";

export function SignUpForm() {
  const defaultValues: SignUpValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const form = useForm<SignUpValues>({
    defaultValues,
    resolver: zodResolver(signUpSchema),
  });
  const { register, handleSubmit, formState } = form;

  const [verifying, setVerifying] = useState(false);

  const onSubmit = async (values: SignUpValues) => {
    console.log("Successfully submitted values: ", values);
  };

  const onError = (errors: FieldErrors<SignUpValues>) => {
    console.log("Errors found preventing submit:", errors);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-2"
    >
      <TextField
        name="email"
        isInvalid={!!formState.errors.email}
        className="w-full"
      >
        <Label>Email:</Label>
        <Input
          type="email"
          {...register("email")}
          placeholder={EMAIL_PLACEHOLDER}
        />
        <FieldError>{formState.errors.email?.message}</FieldError>
      </TextField>
      <TextField
        name="password"
        isInvalid={!!formState.errors.password}
        onChange={() => {
          if (formState.touchedFields.passwordConfirmation) {
            form.clearErrors("passwordConfirmation");
            form.trigger("passwordConfirmation");
          }
        }}
        className="w-full"
      >
        <Label>Password:</Label>
        <Input
          // type="password"
          {...register("password")}
        />
        <FieldError>{formState.errors.password?.message}</FieldError>
      </TextField>
      <TextField
        name="passwordConfirmation"
        isInvalid={!!formState.errors.passwordConfirmation}
        className="w-full"
      >
        <Label>Confirm Password:</Label>
        <Input type="password" {...register("passwordConfirmation")} />
        <FieldError>
          {formState.errors.passwordConfirmation?.message}
        </FieldError>
      </TextField>
      <Button type="submit" isPending={formState.isSubmitting}>
        <Check />
        Submit
      </Button>
    </Form>
  );
}
