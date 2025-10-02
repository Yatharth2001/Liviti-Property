import { Container, SectionHeading } from './primitives'

const faqs = [
  {
    q: 'Does data persist?',
    a: 'This landing page is static; in the app, ideas persist via your chosen backend.',
  },
  {
    q: 'How do upvotes work?',
    a: 'Each idea has a simple counter. Users can upvote and most-voted ideas surface.',
  },
  {
    q: 'What creates the live feel?',
    a: 'Periodic re-fetching or polling patterns provide instant feedback without heavy websockets.',
  },
  {
    q: 'Is it mobile-friendly?',
    a: 'Yes. The UI is responsive with large touch targets and accessible controls.',
  },
  {
    q: 'Is there an API?',
    a: 'A placeholder API link is provided at /docs. Replace with your docs when ready.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <Container>
        <SectionHeading title="Frequently asked questions" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">{item.q}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}



