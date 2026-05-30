/**
 * ImpactSOLogo — הלוגו המלא של IMPACT SO
 *
 * Props:
 *   fingerprintColor  — צבע טביעת האצבע (ברירת מחדל: navy)
 *   heartColor        — צבע הלב הפנימי (ברירת מחדל: fuchsia)
 *   impactColor       — צבע המילה IMPACT (ברירת מחדל: navy)
 *   soColor           — צבע SO (ברירת מחדל: fuchsia)
 *   taglineColor      — צבע הסלוגן (ברירת מחדל: navy)
 *   showTagline       — האם להציג את הסלוגן (ברירת מחדל: true)
 *   variant           — 'horizontal' (עם סלוגן) | 'compact' (ללא סלוגן, טביעה קטנה יותר)
 *   className         — class חיצוני לגודל ומיקום
 *
 * כללים קבועים:
 *   - ברירת המחדל תמיד נאמנה למותג
 *   - וריאציות צבע הן מפורשות ונשלטות דרך props
 *   - SVG שקוף בלבד, ללא PNG וללא רקע
 */

import type { CSSProperties } from 'react'
import { brandLogoDefaults } from '../../lib/brandTokens'
import { FingerprintMark } from './FingerprintMark'

type LogoVariant = 'horizontal' | 'compact'

type ImpactSOLogoProps = {
  className?: string
  fingerprintColor?: string
  heartColor?: string
  impactColor?: string
  soColor?: string
  taglineColor?: string
  showTagline?: boolean
  variant?: LogoVariant
  style?: CSSProperties
}

export function ImpactSOLogo({
  className,
  fingerprintColor = brandLogoDefaults.fingerprint,
  heartColor = brandLogoDefaults.heart,
  impactColor = brandLogoDefaults.impact,
  soColor = brandLogoDefaults.so,
  taglineColor = brandLogoDefaults.tagline,
  showTagline = true,
  variant = 'horizontal',
  style,
}: ImpactSOLogoProps) {
  const isCompact = variant === 'compact'

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: isCompact ? '10px' : '14px',
        direction: 'ltr', // לוגו תמיד LTR
        flexShrink: 0,
        background: 'transparent',
        ...style,
      }}
    >
      {/* טביעת האצבע — SVG קווי, צבע מ-prop */}
      <FingerprintMark
        color={fingerprintColor}
        heartColor={heartColor}
        strokeWidth={isCompact ? 10 : 9.5}
        style={{
          width: isCompact ? '40px' : '52px',
          height: 'auto',
          flexShrink: 0,
        }}
      />

      {/* טקסט הלוגו */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
            lineHeight: 1,
          }}
        >
          {/* IMPACT */}
          <span
            style={{
              fontFamily: 'Heebo, Rubik, Arial, sans-serif',
              fontWeight: 900,
              fontSize: isCompact ? '22px' : '28px',
              color: impactColor,
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            IMPACT
          </span>

          {/* SO */}
          <span
            style={{
              fontFamily: 'Heebo, Rubik, Arial, sans-serif',
              fontWeight: 900,
              fontSize: isCompact ? '22px' : '28px',
              color: soColor,
              letterSpacing: '-0.5px',
              lineHeight: 1,
            }}
          >
            SO
          </span>
        </div>

        {/* סלוגן */}
        {showTagline && !isCompact && (
          <span
            style={{
              fontFamily: 'Heebo, Rubik, Arial, sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              color: taglineColor,
              letterSpacing: '1.5px',
              opacity: 0.65,
              lineHeight: 1,
              direction: 'rtl',
              unicodeBidi: 'embed',
            }}
          >
            טכנולוגיה יוצרת אימפקט
          </span>
        )}
      </div>
    </div>
  )
}
