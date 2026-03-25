# for Rithvik — Complete Project Handoff
*All 14 levels built. Status: Complete, with minor ongoing fixes.*
*Last updated: After L13 photo booth fix + gesture detection rewrite*

---

## PROJECT OVERVIEW

A multi-level interactive love confession website built by **Akanksha** (the maker) for **Rithvik** (the recipient). Akanksha wants to ask Rithvik to be her boyfriend. The site is a journey of 14 levels — puzzles, games, memories, and emotional moments — ending with the question "Will you be my boyfriend?" and a photo booth.

**Deployed at:** GitHub Pages (free)
**Local folder:** `D:\hehe\`
**Dev command:** `npm run dev`
**Local URL:** `http://localhost:5173/rithvik-website/`
**Build command:** `npm run build`
**Stack:** React + Vite + React Router + Tailwind (base only) + Three.js + MediaPipe + Canvas API

---

## THE TWO PEOPLE

### Akanksha (the maker)
- Photographer
- Birthday: **23 June 2006**
- Loves the colour **yellow** — Rithvik associates yellow with her
- Overthinks a lot; Rithvik is very patient and reassuring
- Has a past which Rithvik accepted
- Very dirty-minded; makes everything dirty
- Signed the letter "Yours forever" with a star

### Rithvik (the recipient)
- Dancer and actor
- Birthday: **19 February 2006**
- Marvel fan, anime lover, Telugu film enthusiast
- Played character **Chinnayya** in play **Kundeti Kommu** (performed **20 Feb 2026**)
- Acted in zombie short film **Undying** (screened **01 Jan 2026**)
- Soft romantic — likes roses, polaroids, rom-coms
- Very forgetful, always tired/exhausted/irritated
- Very innocent, doesn't get dirty jokes quickly
- He calls Akanksha: **baby, bangaaram, love, darling**
- He calls her "Reddy baddie"
- Both are **Reddys** (same caste) — born **2006**
- He initially liked Akanksha's best friend; invited her on a "not-date" but the friend couldn't make it so it was just them two
- They confessed feelings on **Valentine's Day 14 Feb 2026**

---

## THEIR STORY — CONFIRMED DATES (verified by Akanksha)

