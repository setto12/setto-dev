import Link from "next/link"
import NavPill from "./ui/NavPill"

export default function Header() {
  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-md
      bg-white/10
      border-b border-white/10
    ">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        <Link href="/" className="text-xl font-semibold text-white">
          Setto.dev
        </Link>

        <nav className="flex gap-3">
          <NavPill href="#home" label="Home" />
          <NavPill href="#projects" label="Projects" />
          <NavPill href="#about" label="About" />
          <NavPill href="#contact" label="Contact" />
        </nav>

      </div>
    </header>
  )
}