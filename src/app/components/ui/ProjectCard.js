"use client"

import Link from "next/link"
import Image from "next/image"
import TechLogo from "./TechLogo"

export default function ProjectCard({
  href = "#",
  image,
  title,
  description,
  tech = [],
  width = "100%",
  height = "300px"
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl shadow-lg"
      style={{ width, height }}
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">

        <h3 className="text-white text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex gap-3 flex-wrap">
          {tech.map((item, index) => (
            <TechLogo key={index} src={item.src} alt={item.alt} />
          ))}
        </div>

      </div>
    </Link>
  )
}