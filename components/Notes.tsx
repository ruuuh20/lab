import type { EntryNotes } from '@/entries'

const sections: { key: keyof EntryNotes; label: string }[] = [
  { key: 'tried', label: 'What I tried' },
  { key: 'tricky', label: 'What was tricky' },
  { key: 'next', label: "What I'd do next" },
  { key: 'ai', label: 'How I used AI' },
]

export default function Notes({ notes }: { notes: EntryNotes }) {
  return (
    <div className="mt-12 pt-8 space-y-8 border-t border-border">
      {sections.map(({ key, label }) => (
        <div key={key}>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-2 text-muted">
            {label}
          </h2>
          <p className="text-sm leading-relaxed">
            {notes[key] || <span className="text-muted italic">—</span>}
          </p>
        </div>
      ))}
    </div>
  )
}
