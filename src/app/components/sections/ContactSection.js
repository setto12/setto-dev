import Section from "../ui/Section"
import ContactPill from "../ui/ContactPill"

export default function ContactSection() {
  return (
    <Section bg="custom" id="contact">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-6">

          <h3 className="text-[24px] font-semibold text-gray-300">
            Contact Me
          </h3>

          <h2 className="text-[48px] font-bold">
            Let's Talk!
          </h2>

          <p className="text-[24px] leading-relaxed text-gray-200">
            If you're looking for a developer who can build reliable
            systems and scalable web applications, I'd love to hear
            about your project.
            <br /><br />
            Whether it's a startup idea, a SaaS platform, or improving
            an existing system, I enjoy collaborating with people who
            want to turn ideas into real, production-ready software.
            <br /><br />
            Feel free to reach out through any of the channels here —
            I'm always open to discussing new opportunities and
            interesting challenges.
          </p>

        </div>

        {/* Right Contact Options */}
        <div className="flex flex-col gap-6">

          <ContactPill
            icon="/contact/gmail.png"
            label="Email"
            value="dayao.seth@gmail.com"
            // href="mailto:dayao.seth@gmail.com"
          />

          <ContactPill
            icon="/contact/whatsapp.png"
            label="WhatsApp"
            value="Setto: +63 9685417153"
            // href="https://whatsapp.com/setto"
          />

          <ContactPill
            icon="/contact/linkedin.png"
            label="LinkedIn"
            value="linkedin.com/in/setto"
            href="https://www.linkedin.com/in/seth-dayao-35511928b"
          />

        </div>

      </div>

    </Section>
  )
}