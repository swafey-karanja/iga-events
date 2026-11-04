// MUI doesn't read Tailwind's theme, so the brand colours are set here
export const FIELD_SX = {
  "& .MuiInputBase-root, & .MuiFormLabel-root, & .MuiFormHelperText-root": {
    fontFamily: "inherit",
  },
  "& label.Mui-focused": { color: "#006239" },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#006239" },
} as const;

export const SUBMIT_SX = {
  justifySelf: "start",
  px: 4,
  py: 1.5,
  borderRadius: "1.5rem",
  textTransform: "none",
  fontFamily: "inherit",
  fontWeight: 600,
  bgcolor: "#109f5d",
  "&:hover": { bgcolor: "#0e8a50" },
} as const;
