type Props = {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow transition">
      {icon && <div className="mb-4 text-brand-600">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}



