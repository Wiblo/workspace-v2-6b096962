"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { businessInfo, getPhoneLink } from "@/lib/data/business-info"
import { navItems } from "@/lib/data/navigation"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-blush px-6 pb-6 pt-8">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Main Navigation" className="relative inset-0 z-30 flex w-full items-center md:grid md:grid-cols-[auto_1fr_auto] md:items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-x-4">
            {/* Mobile hamburger button */}
            <button
              className="flex items-center justify-center rounded-lg hover:bg-secondary/20 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>

            {/* Brand logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0">
              <Link
                href="/"
                className="flex items-center md:min-h-10"
              >
                <p
                  className="text-base leading-tight whitespace-nowrap uppercase md:-translate-y-0.5 md:text-2xl"
                  style={{
                    color: "var(--play-nav-logo-text)",
                    fontFamily: "var(--play-nav-logo-font)",
                    fontWeight: "var(--play-nav-logo-weight)",
                  }}
                >
                  {businessInfo.name}
                </p>
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="ml-8 flex hidden items-center md:flex">
            <ul className="flex h-full flex-row items-center gap-x-2">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-10 items-center whitespace-nowrap rounded-lg px-3 py-2 font-medium transition-colors hover:bg-[var(--play-nav-hover-bg)] hover:text-[var(--play-nav-hover-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      pathname === item.href
                        ? "bg-[var(--play-nav-active-bg)] text-[var(--play-nav-active-text)]"
                        : "text-[var(--play-nav-link-text)]"
                    )}
                    style={{
                      fontFamily: "var(--play-nav-text-font)",
                      fontWeight: "var(--play-nav-text-weight)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-hand CTA */}
          <div className="relative flex flex-1 items-center justify-end">
            {/* Phone (desktop only) */}
            <a
              href={getPhoneLink()}
              className="mr-4 hidden items-center gap-2 rounded-sm text-sm transition-colors hover:text-[var(--play-nav-meta-hover)] md:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{
                color: "var(--play-nav-link-text)",
                fontFamily: "var(--play-nav-meta-font)",
                fontWeight: "var(--play-nav-meta-weight)",
              }}
            >
              <Phone className="h-4 w-4" />
              <span>{businessInfo.phone}</span>
            </a>

            {/* Book a Class CTA (desktop only) */}
            {businessInfo.showBookingButton && businessInfo.bookingUrl && (
              <div className="ml-2 hidden md:block">
                <div className="flex items-center justify-end">
                  <Link
                    href={businessInfo.bookingUrl}
                    className="group relative flex min-h-10 items-center justify-center rounded-lg bg-[var(--play-button-bg)] px-3 py-2 font-medium text-[var(--play-button-fg)] transition-[filter] ease-in-out hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-lg bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 hover:rounded-xl"></span>
                    <span className="flex flex-1 items-center justify-center gap-x-2">
                      Book a Class
                      <span className="relative inline-block h-4 w-4">
                        <ChevronRight className="absolute left-0 top-0 h-4 w-4 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-0" aria-hidden="true" />
                        <ArrowRight className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={cn(
          "absolute left-0 top-full w-full overflow-hidden rounded-b-lg border-b border-border/50 bg-blush shadow-lg transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="w-full">
          <ul className="flex flex-col gap-y-2 px-4 py-6">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "flex min-h-10 w-full items-center whitespace-nowrap rounded-lg px-3 py-2 font-medium transition-colors hover:bg-[var(--play-nav-hover-bg)] hover:text-[var(--play-nav-hover-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    pathname === item.href
                      ? "bg-[var(--play-nav-active-bg)] text-[var(--play-nav-active-text)]"
                      : "text-[var(--play-nav-link-text)]"
                  )}
                  style={{
                    fontFamily: "var(--play-nav-text-font)",
                    fontWeight: "var(--play-nav-text-weight)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {businessInfo.showBookingButton && businessInfo.bookingUrl && (
              <li className="flex items-center pt-4">
                <Link
                  href={businessInfo.bookingUrl}
                  className="flex min-h-10 w-full items-center justify-center rounded-lg bg-[var(--play-button-bg)] px-3 py-2 font-medium text-[var(--play-button-fg)] transition-[filter] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Class
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}
