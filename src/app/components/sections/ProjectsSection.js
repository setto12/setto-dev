import Section from "../ui/Section"
import ProjectCard from "../ui/ProjectCard"

export default function ProjectsSection() {
  return (
    <Section bg="custom">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Left Large Project */}
        <ProjectCard
          href="/projects/security-platform"
          image="/projects/security-platform.png"
          title="AI Security Monitoring Platform"
          height="520px"
        />

        {/* Right Column */}
        <div className="flex flex-col gap-6">

          <ProjectCard
            href="/projects/coffee-saas"
            image="/projects/coffee-saas.png"
            title="Coffee Shop SaaS Platform"
            height="250px"
          />

          <ProjectCard
            href="/projects/code-learning"
            image="/projects/code-learning.png"
            title="Interactive Coding Platform"
            height="250px"
          />

        </div>

      </div>

    </Section>
  )
}