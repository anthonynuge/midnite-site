import Link from 'next/link'

interface IconLinkProps {
  href: string
  icon: React.ElementType
  label?: string // optional accessible label
  className?: string
  newTab?: boolean
  size?: number
}

export const IconLink = ({
  href,
  icon: Icon,
  label,
  className = '',
  newTab = false,
  size = 30,
}: IconLinkProps) => {
  return (
    <Link
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={`inline-flex items-center gap-1 transition hover:opacity-80 ${className}`}
    >
      <Icon size={size} />
      {label && <span className="sr-only">{label}</span>}
    </Link>
  )
}
