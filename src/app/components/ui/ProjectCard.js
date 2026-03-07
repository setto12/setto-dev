"use client"

import Link from "next/link"
import Image from "next/image"

export default function ProjectCard({
  href = "#",
  image,
  title,
  width = "100%",
  height = "300px"
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl shadow-lg"
      style={{ width, height }}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
        <h3 className="text-white text-xl font-semibold">
          {title}
        </h3>
      </div>
    </Link>
  )
}