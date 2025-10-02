import { Button, Container } from './primitives'

export default function CtaBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 sm:p-10 text-white shadow">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Try Idea Board →</h3>
              <p className="mt-1 text-white/90">Capture ideas fast and align on what matters.</p>
            </div>
            <Button href="/app" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-50">
              Open App
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}



