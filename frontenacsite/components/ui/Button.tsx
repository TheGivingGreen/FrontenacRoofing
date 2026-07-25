import Link from "next/link";

type Variant = "primary" | "primary-dark" | "secondary" | "secondary-dark";

/**
 * Sharp rectangular button (DESIGN.md §10). Renders as a link by default since
 * the homepage CTAs are navigational. Variants map 1:1 to the design doc's
 * light/dark primary and secondary treatments.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`btn btn--${variant} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
