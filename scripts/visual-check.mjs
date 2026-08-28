import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: true,
})

const results = []

for (const config of [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 375, height: 812 },
]) {
  const page = await browser.newPage({ viewport: { width: config.width, height: config.height }, deviceScaleFactor: 1 })
  const errors = []
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('http://127.0.0.1:5174', { waitUntil: 'networkidle' })
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < pageHeight; y += Math.max(420, config.height * 0.72)) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y)
    await page.waitForTimeout(90)
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${config.name}-full-check.png`, fullPage: true })
  const metrics = await page.evaluate(() => ({
    viewport: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    imageFailures: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
  }))
  results.push({ name: config.name, ...metrics, consoleErrors: errors })
  await page.close()
}

const interactionPage = await browser.newPage({ viewport: { width: 375, height: 812 } })
await interactionPage.goto('http://127.0.0.1:5174', { waitUntil: 'networkidle' })

await interactionPage.getByLabel('Deschide meniul').click()
const mobileMenuOpened = await interactionPage.getByLabel('Închide meniul').isVisible()
await interactionPage.getByRole('navigation', { name: 'Navigație mobilă' }).getByText('Tarife').click()
await interactionPage.waitForTimeout(450)
const mobileMenuClosed = await interactionPage.getByLabel('Deschide meniul').isVisible()

await interactionPage.getByRole('tab', { name: 'Pedodonție & Ortodonție' }).click()
const tabSwitched = await interactionPage.getByText('Aparat fix metalic (sup+inf)').isVisible()

const contactForm = interactionPage.locator('#contact form')
await contactForm.scrollIntoViewIfNeeded()
await interactionPage.waitForTimeout(500)
await contactForm.locator('input[required]').nth(0).fill('Codex Test')
await contactForm.locator('input[required]').nth(1).fill('0712345678')
await contactForm.getByRole('button', { name: 'Trimite cererea' }).click()
const formSubmitted = await interactionPage.getByText('Mulțumim, Codex!').isVisible()

results.push({ name: 'interactions', mobileMenuOpened, mobileMenuClosed, tabSwitched, formSubmitted })
await interactionPage.close()

await browser.close()
console.log(JSON.stringify(results, null, 2))
