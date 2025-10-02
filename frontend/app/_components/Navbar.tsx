"use client"
import Link from "next/link"
import { useState } from "react"
import { Container, Button } from "./primitives"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu after navigating
  const handleNavigate = () => setOpen(false)

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
          <div className="h-8 w-8 rounded-md bg-brand-600 text-white grid place-items-center">IB</div>
          <span>Idea Board</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Use "/#section" so Next.js treats this as an in-page hash on the root route */}
          <Link href="/#features" className="text-sm text-gray-700 hover:text-gray-900 focus-ring">Features</Link>
          <Link href="/#how" className="text-sm text-gray-700 hover:text-gray-900 focus-ring">How it works</Link>
          <Link href="/#faq" className="text-sm text-gray-700 hover:text-gray-900 focus-ring">FAQ</Link>
          <Button href="/app" className="ml-2">Open App</Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus-ring rounded-md p-2 text-gray-700"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <Container className="py-3">
            <div className="flex flex-col gap-2">
              {/* Close the drawer on click so the scroll can happen */}
              <Link href="/#features" onClick={handleNavigate} className="py-2 text-gray-700 hover:text-gray-900">Features</Link>
              <Link href="/#how" onClick={handleNavigate} className="py-2 text-gray-700 hover:text-gray-900">How it works</Link>
              <Link href="/#faq" onClick={handleNavigate} className="py-2 text-gray-700 hover:text-gray-900">FAQ</Link>
              <Button href="/app" className="mt-1" onClick={handleNavigate}>Open App</Button>
            </div>
          </Container>
        </div>
      )}
    </div>
  )
}