| Date | Event |
|------|-------|
| **31-10-2025** | First spoke — TEDx SNIST, Arts Club Room, Halloween. He was working on his first short film. Thought he was her year. Bonded over books. He called them "nerd best friends." |
| **02-11-2025** | Cinematica Expo — cute pics, vlogs, "nerd group," triple riding, first shared vehicle. He posted an embarrassing picture of her on his page. |
| **03-11-2025** | First Instagram text — he tagged her in that picture. She's still mad. |
| **08-11-2025** | Write Club event — tried to write a story together for first time. First photo of just the two of them. |
| **22-11-2025** | **Sreeotsav** D2 — first dance together, hand in hand, people cheered. First side-hug. Song went from Rooba Rooba to Kala Chashma. He pretended to know Baby by Justin Bieber (he knew nothing). |
| **December 2025** | Exams + her depression. He was a consistent light, called after exams. |
| **24-12-2025** | She filmed him for the first time. |
| **Jan 2026** | He became part of her everyday. Said they wouldn't be a good match (LOL). |
| **01-01-2026** | **Undying** (zombie short film) screened — first time she saw him on screen. Incredibly proud. |
| **21-01-2026** | Not-date — **Nari Nari Naduma Murari** movie (he had invited her best friend who couldn't make it). He put his head on her shoulder, she ruffled his hair. She watched him, he watched the movie. |
| **February 2026** | Everything changed. Flirting became real. "You, my darling, are my spring." |
| **11-02-2026** | She ghosted him (scared of attachment). |
| **12-02-2026** | First fight. First intentional "I love you." |
| **13-02-2026 Eve** | Long bus conversation — discussed catching feelings "eventually." |
| **13-02-2026 Night** | She told him about her past. He stayed anyway. |
| **14-02-2026 Eve** | Valentine's Day — got on his bike alone, he properly confessed. She cried on the back seat. |
| **14-02-2026 Night** | She told him everything. He went "fuck it, I love her." Said he'd wait. Cut the call exactly 1 minute before the date changed. |
| **20-02-2026** | **Kundeti Kommu** performance — Chinnayya on stage. She was in the audience with her camera. |
| **26-02-2026** | **First actual date** — **Couple Friendly** movie (sad ending, he hates sad endings). |

---

## THE LETTER

Akanksha wrote an 8-page handwritten letter on **yellow paper** for Rithvik's birthday (19 Feb). She uploaded photos of all 8 pages. Key quotes:

- **Opens:** "To, my favourite plot twist."
- **Closes (P.S.):** "And for the record, I fell first. There you go, that was your proof."
- **Signed:** "Yours forever ★"
- Contains the full story of their relationship, all dates above
- The letter content is referenced in L13 (Finale personal message) — NOT used verbatim as a level (originally planned for an envelope level, but that was dropped)

---

## THE PLAYLIST — AR Soundtrack (22 songs, CORRECT ORDER)

| # | Song | Artist |
|---|------|--------|
| 1 | Someone To You | BANNERS |
| 2 | I Like Me Better | Lauv |
| 3 | Daylight | Taylor Swift |
| 4 | What If (I Told You I Like You) | Johnny Orlando & Mackenzie Ziegler |
| 5 | You Belong With Me (Taylor's Version) | Taylor Swift |
| 6 | Make You Mine | PUBLIC |
| 7 | double take | dhruv |
| 8 | Nenu Nenuga | S. P. Charan |
| 9 | Lavender Haze | Taylor Swift |
| 10 | Haareya | Sachin-Jigar, Arijit Singh, Priya Saraiya |
| 11 | So High School | Taylor Swift |
| 12 | Dhooram | Nikhita Gandhi |
| 13 | They Don't Know About Us | One Direction |
| 14 | Call It What You Want | Taylor Swift |
| 15 | Afeemi | Sachin-Jigar, Sanah Moidutty |
| 16 | Mari Mari | Gowthami |
| 17 | Hoyna Hoyna (from Gang Leader) | Anirudh Ravichander, Inno Genga |
| 18 | Teenage Dream | Stephen Dawes |
| 19 | Mere Liye Tum Kaafi Ho | Ayushmann Khurrana, Tanishk-Vayu |
| 20 | All Of The Girls You Loved Before | Taylor Swift |
| 21 | Baby | Justin Bieber, Ludacris |
| 22 | You & I | One Direction |

Special note: Baby (#21) was playing at Sreeotsav D2 when they danced — he pretended to know the lyrics.

---

## TECH STACK

| Tool | Purpose |
|------|---------|
| React + Vite | Framework, fast builds |
| React Router v6 | Each level = its own URL route |
| Tailwind CSS | **NOT used for utility classes in JSX** — base reset only |
| Three.js | L1 starfield (3D warp speed particles) |
| MediaPipe Hands (CDN) | L2 gesture detection (V sign) |
| Web Speech API (built-in) | L3 voice recognition |
| dnd-kit | L9 song sorter drag-and-drop |
| Canvas API | L7 arcade game, L8 jigsaw, L13 photo booth |
| MediaStream API | L2 camera, L13 photo booth |
| GitHub Pages | Free hosting with HTTPS |
| localStorage | Progress saving |

### CRITICAL STYLING RULE
**Never use Tailwind utility classes in JSX.** They don't reliably compile on Windows + Vite. Use **only inline styles** and the custom CSS classes defined in `src/index.css`. All animation keyframes, layout helpers, and component classes are defined there.

### CSS custom classes available (from index.css):
- `.level-screen` — full-height flex container
- `.badge` — yellow pill tag
- `.btn-primary`, `.btn-outline` — button styles
- `.anim-fadeUp`, `.anim-fadeIn`, `.anim-scaleIn`, `.anim-shake` — animations
- `.anim-float`, `.anim-pulseGlow`, `.anim-glowPulse` — ambient animations
- Keyframes: `fadeUp`, `fadeIn`, `scaleIn`, `shake`, `pulseGlow`, `starTwinkle`, `glowPulse`, `float`, `spinSlow`, `petalFall`

### CSS Variables (always use these, never hardcode):
```
--yellow: #F5C518
--rose: #E8527A
--teal: #2DBDB1
--ink: #1A1209
--cream: #FDFAF2
--font-display: 'Playfair Display', serif
--font-hand: 'Caveat', cursive
--font-body: 'DM Sans', sans-serif
```

---

## DIRECTORY STRUCTURE

```
D:\hehe\
├── index.html              ← title: "for Rithvik 💛"
├── package.json            ← name: "for-rithvik"
├── vite.config.js          ← base: '/rithvik-website/'
├── tailwind.config.js      ← minimal, no custom classes
├── postcss.config.js
│
├── public/
│   ├── photos/
│   │   ├── memory1.jpg     ← L4: 31 Oct TEDx SNIST
│   │   ├── memory2.jpg     ← L4: 02 Nov Cinematica
│   │   ├── memory3.jpg     ← L4: 08 Nov Write Club
│   │   ├── memory4.jpg     ← L4: 22 Nov Sreeotsav D2
│   │   ├── memory5.jpg     ← L4: 24 Dec filming him
│   │   ├── memory6.jpg     ← L4: 01 Jan Undying
│   │   ├── memory7.jpg     ← L4: 21 Jan Nari Nari
│   │   ├── memory8.jpg     ← L4: 14 Feb Valentine's
│   │   ├── memory9.jpg     ← L4: 20 Feb Kundeti Kommu
│   │   ├── memory10.jpg    ← L4: 26 Feb Couple Friendly
│   │   ├── card1–8.jpg     ← L6 memory game pairs
│   │   └── jigsaw.jpg      ← L8 jigsaw puzzle photo
│   └── videos/             ← optional for L4 polaroid cards
│
└── src/
    ├── main.jsx
    ├── App.jsx             ← FINAL — never edit
    ├── index.css           ← ALL global styles here
    ├── context/
    │   └── GameContext.jsx ← progress tracking (localStorage)
    ├── components/
    │   ├── Cursor.jsx      ← yellow particle trail cursor
    │   └── ProgressBar.jsx ← yellow bar at bottom
    └── levels/
        ├── L0_Lock.jsx
        ├── L1_Welcome.jsx
        ├── L2_Gesture.jsx
        ├── L3_Voice.jsx
        ├── L4_Memories.jsx
        ├── L5_Compat.jsx
        ├── L6_MemGame.jsx
        ├── L7_Arcade.jsx
        ├── L8_Jigsaw.jsx
        ├── L9_Soundtrack.jsx
        ├── L10_WordSearch.jsx
        ├── L11_Meter.jsx
        ├── L12_Ask.jsx
        └── L13_Finale.jsx
```

---

## ALL 14 LEVELS — COMPLETE SPEC

### L0 — Passcode Lock
- PIN: `31102025` (8 digits — 31 Oct 2025)
- Hint: "The day we first spoke 💛"
- Wrong: shake + "Wrong. Try harder, bangaaram."
- Correct: yellow particle burst → /welcome

### L1 — Welcome (Three.js Starfield)
- Heading: "To, my favourite plot twist. 💛"
- Subtitle: "This is everything. Take your time →"
- Live counter: "X days since we first spoke" (from 31-10-2025)
- Button: "Let's go ✦"
- Warp speed Three.js stars, mouse parallax
- Footer: "made with love, by Akanksha ✦"
- Skip button (dev only) present

### L2 — Gesture Unlock (MediaPipe Hands)
- **Gesture: V sign / peace sign ✌️ (CHANGED from heart — heart was unreliable)**
- One hand, index + middle fingers extended up, ring + pinky curled
- Hold 2 seconds → unlock
- Instructions shown on screen: "Index + middle fingers up, others curled, hold for 2 seconds"
- Fail: "Almost… try again, Chinnayya 😅"
- **Success message: "life with you feels like victory and peace 💛"** (displayed in Playfair italic)
- Live yellow hand skeleton on camera feed
- MediaPipe loaded from CDN (cdn.jsdelivr.net) — requires HTTPS (works on GitHub Pages)
- Skip button (dev only) present — **REMOVE BEFORE SHARING WITH RITHVIK**

### L3 — Voice Unlock (Web Speech API)
- Prompt: "Say what you know I love hearing from you the most 💛"
- Target: "I love you, Akanksha" (lang: en-IN)
- Only "I love you" → "Hmm, don't I have a name? 🙄"
- Wrong → escalating roasts per attempt
- Visual: frequency waveform bars + pulsing mic icon
- Chrome/Edge only (Web Speech API limitation)
- Skip button (dev only) — **REMOVE BEFORE SHARING**

### L4 — Memory Lane (Polaroid Timeline)
- 10 cards, vertical timeline, alternating left/right
- Hover to flip — front: colour placeholder → back: date + caption
- **To add photos:** set `media: '/photos/memory1.jpg'` in L4_Memories.jsx
- `mediaType: 'image'` or `'video'`
- Videos play muted and autoplay
- Memories in order (all confirmed dates — use CORRECT SPELLINGS):
  1. 31-10-2025 Halloween / TEDx SNIST
  2. 02-11-2025 Cinematica Expo
  3. 08-11-2025 Write Club
  4. 22-11-2025 **Sreeotsav** D2 ← correct spelling
  5. 24-12-2025 Christmas Eve / filming him
  6. 01-01-2026 Undying screening
  7. 21-01-2026 Nari Nari Naduma Murari (not-date)
  8. 14-02-2026 Valentine's Day bike confession
  9. 20-02-2026 Kundeti Kommu performance
  10. 26-02-2026 Couple Friendly (first actual date)

### L5 — Compatibility Calculator
- Terminal aesthetic — warm yellow/gold (NOT teal/green — was changed)
- 8 animated analysis steps with progress bars
- Steps include: Chinnayya charisma score, forgetfulness index [very high], innocence levels [dangerously high], patience with overthinkers
- Counter spins to 100% then result spins in with 3-note ding (Web Audio API)
- Result: "100% Compatible ✦ Made for each other ✦ A match made in heaven"
- Multicolour donut pie chart: yellow, rose, teal, pink, dark gold, deep rose, forest green

### L6 — Memory Card Flip Game
- 4×4 grid, 16 cards, 8 pairs
- **Photos go in public/photos/ as card1.jpg through card8.jpg**
- Set `photo: '/photos/card1.jpg'` in L6_MemGame.jsx (currently null = placeholders)
- Wrong pair: rotating roast messages
- Win: "You remembered all of them 💛 just like I remember everything about you."
- All pairs matched → continue button

### L7 — Catch the Falling Hearts (Arcade)
- Canvas game, no timer — catch **14 hearts** to win
- Controls: ← → arrow keys OR mouse movement
- Bad items: 💤 😤 😭 🥱
- Basket: "Rithvik 💛"
- Progress bar fills, spawns speed up over time
- Win: "You caught all 14 of my feelings 💛" + play again / continue

### L8 — Jigsaw Puzzle
- 20 pieces (4×5 grid)
- **Photo: public/photos/jigsaw.jpg**
- Pieces start shuffled below board, drag to board, snap on drop
- Completion caption: "Every piece in the right place — just like you. You walked into my life on a Halloween night and somehow fit perfectly into every single part of it. This is us, put together. 💛"

### L9 — AR Soundtrack Song Sorter
- All 22 songs in correct order (listed above)
- Shuffled at start — drag to rearrange
- **Live counter updates on every drag:** "X / 22 in the right position" (no need to hit Check)
- Click ▼ on any card to expand Spotify embed preview
- Must get ALL 22 correct to proceed
- Win message: "Every song in this playlist was playing in my head when I thought of you. Someone To You was the beginning of a feeling I couldn't name. You & I is where I want us to end up. Everything in between? That's us. That's this. That's everything. 💛"

### L10 — Word Search
- Grid: 16×15 (smaller, simpler than original)
- Horizontal mostly, a few vertical, **no diagonals**
- Words: AKANKSHA, RITHVIK, VALENTINES, ROSES, STAGE, CAMERA, LETTERS, AUTORIDES, BANGARAM, LOVE, KUNDETI KOMMU, NERD, REDDY, BABY, SREEOTSAV
- **Removed:** Akku, Rithu, Yellow, Chinnayya, Haareya, Sreeotsav (was misspelled), Plottwist, Dancer, Photographer
- Secret message: **"I FELL FIRST"** (hidden in leftover letters, revealed when all words found)
- Reveal caption: "— and now you have proof too. 💛"
- **Hint button:** click any time, highlights first letter of an unfound word, tracks count
- **KUNDETI KOMMU stored as KUNDETIKOMMU** in the grid (no space) but displayed correctly

### L11 — Love Meter
- Circular speedometer gauge (canvas-drawn, 180° sweep)
- Gradient fill: teal → rose → yellow as it charges
- Needle slows at milestones, sparks burst from tip
- Milestones:
  - 25%: "More than the number of times you've forgotten something (and that number is very, very high)"
  - 50%: "More than all 22 songs on the AR Soundtrack combined — yes, even Lavender Haze"
  - 75%: "More than every I love you we've said to each other — and we say it a lot"
  - 100%: "More than I can ever put into words — and I tried, 8 pages, remember?"
  - ∞: "Beyond expression. Beyond measurement. Just… you. Always you."
- Needle bursts past 100%, number flips to ∞

### L12 — The Big Ask
- Question: "Will you be my boyfriend?"
- Hint text under question evolves with each No attempt
- No button: runs away on hover, text changes each time (20 rotating excuses)
- Excuses include: "Chinnayya doesn't do relationships", "Still processing that sad ending 😭", "The zombie film drained me 🧟", "My innocence won't allow it 😇", "I said what I said on 14th Feb"
- Yes: full canvas confetti explosion → "HE SAID YES 💛" in golden glow + float
- "One last thing ✦" → /finale

### L13 — Finale (Photo Booth)
- "I love you." golden glowing title
- Personal message (left panel):
  ```
  And just like that — after everything — here we are.

  You walked into my life on the last day of October and somehow became
  my first thought every morning and my last one every night.

  I fell first. And I'd fall first a thousand times over.

  Thank you for happening. Here's to more firsts and forevers.

  I love you, Rithvik. Always and forever. 💛

  — Akanksha
  ```
- Photo booth (right panel): polaroid frame (white card, square photo, caption strip at bottom)
- **He clicks the photo himself** — "📸 Click" button (not auto-capture)
- Button disabled until `videoReady` = true (prevents blank capture)
- Capture: crops video to square, draws mirrored frame onto canvas, bakes in caption
- Caption on polaroid: "Rithvik — Taken by Akanksha 💛" + date
- Download saves full polaroid PNG (photo + caption area)
- **NO "Reddy × Reddy" text** (removed)
- Footer: "made with love, by Akanksha ✦"
- **KNOWN FIX APPLIED:** videoReady state prevents blank capture; `onloadedmetadata` triggers before enabling button

---

## SKIP BUTTONS (DEV ONLY)

All levels have a faded "skip (dev only)" button at the bottom.
**REMOVE THESE before sharing the URL with Rithvik.**

Files to edit: L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12
Search for `skip (dev only)` in each file and delete the button.

---

## APP.JSX — FINAL (never edit)

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GameProvider } from './context/GameContext'
import Cursor from './components/Cursor'
import ProgressBar from './components/ProgressBar'

import L0_Lock        from './levels/L0_Lock'
import L1_Welcome     from './levels/L1_Welcome'
// ... all 14 imports
```

All 14 levels are plain direct imports. No lazy loading, no Suspense. App.jsx does not need to be edited again.

---

## PHOTOS STILL NEEDED FROM AKANKSHA

| File | For | Notes |
|------|-----|-------|
| memory1–10.jpg | L4 polaroid cards | See order above |
| card1–8.jpg | L6 memory game | 8 photos, each used as a matching pair |
| jigsaw.jpg | L8 puzzle | Any meaningful photo |

All go in `public/photos/`. Once dropped in, update the `media:` field in L4_Memories.jsx and `photo:` field in L6_MemGame.jsx.

---

## DESIGN DECISIONS (LOCKED)

- **Desktop-first** (not mobile-optimised — Akanksha confirmed he'll open on laptop)
- **Yellow (#F5C518) is the hero colour** — it's Akanksha's colour, Rithvik associates it with her
- **No Tailwind utility classes in JSX** — all inline styles
- **Progress bar** at bottom of screen (yellow, 3px)
- **Custom cursor** — yellow particle trail
- **Stars background** on every level (subtle, twinkling)
- **Fonts:** Playfair Display (headings/display), Caveat (handwritten), DM Sans (body)
- **Spelling:** Sreeotsav (not Sreeotasv — corrected in L4 and L13)

---

## BUGS FIXED (don't reintroduce)

1. **Tailwind not compiling on Windows** → removed all utility classes from JSX, use inline styles only
2. **PIN dots stacking vertically** → fixed with `display: flex; flexDirection: row` inline (not Tailwind)
3. **App.jsx lazy imports crashing** → replaced with plain direct imports
4. **Compat pie chart all-green** → colours changed to match site palette (yellow, rose, teal, etc.)
5. **Sreeotsav spelling** → corrected in L4_Memories.jsx and L13_Finale.jsx
6. **Heart gesture detection unreliable** → gesture changed to V sign ✌️ (simpler, more reliable)
7. **Photo booth capturing blank** → added `videoReady` state, enabled button only after `onloadedmetadata`
8. **Polaroid text showing twice** → caption strip in HTML is for visual display; canvas bakes its own caption; after capture, img shows full polaroid (both photo + caption area) so HTML strip is below the img (hidden by polaroid frame structure)
9. **L9 playlist requiring manual check** → live counter added, updates on every drag

---

## HOW TO CONTINUE IN A NEW CHAT

Paste this document at the top and say:
**"I'm Akanksha. We're building a website called 'for Rithvik' — all 14 levels are complete. I need help with [specific thing]. Here's the full context:"**

Then paste this document. The AI will have everything needed to continue without any re-explanation.

---

## REMAINING TO-DO

- [ ] Add real photos (memory1–10.jpg, card1–8.jpg, jigsaw.jpg) to `public/photos/`
- [ ] Remove all "skip (dev only)" buttons before sharing with Rithvik
- [ ] Deploy to GitHub Pages: `npm run build` → push to GitHub → enable Pages in Settings
- [ ] Test on actual laptop with camera and mic enabled (MediaPipe + Web Speech need HTTPS)
- [ ] Optional Phase 5: background music with Howler.js (never built — can add if wanted)
