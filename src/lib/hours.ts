// L-V 10:00-13:00, 14:00-19:00 · Sâmbătă și duminică închis
export function isOpenNow(date = new Date()): boolean {
  const day = date.getDay() // 0 = duminică, 6 = sâmbătă
  if (day === 0 || day === 6) return false
  const minutes = date.getHours() * 60 + date.getMinutes()
  const morning = minutes >= 10 * 60 && minutes < 13 * 60
  const afternoon = minutes >= 14 * 60 && minutes < 19 * 60
  return morning || afternoon
}
