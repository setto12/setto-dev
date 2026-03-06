import Section from "../ui/Section"
import Button from "../ui/Button"
import TechLogo from "../ui/TechLogo"
import Image from "next/image"

export default function LandingSection() {
  return (
    <Section bg="dark">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8">

          <div className="space-y-4">

            <h2 className="text-[40px] font-medium">
              I am Setto
            </h2>

            <h1 className="text-[48px] font-bold leading-tight">
              I Build Scalable Web Applications
            </h1>

            <p className="text-[24px] leading-relaxed text-gray-200">
              Specializing in modern web technologies
              including React, Next.js, and FastAPI
              <br /><br />
              Focused on building reliable backend systems
              and production-ready applications
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Button variant="filled">Let's Start a Project</Button>
            <Button variant="outline">View my work</Button>
          </div>

          {/* Tech Stack Logos */}
          <div className="flex gap-4 pt-4">
            <TechLogo src="/tech/react.png" alt="React" />
            <TechLogo src="/tech/next.png" alt="Next.js" />
            <TechLogo src="/tech/fastapi.png" alt="FastAPI" />
            <TechLogo src="/tech/python.png" alt="Python" />
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/setto.png"
            alt="Setto"
            width={420}
            height={420}
            priority
          />
        </div>

      </div>

    </Section>
  )
}