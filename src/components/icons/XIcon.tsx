interface XIconProps {
  className?: string
}

export function XIcon({ className }: XIconProps) {
  return (
    <span className={className} style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>
      𝕏
    </span>
  )
}
