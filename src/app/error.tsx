"use client";

import { Button } from "@heroui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="dark:bg-slate-950 bg-red-100 h-screen w-full flex justify-center items-center flex-col gap-5">
      <h2 className="text-red-600 font-bold font-lexend text-6xl ">Something went wrong!</h2>
      <Button variant="flat" color="danger" size="lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
