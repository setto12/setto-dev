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
            href="/projects/simple-website"
            image="/projects/simple-website.png"
            title="Simple Website for Petshop"
            description="A simple website that showcases the products of a petshop, gives information about the shop, and answers frequently asked questions"
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