import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { Button, TextField } from "@heroui/react";

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
  },
  formComponents: {
    Button,
  },
  fieldContext,
  formContext,
});

export { useAppForm };
