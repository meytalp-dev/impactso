# IMPACT SO Brand System

זו תיקיית מקור האמת למיתוג IMPACT SO.

## מה חייב להישאר קבוע

- הלוגו הרשמי הוא `public/brand/impact-so-logo-official-transparent.png`. הוא שקוף ונוצר מהלוגו שהמשתמשת אישרה.
- אין לשחזר את הלוגו מטקסט ונתיבי SVG כשצריך להציג את הלוגו המלא.
- ברירת המחדל: טביעת אצבע נייבי, לב פוקסיה, `IMPACT` נייבי, `SO` פוקסיה.
- מותר לשנות צבעים רק דרך props או classes מסודרות.
- לא עורכים ידנית SVG בתוך עמוד כשיש קומפוננטה קיימת.
- לא משתמשים ב-`overflow:hidden` סביב לוגו.

## רכיבים

- `ImpactSOLogo` — לוגו מלא, שקוף, עם תמיכה בוריאציות צבע.
- `FingerprintMark` — טביעת האצבע המקורית עם לב פנימי.
- `ImpactLoader` — מסך טעינה: טביעה מצוירת ואז הלוגו המלא מופיע.
- `components/brand/icons` — אייקונים בקווי טביעת אצבע, עם נקודות וקצוות מעוגלים.

## צבעים מותרים

- Navy: `#061E4F`
- Fuchsia: `#F00678`
- Turquoise: `#12C7C7`
- Green: `#7BCB52`
- Yellow: `#F4B41B`
- Orange: `#FF7A1A`
- Slate: `#64748B`
- Soft white: `#F8FAFC`
- White: `#FFFFFF`

## דוגמה לשינוי צבע טביעה בלבד

```tsx
<ImpactSOLogo fingerprintColor={brandColors.turquoise} />
```

## דוגמה לגרסה לבנה על רקע כהה

```tsx
<ImpactSOLogo
  fingerprintColor={brandColors.white}
  impactColor={brandColors.white}
  taglineColor={brandColors.white}
/>
```

`SO` נשאר פוקסיה כברירת מחדל גם בגרסה כהה.

## בדיקת סיום לכל שינוי

חפש בקוד:

```text
.png
<img עם src שאינו הלוגו הרשמי השקוף
mix-blend-mode
checkerboard
#6A00FF
overflow:hidden
```

אם אחד מהם קשור ללוגו, טביעה, אייקון או Loader — לתקן לפני שממשיכים.
