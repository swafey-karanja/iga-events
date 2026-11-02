export type Stat = {
  id: string;
  label: string;
  /** Leave undefined until the verified figure is available, e.g. "250+" */
  value?: string;
};

// PLACEHOLDERS: add `value` to each stat once figures are verified
const PLACEHOLDER_STATS: Stat[] = [
  { id: "events", label: "Events organised", value: "35" },
  { id: "clients", label: "Clients served", value: "15" },
  { id: "delegates", label: "Delegates reached", value: "10,000+" },
  { id: "exhibitors", label: "Exhibitors / sponsors", value: "350+" },
  { id: "countries", label: "Countries hosted", value: "13" },
  { id: "industries", label: "Industries served", value: "50+" },
];

export async function getStats(): Promise<Stat[]> {
  return PLACEHOLDER_STATS; // later: fetch from CMS/API with revalidation
}
