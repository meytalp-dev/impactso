import { brandColors } from '../../../lib/brandTokens'
import type { ImpactIconProps } from './types'

export function WorkflowFingerprintIcon({
  size = 28,
  color = brandColors.fuchsia,
  secondaryColor = brandColors.turquoise,
  strokeWidth = 2,
  className,
  title,
}: ImpactIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title}>
      {title ? <title>{title}</title> : null}
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="3"/>
        <rect x="17" y="3" width="8" height="8" rx="3"/>
        <rect x="10" y="17" width="8" height="8" rx="3"/>
        <path d="M11 7h6"/>
        <path d="M14 11v6"/>
        <path d="M7 11c1.3 3.5 3.6 5.4 7 6"/>
        <path d="M21 11c-1.3 3.5-3.6 5.4-7 6"/>
      </g>
      <circle cx="14" cy="14" r="1.5" fill={secondaryColor}/>
      <circle cx="7" cy="7" r="1.1" fill={color}/>
      <circle cx="21" cy="7" r="1.1" fill={color}/>
      <circle cx="14" cy="21" r="1.1" fill={color}/>
    </svg>
  )
}
