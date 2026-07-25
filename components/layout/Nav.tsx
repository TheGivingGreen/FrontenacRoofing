"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

const LINKS = [
  { label: "Commercial", href: "/commercial-roofing" },
  { label: "Residential", href: "/residential-roofing" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        open ? styles.menuOpen : ""
      }`}
    >
      <div className={`container container--editorial ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} home`}>
          <Wordmark onDark={!scrolled && !open} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.links}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href={`tel:${site.phoneHref}`}
            className={styles.phone}
            aria-label={`Call ${site.phone}`}
          >
            <Phone size={16} strokeWidth={2} aria-hidden="true" />
            <span>{site.phone}</span>
          </a>
          <Link href="/schedule-inspection" className={`btn btn--primary ${styles.cta}`}>
            Schedule an Inspection
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation sheet */}
      <div
        id="mobile-menu"
        className={styles.sheet}
        data-open={open}
        hidden={!open}
      >
        <nav aria-label="Mobile" className={styles.sheetNav}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.sheetLink} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.sheetActions}>
          <Link
            href="/schedule-inspection"
            className="btn btn--primary"
            onClick={() => setOpen(false)}
          >
            Schedule an Inspection
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn--secondary">
            <Phone size={16} strokeWidth={2} aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
