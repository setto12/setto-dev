import Image from "next/image"

export default function ContactPill({
  icon,
  label,
  value,
  href
}) {
  const content = (
    <div className="
      flex items-center gap-6
      w-full
      px-6 py-5
      rounded-full
      bg-white
      shadow-md
      hover:shadow-lg
      transition hover:-translate-y-1 hover:bg-gray-50
    ">
      {/* Icon */}
      <div className="relative w-12 h-12">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain"
        />
      </div>

      {/* Contact Text */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {label}
        </span>
        <span className="text-lg font-semibold text-[#023859]">
          {value}
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}