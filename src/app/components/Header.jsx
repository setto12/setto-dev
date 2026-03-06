import Link from "next/link"
import NavPill from "./ui/NavPill"

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          Setto.dev
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <NavPill href="/" label="Home" />
          <NavPill href="/projects" label="Projects" />
          <NavPill href="/services" label="Services" />
          <NavPill href="/contact" label="Contact" />
        </nav>

      </div>
    </header>
  )
}