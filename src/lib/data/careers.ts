export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  /** External application page, e.g. your ATS */
  applyUrl: string;
  /** Remove once the role is real */
  isSample?: boolean;
};

// PLACEHOLDERS: replace with real roles. Return [] to see the "no vacancies" state.
const PLACEHOLDER_JOBS: Job[] = [1, 2].map((n) => ({
  id: `job-${n}`,
  title: `[Job title ${n}]`,
  department: "[Department]",
  location: "[City, Country]",
  type: "[Full-time]",
  summary: "[Short role summary to be added.]",
  responsibilities: [
    "[Responsibility one]",
    "[Responsibility two]",
    "[Responsibility three]",
  ],
  requirements: [
    "[Requirement one]",
    "[Requirement two]",
    "[Requirement three]",
  ],
  applyUrl: "https://example.com/apply", // TODO: real application link
  isSample: true,
}));

export async function getJobs(): Promise<Job[]> {
  return PLACEHOLDER_JOBS; // later: fetch from CMS/ATS with revalidation
}

export const BENEFITS = [1, 2, 3, 4, 5].map((n) => ({
  id: `benefit-${n}`,
  title: `[Benefit ${n}]`,
}));
