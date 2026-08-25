# WOW-hero brief — dentist-floresti-demo (Crisdental, Florești)

> **FRISSÍTVE 2026-08-25: beépítve, de NEM a heróba.** A kódot a Claude Code session írja
> (Hardy döntése), nem Antigravity. A repó ága: `staging` → `main`. Lásd a lenti
> „Beépítés — mi történt valójában" szakaszt, az felülírja a fenti tervet.

Ezt a briefet a Claude Code (D:\Munka session) írta és frissíti.

## Miért ez a kísérlet

A [PDF forrás](../AI_3D_Animated_Websites_Workflow.pdf) alapján + Higgsfield modell-kutatás
(MCP/CLI, DoP kameramozgás-modellek) alapján felmerült, hogy ezen a site-on is kipróbáljuk
a kép→videó-loop hero technikát, amit a Muhely `workflows/06-wow-hero.md`-je már
standardizál Kie.ai-jal más site-okon.

**FONTOS DÖNTÉSI PONT:** a `Muhely/TEMPLATES.md` szerint a dental-master heróját tudatosan
NEM canvas/effekt alapúra építettük, mert "orvosi kontextusban effekt-szagú lenne". Ez a
videó-hero kísérlet szándékosan felülírja ezt a korábbi döntést erre a próbára. Mielőtt
visszakerülne a dental-master sablonba, érdemes A/B-ben nézni a jelenlegi CSS-drift verzió
ellen, ne automatikusan váltsa le.

## Jelenlegi állapot (Hero.tsx)

Tisztán kód-alapú: 3 db blurred radial-gradient blob (`drift-a/b/c` CSS keyframe, 17-24s
ciklus), nincs kép, nincs videó. Paletta: meleg krém `#fbf6ee` alap, mély tinta-türkiz
`#0f3a40`, marine-teal accent `#1f6f73`, meleg agyag `#c97a45` (utóbbi az ár-elemeké).
Fontok: Spectral (display) + Public Sans (body). A hero szövege ár-teaser csíkkal zárul
(4 kártya: Consultație/Detartraj/Obturație/Implant).

## 1. lépés — Alapkép: FRISSÍTVE, van valódi fotó

Hardy hozott egy valódi fotót a klinika egyik kezelőjéről (szék, szekrények, ablak).
**Ez jobb, mint egy AI-generált kép** (hitelesebb, a páciens a tényleges szobát látja),
úgyhogy a GPT image agent lépés KIMARADHAT, a 2. lépés egyenesen ebből a fotóból indul.
(Ha mégis kell AI-generált variáns is, pl. más szögből, akkor marad az eredeti terv:
16:9, textmentes, a palettához igazított, NEM klinikai/ijesztő hangulat.)

## 2. lépés — Mozgás / seamless loop

Két lehetőség, amelyik éppen elérhető Antigravity-ben:

- **Higgsfield CLI** — `Higgsfield DoP Lite` (720p, 3 credit/3mp), precíz, visszafogott
  kameramozgás-kontroll. (`npm i -g @higgsfield/cli`, `higgsfield auth login`,
  `npx skills add higgsfield-ai/skills` — lásd a fő session korábbi jegyzeteit erről.)
- **Kie.ai** (már bevált, `KIE_API_KEY` élesben) — Kling/Seedance endpoint,
  ~0,18 $ / 10mp loop 720p-n. Ez a `site-recreator` skill resources/-ában már
  szkriptezve van.

**Mozgástípus: slow zoom VAGY ambient drift/finom parallax, NE teljes rotate/orbit** — a
niche visszafogottságot kíván, a túl "élénk" kameramozgás pont az ellentéte lenne a
"megbízható, nyugodt fogorvos" üzenetnek. Ráadásul egy valódi fotón (nem 3D-modellen) egy
nagyobb szögű körbeforgás a szekrények/reluxa egyenes vonalain torzítani fog, ezek a
modellek csak parallax-trükköt tudnak, nem valódi 3D-t. 8-10 másodperces klip, kötelező
seamless loop (a váltás ne legyen észrevehető).

**Kész prompt a kezelő-fotóhoz** (küldhető bármelyik kép→videó agentnek):

```
Subtle cinematic parallax: the camera drifts in a slow, gentle arc around
the dental chair, no more than 10-15 degrees total, then settles, as if
slowly leaning to reveal depth. Keep all straight lines (cabinets, window
blinds, door frame) stable and undistorted, no warping, no morphing. Soft,
calm, steady motion, no camera shake, no zoom in/out, no people or objects
entering the frame. Preserve the exact lighting, colors and layout of the
room. Photorealistic, clean, professional medical interior. Seamless 8-10
second loop, motion loops back smoothly with no visible cut.
```

720p elég, loop mód bekapcsolva. Higgsfield DoP Lite jobban illik erre a finom,
kontrollált mozgásra, mint egy generikus Kling-hívás.

## 3. lépés — Elkészült variánsok (2026-08-25)

