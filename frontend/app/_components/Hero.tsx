import Image from 'next/image'
import { Button, Container } from './primitives'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Container className="sm:pt-16 lg:pt-48 py-20">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Capture ideas. Upvote what matters.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Submit bite-sized ideas (max 280 chars), upvote the best, and collaborate in a live-feel board.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button href="/app">Open the App</Button>
              <Button href="/docs" variant="ghost" className="!px-0">View API</Button>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 shadow-sm p-4 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { text: 'Dark mode support for dashboard', votes: 24 },
                  { text: 'Inline comments on ideas', votes: 18 },
                  { text: 'Export ideas to CSV', votes: 12 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-gray-200 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-50 text-brand-700 grid place-items-center">▲</div>
                      <span className="text-gray-800">{item.text}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.votes}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}



