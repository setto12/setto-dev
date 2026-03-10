import Section from "../ui/Section"
import Button from "../ui/Button"
import TechLogo from "../ui/TechLogo"
import Avatar from "../ui/Avatar"

export default function LandingSection() {
  return (
    <Section bg="dark" id="home">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8">

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-[40px] font-medium">
              I am Setto
            </h2>

            <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold leading-tight">
              I Build Scalable Web Applications
            </h1>

            <p className="text-base sm:text-lg md:text-[24px] leading-relaxed text-gray-200">
              Specializing in modern web technologies
              including React, Next.js, and FastAPI
              <br /><br />
              Focused on building reliable backend systems
              and production-ready applications
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button variant="filled" href="#contact">Hire Me</Button>
            <Button variant="outline" href="#projects">View Projects</Button>
          </div>

        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center gap-6">

          <Avatar
            src="/images/setto.png"
            alt="Setto"
          />

          {/* Tech Stack Logos */}
          <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center">
            <TechLogo src="/tech/react.png" alt="React" />
            <TechLogo src="/tech/next.png" alt="Next.js" />
            <TechLogo src="/tech/fastapi.png" alt="FastAPI" />
            <TechLogo src="/tech/supabase.png" alt="Supabase" />
            <TechLogo src="/tech/python.png" alt="Python" />
            <TechLogo
              src="/tech/javascript.png"
              alt="JavaScript"
              shape="square"
            />
          </div>

        </div>

      </div>

    </Section>
  )
}