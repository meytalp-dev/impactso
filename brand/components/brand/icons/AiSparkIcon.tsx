import { brandColors } from '../../../lib/brandTokens'
import type { ImpactIconProps } from './types'

export function AiSparkIcon({
  size = 28,
  color = brandColors.navy,
  secondaryColor = brandColors.fuchsia,
  strokeWidth = 2,
  className,
  title,
}: ImpactIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title}>
      {title ? <title>{title}</title> : null}
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4L15.6 10.4L22 12L15.6 13.6L14 20L12.4 13.6L6 12L12.4 10.4Z"/>
        <path d="M21.5 19L22.2 21.5L24.5 22.2L22.2 22.9L21.5 25.5L20.8 22.9L18.5 22.2L20.8 21.5Z"/>
        <path d="M6 18c2.6-1.8 5.2-2.4 8-1.8"/>
      </g>
      <circle cx="7" cy="21" r="1.5" fill={secondaryColor}/>
      <circle cx="22" cy="12" r="1.1" fill={color}/>
      <circle cx="14" cy="4" r="1.1" fill={color}/>
    </svg>
  )
}
