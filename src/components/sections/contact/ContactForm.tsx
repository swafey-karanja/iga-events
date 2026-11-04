"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useSubmit } from "@/src/hooks/useSubmit";
import { FIELD_SX, SUBMIT_SX } from "@/src/lib/constants/mui";
import { CONTACT_TOPICS } from "@/src/lib/data/contact";
import { submitContact } from "@/src/lib/services/contact";
import {
  validateContact,
  type ContactErrors,
  type ContactFormValues,
} from "@/src/lib/validation/contact";

const INITIAL: ContactFormValues = {
  name: "",
  email: "",
  topic: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<ContactErrors>({});
  const { status, error, submit, reset } = useSubmit(submitContact);
  const isSubmitting = status === "submitting";

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    await submit({ ...result.data, website: values.website });
  };

  if (status === "success") {
    return (
      <div role="status">
        <Alert severity="success">
          <strong>Thank you for contacting us!</strong> We’ll get back to you as
          soon as we can.
        </Alert>
        <Button
          onClick={() => {
            setValues(INITIAL);
            reset();
          }}
          sx={{ mt: 2, textTransform: "none", color: "#006239" }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const common = {
    fullWidth: true,
    disabled: isSubmitting,
    sx: FIELD_SX,
    onChange,
  } as const;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <TextField
        {...common}
        name="name"
        label="Name"
        autoComplete="name"
        required
        value={values.name}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />
      <TextField
        {...common}
        name="email"
        label="Email address"
        type="email"
        autoComplete="email"
        required
        value={values.email}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        {...common}
        select
        name="topic"
        label="Select recipient or topic"
        required
        value={values.topic}
        error={Boolean(errors.topic)}
        helperText={errors.topic}
      >
        {CONTACT_TOPICS.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        {...common}
        name="message"
        label="Message"
        required
        multiline
        minRows={6}
        value={values.message}
        error={Boolean(errors.message)}
        helperText={errors.message ?? `${values.message.length}/2000`}
      />

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px]">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={onChange}
        />
      </div>

      <p className="text-xs leading-relaxed text-black/60">
        By submitting this form you agree to our{" "}
        {/* TODO: point to the real legal pages */}
        <Link
          href="/terms"
          className="underline underline-offset-2 hover:no-underline"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:no-underline"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {status === "error" && error && <Alert severity="error">{error}</Alert>}

      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        endIcon={<SendIcon />}
        sx={SUBMIT_SX}
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
