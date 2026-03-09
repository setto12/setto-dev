import Section from "../ui/Section"
import ProjectCard from "../ui/ProjectCard"

export default function ProjectsSection() {
  return (
    <Section bg="custom" id="projects">

      <div className="grid md:grid-cols-2 gap-6 items-start">

        {/* Large Left Project */}
        <ProjectCard
          href="/projects/cleaning-services.png"
          image="/projects/cleaning-services.png"
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
            height="auto"
            tech={[
              { src: "/tech/react.png", alt: "react.js" },
            ]}
          />

          <ProjectCard
            href="/projects/simple-website.png"
            image="/projects/simple-website.png"
            title="Simple Website for Petshop"
            description="A simple website that showcases the products of a petshop, gives information about the shop, and answers frequently asked questions"
            height="auto"
            tech={[
              { src: "/tech/next.png", alt: "Next" },
            ]}
          />

        </div>

      </div>

    </Section>
  )
}