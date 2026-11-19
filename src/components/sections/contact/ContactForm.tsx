"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSubmit } from "@/src/hooks/useSubmit";
import { CHECK_SX, FIELD_SX, SUBMIT_SX } from "@/src/lib/constants/mui";
import {
  ATTENDANCE,
  BUDGETS,
  EVENT_DURATIONS,
  EVENT_TYPES,
  INDUSTRIES,
  SERVICES,
} from "@/src/lib/data/contact";
import { submitContact } from "@/src/lib/services/contact";
import {
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactFormValues,
} from "@/src/lib/validation/contact";
import Alert, { type AlertColor } from "@mui/material/Alert";
import Snackbar, { type SnackbarCloseReason } from "@mui/material/Snackbar";

const INITIAL: ContactFormValues = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  jobTitle: "",
  eventName: "",
  eventType: "",
  industry: "",
  location: [],
  attendance: "",
  eventDate: "",
  duration: "",
  services: [],
  budget: "",
  message: "",
  consent: false,
  website: "",
};

const NO_OPTIONS: string[] = [];

const SUCCESS_MESSAGE =
  "Thank you for getting in touch! We’ve received your enquiry, and our team will be in contact shortly.";

type TextKey = Exclude<ContactField, "location" | "services" | "consent">;

const menu = (items: readonly string[], optional = false) => [
  ...(optional
    ? [
        <MenuItem key="none" value="">
          <em>Not specified</em>
        </MenuItem>,
      ]
    : []),
  ...items.map((i) => (
    <MenuItem key={i} value={i}>
      {i}
    </MenuItem>
  )),
];

// Visual order of the fields, so we scroll to the topmost error first
const FIELD_ORDER: ContactField[] = [
  "eventName",
  "eventType",
  "industry",
  "location",
  "attendance",
  "eventDate",
  "duration",
  "budget",
  "message",
  "name",
  "organisation",
  "email",
  "phone",
  "jobTitle",
  "consent",
];

