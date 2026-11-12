export type Stat = {
  id: string;
  label: string;
  /** Leave undefined until the verified figure is available, e.g. "250+" */
  value?: string;
};

// PLACEHOLDERS: add `value` to each stat once figures are verified
const PLACEHOLDER_STATS: Stat[] = [
  { id: "delegates", label: "Delegates", value: "3,300+" },
  { id: "countries", label: "Countries", value: "100+" },
  { id: "exhibitors&sponsors", label: "Exhibitors & Sponsors", value: "100+" },
  { id: "speakers", label: "Speakers", value: "100+" },
  { id: "space", label: "Exhibition Space", value: "3,300 m²" },
  { id: "again", label: "Would Attend Again", value: "92%" },
];

export async function getStats(): Promise<Stat[]> {
  return PLACEHOLDER_STATS; // later: fetch from CMS/API with revalidation
}
