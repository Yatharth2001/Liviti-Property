import Link from 'next/link'
import { Container } from './primitives'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-900 font-semibold">
          <div className="h-8 w-8 rounded-md bg-brand-600 text-white grid place-items-center">IB</div>
          <span>Idea Board</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <Link href="/app" className="hover:text-gray-900">Open App</Link>
          <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-900">Terms</Link>
        </nav>
      </Container>
      <Container>
        <p className="mt-6 text-center text-xs text-gray-500">Next.js • TypeScript • Tailwind</p>
      </Container>
    </footer>
  )
}



