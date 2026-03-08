import Section from "../ui/Section"
import Avatar from "../ui/Avatar"

export default function AboutSection() {
  return (
    <Section bg="dark" id="about">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Avatar */}
        <div className="flex justify-center md:justify-start">
          <Avatar
            src="/images/setto.png"
            alt="Setto"
            size={320}
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">

          <h3 className="text-[24px] font-semibold text-[#FFFFFF]">
            About Me
          </h3>

          <h2 className="text-[48px] font-bold leading-tight">
            Developer Who Loves to Build
          </h2>

          <p className="text-[24px] leading-relaxed text-white-700">
            I'm a software developer focused on building scalable web
            applications and reliable backend systems. My work often
            revolves around modern technologies such as React, Next.js,
            and FastAPI, allowing me to create full-stack solutions that
            are both performant and maintainable.
            <br /><br />
            I enjoy solving complex problems and turning ideas into
            production-ready applications. Whether it's designing APIs,
            optimizing data pipelines, or building intuitive user
            interfaces, I strive to create systems that are robust,
            efficient, and easy to extend.
            <br /><br />
            Currently, I am deeply interested in backend architecture,
            AI-driven applications, and building platforms that can scale
            to support thousands of users and real-world workloads.
          </p>

        </div>

      </div>

    </Section>
  )
}