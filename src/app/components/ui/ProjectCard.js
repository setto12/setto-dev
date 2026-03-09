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
  width = "100%"
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-xl shadow-lg block"
    >
    <div className="relative rounded-xl overflow-hidden bg-gray-100">

      {/* Browser Frame */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 flex items-center gap-2 px-3 z-10">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>

      {/* Screenshot */}
      <Image
        src={image}
        alt={title}
        width={1278}
        height={1391}
        className="w-full h-auto pt-8"
      />

    </div>

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