Két klip már legenerálva, `D:\Munka\NotesAgents\Munka puffer\`-ben:

| Fájl | Felbontás | Hossz | Méret |
|---|---|---|---|
| `Subtle_cinematic 1.mp4` | 1024×576 | 9,0 mp (pontosan a cél) | ~1,93 MB |
| `Subtle_cinematic_2.mp4` | 1920×1080 (élesebb) | 5,9 mp (rövidebb a célnál) | ~2,11 MB |

Mindkettő "oda-vissza" mozgás (start≈end frame), tehát mindkettő szépen loopolható.
Torzítást kerestem framénként a bal szélen (a szekrény/cső vonalánál) — Hardy élőben,
mozgásban megnézte és nem tűnik torzításnak neki, valószínűleg csak a valós fali cső válik
láthatóvá, ahogy a kamera arra pásztáz. **Ez nem blokkoló, nyitott kérdés.**

Döntés Antigravity-nek/Hardynak: 1-es a pontos hosszal de kisebb felfontással, 2-es élesebb
de rövidebb (a public/-ba kerülő végleges klipnél a hossz igazítható vágással/loop-ismétléssel
ffmpeg-gel, ha a rövidebb variáns mellett döntenétek).

**ffmpeg most feltéve** (winget, `Gyan.FFmpeg` 9.0): a poszter-frame kivágás
(`ffmpeg -i input.mp4 -vframes 1 poster.jpg`) és a tömörítés (`-crf 28 -movflags +faststart`)
ezután helyben elvégezhető Antigravity-ben is, új terminálban a `ffmpeg`/`ffprobe` parancs
már fut (ehhez a Claude Code session-nek még újra kellett indulnia, PATH-frissítés miatt).

## Beépítés — ezek Hardy kemény szabályai (`workflows/06-wow-hero.md`), nem alkuk

- `<video autoplay muted loop playsinline poster={posterJpg}>`
- Cél < 3 MB: `ffmpeg -crf 28 -movflags +faststart`
- `poster` = a videó első frame-je JPG-ben (azonnali first paint, LCP védve)
- `prefers-reduced-motion`: statikus poster megy videó helyett, kötelező
- Sötét gradient-overlay a szöveg kontrasztjához (a mostani blob-rendszer helyett vagy
  mögé, hogy a H1 és az ár-kártyák olvashatók maradjanak világos háttéren is)
- Fájl a `public/`-ba, a hero maga NEM lazy (fold felett van)
- Lighthouse mobil: 90+ performance kötelező a videó mellett is

## Beépítés — mi történt valójában (2026-08-25)

**A videó nem a heróba került, hanem a „De ce Crisdental" szekcióba**, a korábbi Unsplash
stock fotó helyére. Indoklás:

1. **Ez világos design** (krém `#fbf6ee` alap, sötét szöveg). Egy videó-hero sötét overlayt
   kíván a H1 olvashatóságához, vagyis nem beillesztené a videót, hanem lecserélné a design
   logikáját, és közben lesötétítené pont azt a szobát, amit meg akarunk mutatni.
2. **A hero munkája az árlista-pozicionálás** (headline + 4 ár-kártya), ez a site egyetlen
   valódi versenyelőnye. Mozgó háttér ezzel versenyez a figyelemért.
3. A régi helyén **egy idegen klinika stock fotója állt egy bizalomról szóló szekcióban**.
   Ez volt a tényleges gyenge pont, és a valódi felvétel pont ezt gyógyítja.
4. Fold alatt van → nincs LCP-hatás, nem kell overlay, nincs kontrasztharc.

Ezzel a TEMPLATES.md korábbi döntése (dental-master hero NEM effekt-alapú) **érvényben marad**,
nem kell A/B, mert nem a heróhoz nyúltunk.

**Választott klip:** `Subtle_cinematic 1.mp4` (pontos 9,0 mp, 1024×576). Fold alatt a
felbontás kevésbé számít, a hézagmentes loop viszont igen.

**Feldolgozás** (ffmpeg 9.0, a winget-es útvonalról hívva, mert nincs PATH-ban ebben a shellben):
- audiósáv eldobva (`-an`) — néma videónál csak súly volt
- `-crf 28 -preset slow -movflags +faststart` → **445 kB** (a 3 MB-os limit alatt bőven)
- poszter: `-vframes 1 -q:v 4` → **50 kB**
- mindkettő a `public/`-ban: `cabinet.mp4`, `cabinet-poster.jpg`

**Komponens:** `src/components/RoomVideo.tsx`
- IntersectionObserver: **csak akkor játszik, amikor a képen van**, egyébként pause
- finom scroll-parallax (framer-motion `useScroll`, ±7%), a videó 114% magas, hogy a
  parallax ne mutasson széleket
- `prefers-reduced-motion` → csak a poszter `<img>`, videó nincs is a DOM-ban
- `muted loop playsInline preload="metadata"`, autoplay-elutasításnál a poszter marad
- meleg agyag `mix-blend-soft-light` réteg 25%-on, mert a szoba hidegkék-szürke, a paletta meleg

**Amit szándékosan NEM csináltunk: frame-scrub („Apple-féle") görgetés.** A klip egy finom,
15 fokos ív; scrubolva billegésnek látszik, nem hatásnak. iOS-en akadozik, és elveszi a
görgetés irányítását a látogatótól, ami pont az ellentéte az oldal nyugodt üzenetének.

## Ellenőrzés

- [x] `npm run build` zöld
- [x] `cabinet.mp4` (445 kB) és `cabinet-poster.jpg` (50 kB) a `dist/`-ben, 200-zal szolgálódnak
- [x] nincs több Unsplash hivatkozás a `src/`-ben
- [ ] Mobil nézet (375px) élőben — Hardy nézze meg
- [ ] `prefers-reduced-motion` teszt élőben
- [ ] Lighthouse mobil 90+
