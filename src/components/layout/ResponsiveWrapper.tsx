import { cn } from '@/lib/utils'

interface ResponsiveWrapperProps {
  children: React.ReactNode
  className?: string
  fullHeight?: boolean
}

export default function ResponsiveWrapper({
  children,
  className,
  fullHeight = false,
}: ResponsiveWrapperProps) {
  return (
    <div className={cn('w-full px-4 sm:px-6 lg:px-8', fullHeight && 'min-h-screen', className)}>
      <div className="">{children}</div>
    </div>
  )
}
