"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { consultationHref, isCurrentPath, primaryNav } from "@/lib/navigation";
import { asset } from "@/lib/assetPath";
import { cn } from "@/lib/utils";

const DESKTOP_NAV = "(min-width: 1440px)";
const ease = [0.22, 1, 0.36, 1] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("size-3 transition-transform duration-200", open && "rotate-180")}
    >
      <path
        d="M3.5 6 8 10.5 12.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      {open ? (
        <path d="M6 6 18 18 M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
      ) : (
        <path d="M4 7h16 M4 12h16 M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
      )}
    </svg>
  );
}

function isDesktop() {
  return window.matchMedia(DESKTOP_NAV).matches;
}

const navLinkClass =
  "inline-flex h-9 items-center whitespace-nowrap rounded-lg px-2 text-[13px] font-medium text-brand transition-colors duration-200 hover:bg-[#eff1f5]";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const toggleRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeTimer = useRef<number | null>(null);
  const [menuPath, setMenuPath] = useState(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  const activeItem = primaryNav.find((item) => item.id === openMenu && item.groups?.length);

  function clearCloseTimer() {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openDesktopMenu(id: string) {
    if (!isDesktop()) return;
    clearCloseTimer();
    setOpenMenu(id);
  }

  function scheduleDesktopClose() {
    if (!isDesktop()) return;
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }

  function closeMenus() {
    clearCloseTimer();
    setMobileOpen(false);
    setOpenMenu(null);
  }

  function toggleMenu(id: string) {
    clearCloseTimer();
    setOpenMenu((current) => (current === id ? null : id));
  }

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    setReady(true);
  }, []);

  const live = ready && !reduce;

  useEffect(() => {
    if (!mobileOpen) return;
    menuButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMenu || mobileOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const id = openMenu;
      setOpenMenu(null);
      if (id) toggleRefs.current[id]?.focus();
    }

    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openMenu, mobileOpen]);

  return (
    <motion.header
      className="site-header sticky top-0 z-40 border-b border-[#e5e8ee] bg-white min-[1440px]:bg-white/95 min-[1440px]:backdrop-blur-md"
      ref={headerRef}
      initial={live ? { opacity: 0, y: -8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: live ? 0.4 : 0, ease }}
    >
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Container className="relative flex min-h-[4.5rem] items-center gap-4">
        <Link href="/" className="logo-link shrink-0 transition-opacity hover:opacity-80" aria-label="ARKCA Corporate, home">
          <Image
            src={asset("/brand/logo.webp")}
            alt=""
            width={290}
            height={83}
            priority
            className="h-8 w-auto min-[1440px]:h-9"
          />
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle ml-auto inline-flex size-11 items-center justify-center rounded-xl text-brand min-[1440px]:hidden"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setMobileOpen((open) => !open);
            setOpenMenu(null);
          }}
        >
          <MenuIcon open={mobileOpen} />
          <span className="visually-hidden">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={cn(
            "primary-nav",
            mobileOpen ? "is-open" : "",
            "max-[1439px]:fixed max-[1439px]:inset-x-0 max-[1439px]:bottom-0 max-[1439px]:top-[4.5rem] max-[1439px]:overflow-y-auto max-[1439px]:bg-white max-[1439px]:px-5 max-[1439px]:pb-8 max-[1439px]:pt-4",
            !mobileOpen && "max-[1439px]:hidden",
            "min-[1440px]:ml-auto min-[1440px]:flex min-[1440px]:min-w-0 min-[1440px]:items-center min-[1440px]:gap-1",
          )}
          aria-label="Primary"
        >
          <ul className="flex flex-col min-[1440px]:flex-row min-[1440px]:flex-nowrap min-[1440px]:items-center min-[1440px]:gap-0">
            {primaryNav.map((item) => {
              const current = isCurrentPath(pathname, item.href);
              const hasMenu = Boolean(item.groups?.length);
              const expanded = openMenu === item.id;

              if (!hasMenu) {
                return (
                  <li key={item.id} className="shrink-0">
                    <Link
                      href={item.href}
                      className={cn(navLinkClass, current && "bg-[#eff1f5]")}
                      aria-current={current ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.id}
                  className={cn("nav-item has-menu shrink-0", expanded && "is-open")}
                  onMouseEnter={() => openDesktopMenu(item.id)}
                  onMouseLeave={scheduleDesktopClose}
                >
                  <div className="flex items-center justify-between gap-0.5 min-[1440px]:justify-start">
                    <Link
                      href={item.href}
                      className={cn(navLinkClass, (current || expanded) && "bg-[#eff1f5]")}
                      aria-current={current ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={cn(
                        "inline-flex size-9 items-center justify-center rounded-lg text-[#555d6c] transition-colors hover:bg-[#eff1f5] min-[1440px]:-ml-1 min-[1440px]:size-7",
                        expanded && "bg-[#eff1f5] text-brand",
                      )}
                      aria-expanded={expanded}
                      aria-controls={`${item.id}-menu`}
                      ref={(node) => {
                        toggleRefs.current[item.id] = node;
                      }}
                      onClick={() => toggleMenu(item.id)}
                    >
                      <span className="visually-hidden">
                        {expanded ? `Hide ${item.label}` : `Show ${item.label}`}
                      </span>
                      <Chevron open={expanded} />
                    </button>
                  </div>
                  <div
                    id={`${item.id}-menu`}
                    className="submenu submenu--mobile min-[1440px]:hidden"
                    hidden={!expanded}
                  >
                    <MegaMenu item={item} onNavigate={closeMenus} variant="mobile" />
                  </div>
                </li>
              );
            })}
          </ul>

          <Button asChild size="lg" className="mt-4 w-full min-[1440px]:hidden">
            <a href={consultationHref}>Book a Consultation</a>
          </Button>
        </nav>

        <Button
          asChild
          size="lg"
          className="hidden shrink-0 rounded-xl px-4 text-[13px] transition-transform duration-200 hover:-translate-y-0.5 min-[1440px]:inline-flex"
        >
          <a href={consultationHref}>Book a Consultation</a>
        </Button>
      </Container>

      {activeItem && !mobileOpen ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-full z-50 hidden justify-center pt-3 min-[1440px]:flex"
          onMouseEnter={() => openDesktopMenu(activeItem.id)}
          onMouseLeave={scheduleDesktopClose}
        >
          <div className="pointer-events-auto">
            <MegaMenu item={activeItem} onNavigate={closeMenus} variant="desktop" />
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
