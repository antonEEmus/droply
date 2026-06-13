"use client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const router = useRouter();

  return (
    <div>
      <Button onPress={() => router.push("/login")} variant="primary">
        Sign Up
      </Button>
    </div>
  );
}
