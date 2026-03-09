"use client"

import Link from "next/link"
import { Layers, CloudCog, Server } from "lucide-react"

const iconMap = {
  layers: Layers,
  cloud: CloudCog,
  server: Server,
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
        group block rounded-2xl
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
        mb-4
        transition
        group-hover:bg-[#023859]
        group-hover:text-white
      ">
        {Icon && <Icon size={28} />}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#023859] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Price */}
      <div className="font-semibold text-[#001C40]">
        Starting at ₱{price.toLocaleString()}
      </div>

    </Link>
  )
}