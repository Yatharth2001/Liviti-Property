import FeatureCard from './FeatureCard'
import { Container, Section, SectionHeading } from './primitives'

const items = [
  {
    title: 'Lightning-fast idea capture',
    description: 'Add ideas in seconds with a 280-character limit.',
  },
  {
    title: 'Community upvotes',
    description: 'Bubble up the best ideas with a simple counter.',
  },
  {
    title: 'Live feel',
    description: 'Instant feedback via re-fetching or periodic polling.',
  },
  {
    title: 'Built for teams',
    description: 'Clean UI, responsive, easy to share.',
  },
]

export default function Features() {
  return (
    <Section id="features">
      <Container>
        <SectionHeading title="Features" subtitle="Everything you need to brainstorm and align" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <FeatureCard key={i} title={f.title} description={f.description} />
          ))}
        </div>
      </Container>
    </Section>
  )
}



