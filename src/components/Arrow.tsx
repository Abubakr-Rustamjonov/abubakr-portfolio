type ArrowProps = {
  className?: string
}

export function Arrow({ className = '' }: ArrowProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 19 19 5" />
      <path d="M9 5h10v10" />
    </svg>
  )
}
