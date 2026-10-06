import type { ComponentType } from 'react'
import Stage001 from './001/stage'

export interface EntryNotes {
  tried: string
  tricky: string
  next: string
  ai: string
}

export interface Entry {
  slug: string
  number: string
  title: string
  date: string
  stageFullBleed: boolean
  Stage: ComponentType
  notes: EntryNotes
}

// To add entry 002:
//   1. Create entries/002/ with a stage.tsx inside
//   2. import Stage002 from './002/stage'
//   3. Add one object to the array below
export const entries: Entry[] = [
  {
    slug: '001',
    number: '001',
    title: 'Korean & Japanese line breaking',
    date: '2026-10-04',
    stageFullBleed: false,
    Stage: Stage001,
    notes: {
      tried: 'Default line breaking versus word-break: keep-all for Korean and word-break: auto-phrase for Japanese. Drag the slider to watch words split on the left and stay whole on the right.',
      tricky: 'auto-phrase only works when the text is marked lang="ja", and only in Chromium browsers. In Safari it falls back to default — the two Japanese boxes look identical.',
      next: 'Let visitors type their own text.',
      ai: '',
    },
  },
]
