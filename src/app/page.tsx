import { Typography } from "@heroui/react";

export default function Home() {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="h-md w-full flex justify-center py-4">
        <Typography.Heading level={1}>Welcome to Droply</Typography.Heading>
      </div>
    </div>
  );
}
