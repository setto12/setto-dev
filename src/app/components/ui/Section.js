export default function Section({ children, bg = "white" }) {
  const bgVariants = {
    white: "bg-white text-black",
    dark: "bg-[#001C40] text-white",
    gray: "bg-gray-50 text-black",
  }

  return (
    <section className={`${bgVariants[bg]} w-full py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}