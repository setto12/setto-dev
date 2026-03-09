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
            href="/projects/coffee.png"
            image="/projects/coffee.png"
            title="Simple Website - Coffee Shop"
            description="Simple Coffee Shop Website"
            height="250px"
            tech={[
              { src: "/tech/react.png", alt: "react.js" },
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