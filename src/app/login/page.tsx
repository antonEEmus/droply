"use client";
import { SignUpForm } from "@/src/components/SignUpForm";
import { Card, CardContent, Typography } from "@heroui/react";

export default function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col items-center py-4 gap-8">
      <Typography.Heading level={1}>Login Page</Typography.Heading>
      <Card>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
