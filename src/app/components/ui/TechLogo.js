import Image from "next/image"

export default function TechLogo({ src, alt }) {
  return (
    <div className="relative w-30 h-30 rounded-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-2"
      />
    </div>
  )
}