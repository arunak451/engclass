# Pesu Quest 🎮

A 45-day English speaking game for Tamil speakers, built to help you crack job interviews. Every lesson is explained in simple **Tanglish** (Tamil written in English letters), the way you would explain it to a child.

**Play it:** https://engclass-psi.vercel.app

*"Pesu" means "speak" in Tamil.*

## What's inside

- **45 daily missions** across 5 worlds, from basics to a full mock interview
- **225 vocabulary words**, each with a Tanglish meaning and an example sentence
- **135 verbs** with V1 / V2 / V3 forms, a meaning and example sentences
- **45 grammar lessons**, each with a story-style explanation, a formula, examples and a teacher tip
- **Speaking practice** with a microphone (Chrome) or typed answers, checked against key phrases
- **Game features:** XP, levels, daily streaks, 13 badges, and a Verb Flash mini-game
- Read-aloud 🔊 on every word and example (browser text-to-speech)

## A day's mission (about 30 minutes)

| Step | Time | What you do |
|---|---|---|
| 1. Words | 5 min | Learn 5 new words and listen to each one |
| 2. Verbs | 5 min | Learn 3 verbs in V1 → V2 → V3, then a quick drill |
| 3. Grammar | 8 min | Read the day's lesson in Tanglish |
| 4. Speak | 7 min | Answer a speaking task out loud |
| 5. Boss Battle | 5 min | 6-question quiz. Get 4 right to unlock the next day |

## The 5 worlds

| World | Days | Topics |
|---|---|---|
| 🌱 Basics | 1–9 | Self intro, am/is/are, a/an/the, pronouns, plurals, simple present, do/does |
| 🏠 Daily Talk | 10–18 | Present continuous, past tense, future, WH questions, in/on/at, can/could, comparisons |
| 🗣️ Confidence | 19–27 | Present perfect, since/for, should/must, opinions, conjunctions, phone and polite English |
| 💼 Professional | 28–36 | Passive voice, conditionals, reported speech, emails, common mistakes, phrasal verbs, meetings |
| 🏆 Interview Boss | 37–45 | Tell me about yourself, strengths and weaknesses, why hire you, STAR method, salary, group discussion, mock interview |

## Run it on your computer

No install or build step. It's plain HTML, CSS and JavaScript.

1. Download or clone this repo
2. Open `index.html` in Chrome

To use the microphone, open the hosted link or serve the folder over `http://localhost` (for example `npx serve .`). Some browsers block the mic on `file://` pages.

## Deploy

The live site runs on Vercel:

```
npx vercel --prod
```

Any static host works, such as Netlify or GitHub Pages.

## Project files

| File | What it holds |
|---|---|
| `index.html` | Page layout and all styles |
| `app.js` | Game logic: map, missions, quiz, speaking check, badges, saving progress |
| `verbs.js` | The 135 verbs. Day N uses verbs `(N-1)*3` to `(N-1)*3+2` |
| `days1.js` | Days 1–15 |
| `days2.js` | Days 16–30 |
| `days3.js` | Days 31–45 |

### Editing a lesson

Each day in `days*.js` looks like this:

```js
{
  d: 1, t: "Hello, I am...", tg: "Tagline",
  w: [["word", "Tanglish meaning", "Example sentence."]],          // 5 words
  g: { h: "Lesson title", story: ["paragraph", "..."], f: "Formula",
       ex: [["English", "Tanglish"]], tip: "Teacher tip" },
  q: [["Question?", ["A", "B", "C", "D"], 1, "Why B is right"]],   // 2 quiz questions
  s: { p: "Speaking task", help: "Hint", sample: "Sample answer", keys: ["key phrase"] }
}
```

The Boss Battle adds 2 word questions and 2 verb questions to the day's 2 grammar questions automatically.

## Progress

Your progress is saved in your browser (`localStorage`). It stays on that device and that browser. If you clear your browser data, the progress is lost.
