"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function useSubmit<T>(send: (body: T) => Promise<void>) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  /** Resolves to `null` on success, or the error message on failure */
  const submit = useCallback(
    async (body: T): Promise<string | null> => {
      setStatus("submitting");
      setError(null);
      try {
        await send(body);
        setStatus("success");
        return null;
      } catch (e) {
        const message =
          e instanceof Error ? e.message : "Something went wrong.";
        setError(message);
        setStatus("error");
        return message;
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
