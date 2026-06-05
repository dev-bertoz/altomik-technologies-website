export default function Logo({ className = 'w-9 h-9' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Altomik Technologies logo mark"
    >
      <polygon
        points="18,3 33,30 3,30"
        fill="#F59E0B"
        fillOpacity="0.15"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="22"
        x2="26"
        y2="22"
        stroke="#F59E0B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="3" r="2.5" fill="#F59E0B" />
    </svg>
  )
}
