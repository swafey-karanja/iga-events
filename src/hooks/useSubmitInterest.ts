"use client";

import { useCallback, useState } from "react";
import { submitInterest } from "@/src/lib/services/careers";
import type { InterestRequest } from "@/src/lib/validation/interest";

type Status = "idle" | "submitting" | "success" | "error";

export function useSubmitInterest() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(async (body: InterestRequest) => {
    setStatus("submitting");
    setError(null);
    try {
      await submitInterest(body);
      setStatus("success");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
  }, []);

  return { status, error, submit, reset };
}
