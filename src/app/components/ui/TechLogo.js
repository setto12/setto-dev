"use client"

import Image from "next/image"

export default function TechLogo({
  src,
  alt,
  shape = "circle"
}) {
  const shapeClass =
    shape === "square" ? "rounded-md" : "rounded-full"

  return (
    <div className="group relative flex flex-col items-center">

      {/* Logo */}
      <div
        className={`
          relative
          w-14 h-14
          md:w-16 md:h-16
          lg:w-20 lg:h-20
          overflow-hidden
          transition-all duration-200
          group-hover:scale-110
          group-hover:-translate-y-1
          ${shapeClass}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>

      {/* Tooltip */}
      <div className="
        absolute -bottom-7
        opacity-0
        group-hover:opacity-100
        transition
        text-xs text-white
        bg-black/80
        px-2 py-1
        rounded
        whitespace-nowrap
      ">
        {alt}
      </div>

    </div>
  )
}