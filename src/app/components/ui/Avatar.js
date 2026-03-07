import Image from "next/image"

export default function Avatar({
  src,
  alt = "Avatar",
  size = 360
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >

      {/* Gradient Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#000000] to-[#0A2F6B]" />

      {/* Avatar Image */}
      <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden shadow-xl">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border-[8px] border-[#023859]" />

    </div>
  )
}