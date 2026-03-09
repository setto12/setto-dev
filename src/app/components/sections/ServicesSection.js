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
          slug="fullstack-web-app"
          icon="layers"
          title="Full-Stack Web Applications"
          description="Custom scalable applications built using modern frameworks like Next.js, React, and FastAPI."
          price={60000}
        />

        <ServiceCard
          slug="saas-development"
          icon="cloud"
          title="SaaS Platform Development"
          description="Multi-tenant SaaS systems with authentication, billing, dashboards, and scalable architecture."
          price={150000}
        />

        <ServiceCard
          slug="backend-api"
          icon="server"
          title="Backend & API Systems"
          description="Reliable backend architecture, database design, and production-ready API systems."
          price={40000}
        />

      </div>

    </Section>
  )
}