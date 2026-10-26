export type Stat = {
  id: string;
  label: string;
  /** Leave undefined until the verified figure is available, e.g. "250+" */
  value?: string;
};

// PLACEHOLDERS: add `value` to each stat once figures are verified
const PLACEHOLDER_STATS: Stat[] = [
  { id: "events", label: "Events organised" },
  { id: "clients", label: "Clients served" },
  { id: "delegates", label: "Delegates reached" },
  { id: "exhibitors", label: "Exhibitors / sponsors" },
  { id: "countries", label: "Countries hosted" },
  { id: "industries", label: "Industries served" },
];

export async function getStats(): Promise<Stat[]> {
  return PLACEHOLDER_STATS; // later: fetch from CMS/API with revalidation
}
