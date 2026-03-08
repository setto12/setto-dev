"use client"

import Link from "next/link"

export default function NavPill({ href, label }) {
  return (
    <Link
      href={href || "#"}
      className="
        px-4 py-1.5 rounded-full text-sm font-medium
        text-white
        transition-all duration-200
        hover:bg-white/20
        hover:-translate-y-[1px]
      "
    >
      {label}
    </Link>
  )
}