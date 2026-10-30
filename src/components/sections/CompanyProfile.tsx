import DownloadIcon from "@mui/icons-material/FileDownloadOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";

// PLACEHOLDER: replace with the approved PDF
const PROFILE_PDF_SRC = "/placeholders/company-profile.pdf";

export default function CompanyProfile() {
  return (
    <section
      id="company-profile"
      aria-labelledby="company-profile-heading"
      className="bg-cream py-16"
    >
      <div className="mx-auto w-full max-w-9/12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            Company profile
          </p>
          <h2
            id="company-profile-heading"
            className="mt-3 text-4xl font-medium tracking-tight text-primary lg:text-7xl"
          >
            <span className="block">The bigger picture.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70">
            An introduction to our approach, capabilities and event formats — in
            one considered document. Designed for clients, sponsors, exhibitors
            and partners.
          </p>

          <a
            href={PROFILE_PDF_SRC}
            download
            className="group mt-8 inline-flex items-center justify-between gap-10 bg-secondary px-6 py-4 font-heading text-sm font-medium text-white transition-colors duration-200 hover:bg-[#004d2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
          >
            Download company profile
            <span className="sr-only">(PDF)</span>
            <DownloadIcon
              fontSize="small"
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
            />
          </a>

          <p className="mt-6 text-xs leading-relaxed text-black/60">
            Placeholder PDF · Final document to be supplied
            <br />
            Direct download proposed. No form required.
          </p>
        </div>

        {/* Decorative preview of the document cover */}
        <div
          aria-hidden
          className="grid place-items-center bg-[#e8e8e1] p-10 sm:p-16 lg:p-14"
        >
          <div className="flex itesm-center justify-center aspect-[3/4] w-3/5 max-w-85 flex-col bg-primary p-[8%] text-white">
            <p className="flex items-center gap-1.5 font-heading text-[clamp(1rem,2.2vw,1.5rem)] font-semibold tracking-tight">
              convene
              <span className="mt-1.5 size-1.5 bg-secondary" />
            </p>
            <NorthEastIcon
              className="mt-[12%] text-secondary"
              sx={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            />
            <p className="mt-auto font-heading text-[clamp(1.5rem,3.6vw,2.5rem)] leading-tight">
              Company profile
            </p>
            <p className="mt-[12%] text-[0.625rem] uppercase leading-snug">
              Placeholder document
              <br />
              <span className="normal-case">Approved PDF to be supplied</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
