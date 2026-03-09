import Section from "../ui/Section"
import ProjectCard from "../ui/ProjectCard"

export default function ProjectsSection() {
  return (
    <Section bg="custom" id="projects">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Large Left Project */}
        <ProjectCard
          href="/projects/cleaning-services-booking-2.png"
          image="/projects/cleaning-services-booking-2.png"
          title="Cleaning Services Booking App"
          description="Booking app for a Cleaning Company"
          height="auto"
          tech={[
            { src: "/tech/next.png", alt: "Next.js" },
            { src: "/tech/supabase.png", alt: "Supabase" },
          ]}
        />

        {/* Right Column */}
        <div className="flex flex-col gap-6">

          <ProjectCard
            href="/projects/coffee-saas"
            image="/projects/coffee-saas.png"
            title="Coffee Shop SaaS"
            description="Multi-tenant SaaS platform for coffee shops with loyalty systems, ordering queues, and customizable storefronts."
            height="250px"
            tech={[
              { src: "/tech/next.png", alt: "Next.js" },
              { src: "/tech/supabase.png", alt: "Supabase" }
            ]}
          />

          <ProjectCard
            href="/projects/code-learning"
            image="/projects/code-learning.png"
            title="Interactive Coding Platform"
            description="Online learning platform that executes student code and provides automated feedback similar to CodeChum."
            height="250px"
            tech={[
              { src: "/tech/react.png", alt: "React" },
              { src: "/tech/python.png", alt: "Python" }
            ]}
          />

        </div>

      </div>

    </Section>
  )
}