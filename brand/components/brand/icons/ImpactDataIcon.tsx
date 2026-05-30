import { brandColors } from '../../../lib/brandTokens'
import type { ImpactIconProps } from './types'

export function ImpactDataIcon({
  size = 28,
  color = brandColors.turquoise,
  secondaryColor = brandColors.fuchsia,
  strokeWidth = 2,
  className,
  title,
}: ImpactIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} aria-label={title}>
      {title ? <title>{title}</title> : null}
      <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4C18.8 4 22.5 8.4 22.5 14C22.5 20.1 18.8 24 14 24"/>
        <path d="M14 7C17.6 7 20.3 10.1 20.3 14C20.3 18.4 17.6 21 14 21"/>
        <path d="M14 10C16.3 10 18 11.8 18 14C18 16.6 16.3 18 14 18"/>
        <path d="M7 6.5C9.1 4.5 11.4 4 14 4"/>
        <path d="M5.5 10.7C7 7 10 5.5 14 7"/>
        <path d="M5.2 14.3C5 10.4 8.5 7.2 14 10"/>
        <path d="M5.8 18.4C4.8 15.2 6.2 11 14 13.2"/>
      </g>
      <circle cx="14" cy="14" r="1.8" fill={secondaryColor}/>
      <circle cx="8" cy="6.4" r="1.2" fill={color}/>
      <circle cx="22.4" cy="14" r="1.2" fill={color}/>
      <circle cx="14" cy="24" r="1.2" fill={color}/>
    </svg>
  )
}
