import type { ReactNode } from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-secondary text-white hover:bg-[#004d2c] focus-visible:outline-primary",
  secondary:
    "bg-secondary text-white rounded-3xl hover:bg-[#0e8a50] focus-visible:outline-white",
};

export default function ArrowLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-between gap-5 px-10 py-4 font-heading text-sm md:text-[16px] font-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowOutwardIcon
        fontSize="small"
        aria-hidden
        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </Link>
  );
}

export function ButtonLInk({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-between gap-5 px-10 py-4 font-heading text-sm md:text-[16px] font-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowLinkExternal({
  href,
  children,
  variant = "primary",
  className = "",
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`group inline-flex items-center justify-between gap-5 px-10 py-4 font-heading text-sm md:text-[16px] font-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowOutwardIcon
        fontSize="small"
        aria-hidden
        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </a>
  );
}
