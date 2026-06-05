import clsx from 'clsx'

export default function Badge({ children, variant = 'gold', className = '' }) {
  const variants = {
    gold: 'bg-gold-500/10 border border-gold-500/30 text-gold-500',
    navy: 'bg-navy text-white border border-navy/20',
    light: 'bg-gray-100 text-gray-600 border border-gray-200',
  }
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 font-heading font-semibold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
