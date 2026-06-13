"use client";

import { Button } from "@heroui/react";
import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div className="border border-red-400 rounded-sm min-w-0 w-auto flex gap-2 p-2 items-center">
      <Button variant="primary" onPointerDown={() => setNumber((it) => it + 1)}>
        Press to increase number
      </Button>
      {number}
    </div>
  );
}
