import Link from "next/link"

export default function Button({
  href = "#",
  children,
  variant = "filled",
}) {

  const variants = {
    filled: "bg-[#023859] text-white hover:opacity-90",
    outline: "border border-[#023859] text-white hover:bg-[#023859] hover:text-white"
  }

  return (
    <Link
      href={href}
      className={`
        px-6 py-3 rounded-full text-lg font-medium
        transition-all duration-200
        ${variants[variant]}
      `}
    >
      {children}
    </Link>
  )
}