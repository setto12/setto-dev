import Image from "next/image"

export default function TechLogo({ src, alt }) {
  return (
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow">
      <Image
        src={src}
        alt={alt}
        width={28}
        height={28}
      />
    </div>
  )
}