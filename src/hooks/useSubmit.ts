"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function useSubmit<T>(send: (body: T) => Promise<void>) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (body: T) => {
      setStatus("submitting");
      setError(null);
      try {
        await send(body);
        setStatus("success");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong.");
        setStatus("error");
      }
    },
    [send],
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return { status, error, submit, reset };
}
