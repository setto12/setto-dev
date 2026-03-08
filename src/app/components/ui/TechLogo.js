"use client"

import Image from "next/image"

export default function TechLogo({ src, alt }) {
  return (
    <div className="group relative flex flex-col items-center">

      {/* Logo */}
      <div className="
        relative w-30 h-30 rounded-full overflow-hidden
        transition-all duration-200
        group-hover:scale-110
        group-hover:-translate-y-1
        group-hover:shadow-lg
        bg-white/0 group-hover:bg-white/10
      ">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Tooltip */}
      <div className="
        absolute -bottom-7
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-200
        text-xs text-white
        bg-black/80
        px-2 py-1
        rounded
        whitespace-nowrap
        pointer-events-none
      ">
        {alt}
      </div>

    </div>
  )
}