"use client";

import { useId, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { EVENT_LINKS } from "@/src/lib/constants/navigation";

const itemBase =
  "flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2 text-left text-[15px] font-semibold text-white transition-colors hover:bg-[#109F5D]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

type Props = { onNavigate?: () => void };

export default function EventsSubmenu({ onNavigate }: Props) {
  const uid = useId();
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <ul className="flex flex-col gap-1">
      {EVENT_LINKS.map(({ label, items }, i) => {
        const open = openLabel === label;
        const panelId = `${uid}-${i}`;
        return (
          <li key={label}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenLabel(open ? null : label)}
              className={`${itemBase} ${open ? "bg-[#109F5D]/60" : ""}`}
            >
              {label}
              <KeyboardArrowDownIcon
                fontSize="small"
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <ul id={panelId} className="ml-4 mt-1 flex flex-col gap-1 py-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onNavigate}
                      className={itemBase}
                    >
                      <span>
                        {item.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </span>
                      <OpenInNewIcon fontSize="inherit" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
