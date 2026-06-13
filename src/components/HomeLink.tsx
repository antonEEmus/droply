"use client";
import { Button, Typography } from "@heroui/react";
import { useRouter } from "next/navigation";

export function HomeLink() {
  const router = useRouter();
  return (
    <Button variant="outline" size="lg" onPress={() => router.push("/")}>
      <Typography.Heading level={2}>Home Page</Typography.Heading>
    </Button>
  );
}
