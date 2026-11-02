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
      <div className="mx-auto grid w-full items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 xl:max-w-9/12 xl:px-0">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span aria-hidden className="size-1.5 bg-primary" />
            Company profile
          </p>
          <h2
            id="company-profile-heading"
            className="mt-3 text-4xl font-medium tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">The bigger picture.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 sm:mt-8">
            An introduction to our approach, capabilities and event formats — in
            one considered document. Designed for clients, sponsors, exhibitors
            and partners.
          </p>

          <a
            href={PROFILE_PDF_SRC}
            download
            className="group mt-8 inline-flex w-full items-center justify-between gap-10 bg-secondary px-6 py-4 font-heading text-sm font-medium text-white transition-colors duration-200 hover:bg-[#004d2c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto motion-reduce:transition-none"
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

        {/* Decorative preview of the document cover. Everything inside scales with the cover's own width (cqw). */}
        <div
          aria-hidden
          className="grid place-items-center bg-[#e8e8e1] p-6 sm:p-12 lg:p-14"
        >
          <div className="@container w-3/4 max-w-85 sm:w-3/5">
            <div className="flex aspect-[3/4] flex-col bg-primary p-[8%] text-white">
              <p className="flex items-center gap-[1.5cqw] font-heading text-[9cqw] font-semibold tracking-tight">
                convene
                <span className="mt-[2cqw] size-[2cqw] bg-secondary" />
              </p>
              <NorthEastIcon
                className="mt-[12%] text-secondary"
                sx={{ fontSize: "16cqw" }}
              />
              <p className="mt-auto font-heading text-[14cqw] leading-tight">
                Company profile
              </p>
              <p className="mt-[12%] text-[max(0.5625rem,3.7cqw)] uppercase leading-snug">
                Placeholder document
                <br />
                <span className="normal-case">Approved PDF to be supplied</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
