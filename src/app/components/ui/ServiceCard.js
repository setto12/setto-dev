"use client"

import Link from "next/link"
import { Layers, Server, Monitor } from "lucide-react"

const iconMap = {
  layers: Layers,
  server: Server,
  monitor: Monitor,
}

export default function ServiceCard({
  slug,
  icon,
  title,
  description,
  price
}) {
  const Icon = iconMap[icon]

  return (
    <Link
      href={`/services/${slug}`}
      className="
        group flex flex-col h-full
        rounded-2xl
        bg-white
        shadow-md
        hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-gradient-to-br hover:from-white hover:to-blue-50
        p-8
      "
    >

      {/* Icon */}
      <div className="
        w-14 h-14
        flex items-center justify-center
        rounded-xl
        bg-[#023859]/10
        text-[#023859]
        mb-6
        transition
        group-hover:bg-[#023859]
        group-hover:text-white
      ">
        {Icon && <Icon size={28} />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#023859]">
        {title}
      </h3>

      {/* Accent line */}
      {/* <div className="w-12 h-[3px] bg-[#023859] mt-2 mb-4 rounded-full"></div> */}

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-6 pt-4">

        {/* Price */}
        <div className="font-semibold text-[#001C40]">
          Starts at ₱{price.toLocaleString()}
        </div>

      </div>

    </Link>
  )
}