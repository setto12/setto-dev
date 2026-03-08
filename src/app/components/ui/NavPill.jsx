"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavPill({ href, label }) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href || "/"}
      className={`
        px-4 py-1.5 rounded-full text-sm font-medium
        transition-all duration-200
        ${
          active
            ? "bg-white text-[#023859]"
            : "text-white hover:bg-white/20"
        }
      `}
    >
      {label}
    </Link>
  )
}