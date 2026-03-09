import Section from "../ui/Section"
import ServiceCard from "../ui/ServiceCard"

export default function ServicesSection() {
  return (
    <Section bg="custom" id="services">

      <div className="mb-16">
        <h3 className="text-[24px] font-semibold text-[#023859]">
          Services
        </h3>

        <h2 className="text-[48px] font-bold">
          What I Can Build For You
        </h2>
      </div>

        <div className="grid md:grid-cols-3 gap-8">

            <ServiceCard
                slug="simple-websites"
                icon="monitor"
                title="Simple Websites"
                description="Professional landing pages and business websites built with modern design, fast performance, and mobile responsiveness."
                price={10000}
            />

            <ServiceCard
                slug="fullstack-development"
                icon="layers"
                title="Full-Stack Web Applications"
                description="Custom web applications with frontend, backend, authentication, and database systems built using Next.js and FastAPI."
                price={30000}
            />

            <ServiceCard
                slug="backend-development"
                icon="server"
                title="Backend Development"
                description="Robust backend systems, APIs, and database architectures designed for reliability and scalability."
                price={20000}
            />

        </div>

    </Section>
  )
}