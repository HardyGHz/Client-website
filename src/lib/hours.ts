// Program (Google Maps, 2026-07): L–V 10:00–21:00 · Sâ–Du 14:30–17:00
export type DayRow = { label: string; hours: string; days: number[] }

export const SCHEDULE: DayRow[] = [
  { label: 'Luni – Vineri', hours: '10:00 – 21:00', days: [1, 2, 3, 4, 5] },
  { label: 'Sâmbătă – Duminică', hours: '14:30 – 17:00', days: [0, 6] },
]

export function isOpenNow(now: Date = new Date()): boolean {
  const day = now.getDay()
  const mins = now.getHours() * 60 + now.getMinutes()
  if (day >= 1 && day <= 5) return mins >= 10 * 60 && mins < 21 * 60
  return mins >= 14 * 60 + 30 && mins < 17 * 60
}
