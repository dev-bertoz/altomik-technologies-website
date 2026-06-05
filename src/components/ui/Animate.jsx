import { useInView } from '@/hooks/useInView'
import clsx from 'clsx'

const variants = {
  'fade-up':    { hidden: 'opacity-0 translate-y-8',  visible: 'opacity-100 translate-y-0' },
  'fade-in':    { hidden: 'opacity-0',                visible: 'opacity-100' },
  'fade-left':  { hidden: 'opacity-0 translate-x-8',  visible: 'opacity-100 translate-x-0' },
  'fade-right': { hidden: 'opacity-0 -translate-x-8', visible: 'opacity-100 translate-x-0' },
  'scale-up':   { hidden: 'opacity-0 scale-95',       visible: 'opacity-100 scale-100' },
}

export default function Animate({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  as: Tag = 'div',
}) {
  const { ref, inView } = useInView()
  const v = variants[variant] || variants['fade-up']

  return (
    <Tag
      ref={ref}
      className={clsx(
        'transition-all',
        inView ? v.visible : v.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
    </Tag>
  )
}