const scrollToEl = (el: HTMLElement | null, block: ScrollLogicalPosition) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block });
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="grid min-w-0 grid-cols-1 gap-5 border-b border-primary/10 pb-10 last:border-b-0 last:pb-0 sm:grid-cols-2">
      <legend className="mb-4 w-full text-lg font-semibold tracking-tight text-primary sm:col-span-2 sm:text-xl">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<ContactErrors>({});
  const { status, submit } = useSubmit(submitContact);
  const isSubmitting = status === "submitting";
  const [toast, setToast] = useState<{
    open: boolean;
    severity: AlertColor;
    message: string;
  }>({ open: false, severity: "success", message: "" });

  const closeToast = (_?: unknown, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setToast((t) => ({ ...t, open: false }));
  };

  const set = (name: string, value: string | string[] | boolean) => {
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    set(e.target.name, e.target.value);

  const toggleService = (service: string) =>
    set(
      "services",
      values.services.includes(service)
        ? values.services.filter((s) => s !== service)
        : [...values.services, service],
    );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      const first = FIELD_ORDER.find((f) => result.errors[f]);
      const el = first ? document.getElementById(`field-${first}`) : null;
      el?.focus({ preventScroll: true });
      scrollToEl(el, "center");
      return;
    }
    setErrors({});

    const error = await submit({ ...result.data, website: values.website });
    if (error) {
      setToast({ open: true, severity: "error", message: error });
      return;
    }
    setValues(INITIAL);
    setToast({ open: true, severity: "success", message: SUCCESS_MESSAGE });
    scrollToEl(document.getElementById("contactForm"), "start");
  };

  const common = {
    fullWidth: true,
    disabled: isSubmitting,
    sx: FIELD_SX,
    onChange,
  } as const;

  const field = (name: TextKey, label: string, required = false) => ({
    ...common,
    id: `field-${name}`,
    name,
    label,
    required,
    value: values[name],
    error: Boolean(errors[name]),
    helperText: errors[name],
  });

  return (
    <section
      id="contactForm"
      aria-labelledby="enquiry-heading"
      className="bg-white px-4 py-16 text-primary sm:px-6 scroll-mt-24"
    >
      <div className="mx-auto w-full lg:max-w-9/12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Let&#39;s work together
          </span>

          <h2
            id="enquiry-heading"
            className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl "
          >
            Tell us about your event
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/60 ">
            Share your event requirements with us and let our team help you
            bring your vision to life. Fill in the details below and we&#39;ll
            get back to you.
          </p>
        </div>

        {/* Form container */}
        <div className="rounded-sm border border-primary/20 bg-white p-5 shadow-sm sm:p-8 md:p-10 lg:p-12">
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-10 md:gap-12"
          >
            <Section title="About Your Event">
              <TextField
                {...field("eventName", "Event name")}
                className="sm:col-span-2"
              />
              <TextField {...field("eventType", "Event type", true)} select>
                {menu(EVENT_TYPES)}
              </TextField>
              <TextField
                {...field("industry", "Industry / Sector", true)}
                select
              >
                {menu(INDUSTRIES)}
              </TextField>
              <Autocomplete
                id="field-location"
                multiple
                freeSolo
                autoSelect
                options={NO_OPTIONS}
                value={values.location}
                onChange={(_, v) => set("location", v)}
                disabled={isSubmitting}
                sx={FIELD_SX}
                className="sm:col-span-2"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    label="Preferred event location(s)"
                    error={Boolean(errors.location)}
                    helperText={
                      errors.location ??
                      "City, Country (e.g. Nairobi, Kenya). Press Enter to add more than one."
                    }
                  />
                )}
              />
              <TextField
                {...field("attendance", "Expected number of attendees", true)}
                select
              >
                {menu(ATTENDANCE)}
              </TextField>
              <TextField
                {...field("eventDate", "Proposed event date")}
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField {...field("duration", "Event duration")} select>
                {menu(EVENT_DURATIONS, true)}
              </TextField>
            </Section>

            <Section title="How Can We Help?">
              <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:col-span-2 sm:grid-cols-2">
                {SERVICES.map((service) => (
                  <FormControlLabel
                    key={service}
                    label={service}
                    control={
                      <Checkbox
                        id="field-consent"
                        sx={CHECK_SX}
                        checked={values.services.includes(service)}
                        onChange={() => toggleService(service)}
                        disabled={isSubmitting}
                      />
                    }
                  />
                ))}
              </div>
              <TextField
                {...field("budget", "Estimated budget")}
                select
                className="sm:col-span-2"
              >
                {menu(BUDGETS, true)}
              </TextField>
              <TextField
                {...field("message", "Tell us more about your event")}
                className="sm:col-span-2"
                multiline
                minRows={6}
                placeholder="Share a little more about your event, what you hope to achieve and any specific requirements."
                helperText={errors.message ?? `${values.message.length}/2000`}
              />
            </Section>

            <Section title="Your Details">
              <TextField
                {...field("name", "Full name", true)}
                autoComplete="name"
              />
              <TextField
                {...field("organisation", "Organisation / Company", true)}
                autoComplete="organization"
              />
              <TextField
                {...field("email", "Email address", true)}
                type="email"
                autoComplete="email"
              />
              <TextField
                {...field("phone", "Phone number", true)}
                type="tel"
                autoComplete="tel"
                helperText={
                  errors.phone ?? "Include country code, e.g. +254 700 000000"
                }
              />
              <TextField
                {...field("jobTitle", "Job title")}
                autoComplete="organization-title"
                className="sm:col-span-2"
              />
            </Section>

            {/* Honeypot: hidden from people and assistive tech */}
            <div aria-hidden className="absolute left-[-9999px]">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={onChange}
              />
            </div>

            <div className="grid gap-5 border-t border-primary/10 pt-6">
              <FormControl error={Boolean(errors.consent)}>
                <FormControlLabel
                  label="I agree to be contacted by IGA Events regarding my enquiry."
                  control={
                    <Checkbox
                      sx={CHECK_SX}
                      checked={values.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      disabled={isSubmitting}
                    />
                  }
                />
                {errors.consent && (
                  <FormHelperText>{errors.consent}</FormHelperText>
                )}
              </FormControl>

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

              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                endIcon={<ArrowForwardIcon />}
                sx={SUBMIT_SX}
              >
                {isSubmitting ? "Sending…" : "Submit Event Enquiry"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={closeToast}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={toast.severity}
          variant="filled"
          onClose={closeToast}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </section>
  );
}
