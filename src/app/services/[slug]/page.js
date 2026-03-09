export default function ServicePage({ params }) {
  const { slug } = params

  return (
    <div className="max-w-4xl mx-auto py-24 px-6">

      <h1 className="text-4xl font-bold mb-6">
        {slug.replace("-", " ")}
      </h1>

      <p className="text-lg text-gray-600">
        Detailed explanation of the service will go here.
      </p>

    </div>
  )
}