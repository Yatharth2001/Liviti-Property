import { type ReactNode } from 'react'
import Link from 'next/link'

type ButtonProps = {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function Button({ href, onClick, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm sm:text-base font-semibold transition shadow-sm focus-ring'
  const styles =
    variant === 'primary'
      ? 'bg-brand-600 text-white hover:bg-brand-700'
      : variant === 'secondary'
      ? 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      : 'text-gray-700 hover:text-gray-900'

  if (href) {
    return (
      <Link className={`${base} ${styles} ${className}`} href={href}>
        {children}
      </Link>
    )
  }
  return (
    <button className={`${base} ${styles} ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>{children}</section>
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-base sm:text-lg text-gray-600">{subtitle}</p>}
    </div>
  )
}



