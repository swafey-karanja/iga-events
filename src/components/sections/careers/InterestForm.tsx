"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useSubmitInterest } from "@/src/hooks/useSubmitInterest";
import {
  validateInterest,
  type InterestErrors,
  type InterestFormValues,
} from "@/src/lib/validation/interest";

const INITIAL: InterestFormValues = {
  fullName: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  message: "",
  profileUrl: "",
  consent: false,
  website: "",
};

const FIELDS = [
  {
    name: "fullName",
    label: "Full name",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone number (optional)",
    type: "tel",
    autoComplete: "tel",
  },
  { name: "areaOfInterest", label: "Area of interest", required: true },
  {
    name: "profileUrl",
    label: "LinkedIn or portfolio link (optional)",
    type: "url",
    autoComplete: "url",
  },
] as const;

// Brand colours and the site font for MUI controls
const FIELD_SX = {
  "& .MuiInputBase-root, & .MuiFormLabel-root, & .MuiFormHelperText-root": {
    fontFamily: "inherit",
  },
  "& label.Mui-focused": { color: "#006239" },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#006239" },
} as const;

export default function InterestForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<InterestErrors>({});
  const { status, error, submit, reset } = useSubmitInterest();
  const isSubmitting = status === "submitting";

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const result = validateInterest(values);
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
          Thank you. We’ve received your details and will be in touch about
          future opportunities.
        </Alert>
        <Button
          onClick={() => {
            setValues(INITIAL);
            reset();
          }}
          sx={{ mt: 2, textTransform: "none", color: "#006239" }}
        >
          Send another response
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {FIELDS.map(({ name, label, ...rest }) => (
        <TextField
          key={name}
          name={name}
          label={label}
          value={values[name]}
          onChange={onChange}
          error={Boolean(errors[name])}
          helperText={errors[name]}
          disabled={isSubmitting}
          fullWidth
          sx={FIELD_SX}
          {...rest}
        />
      ))}

      <TextField
        name="message"
        label="Tell us about the work you’d love to do"
        value={values.message}
        onChange={onChange}
        error={Boolean(errors.message)}
        helperText={errors.message ?? `${values.message.length}/1500`}
        disabled={isSubmitting}
        required
        multiline
        minRows={5}
        fullWidth
        sx={FIELD_SX}
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

      <FormControl error={Boolean(errors.consent)}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.consent}
              disabled={isSubmitting}
              onChange={(e) => {
                setValues((v) => ({ ...v, consent: e.target.checked }));
                setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              sx={{ "&.Mui-checked": { color: "#006239" } }}
            />
          }
          label="I agree to my details being stored so you can contact me about future opportunities."
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "inherit",
              fontSize: "0.875rem",
            },
          }}
        />
        {errors.consent && <FormHelperText>{errors.consent}</FormHelperText>}
      </FormControl>

      {status === "error" && error && <Alert severity="error">{error}</Alert>}

      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        endIcon={<SendIcon />}
        sx={{
          justifySelf: "start",
          px: 4,
          py: 1.5,
          borderRadius: "1.5rem",
          textTransform: "none",
          fontFamily: "inherit",
          fontWeight: 600,
          bgcolor: "#109f5d",
          "&:hover": { bgcolor: "#0e8a50" },
        }}
      >
        {isSubmitting ? "Sending…" : "Register interest"}
      </Button>
    </form>
  );
}
