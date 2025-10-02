import { SectionHeading, Container } from './primitives'

const steps = [
  {
    title: 'Write your idea',
    desc: 'Short form input with 280 characters to keep ideas concise.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    title: 'Upvote the best',
    desc: 'Ideas rise to the top with simple vote counts.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5 5 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
      </svg>
    ),
  },
  {
    title: 'Collaborate & decide',
    desc: 'Prioritize next steps together and move ideas forward.',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-5-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4v-2a4 4 0 0 1 4-4h5" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <Container>
        <SectionHeading title="How it works" subtitle="Three simple steps to turn ideas into action" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-700 grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}



