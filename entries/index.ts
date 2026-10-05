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
      tried: '',
      tricky: '',
      next: '',
      ai: '',
    },
  },
]
