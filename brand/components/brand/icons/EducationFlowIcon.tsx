import { brandColors } from '../../../lib/brandTokens'
import type { ImpactIconProps } from './types'

export function EducationFlowIcon({
  size = 28,
  color = brandColors.yellow,
  secondaryColor = brandColors.navy,
  strokeWidth = 2,
  className,
  title,
}: ImpactIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title}>
      {title ? <title>{title}</title> : null}
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21L14 8L24 21"/>
        <path d="M7.5 21L14 11.5L20.5 21"/>
        <path d="M11 21L14 15L17 21"/>
        <path d="M4 23.5h20"/>
        <path d="M8 18c4.2-1.6 7.8-1.6 12 0"/>
      </g>
      <circle cx="14" cy="8" r="1.6" fill={secondaryColor}/>
      <circle cx="4" cy="21" r="1.1" fill={color}/>
      <circle cx="24" cy="21" r="1.1" fill={color}/>
    </svg>
  )
}
