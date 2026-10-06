'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface EntryMeta {
  slug: string
  number: string
  title: string
  date: string
}

function SidebarList({ entries }: { entries: EntryMeta[] }) {
  const pathname = usePathname()
  return (
    <ul>
      {entries.map((entry) => {
        const active = pathname === `/${entry.slug}`
        return (
          <li key={entry.slug}>
            <Link
              href={`/${entry.slug}`}
              className={`flex flex-col px-4 py-3 transition-colors ${
                active ? 'bg-border' : 'hover:bg-border'
              }`}
            >
              <span className="text-xs font-mono text-muted">{entry.number}</span>
              <span className="text-sm leading-snug mt-0.5">{entry.title}</span>
              <span className="text-xs mt-1 text-muted">{entry.date}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function Sidebar({ entries }: { entries: EntryMeta[] }) {
  return (
    <>
      {/* Desktop: sticky left column */}
      <aside className="hidden md:flex flex-col w-52 shrink-0 overflow-y-auto border-r border-border">
        <SidebarList entries={entries} />
        <p className="px-4 py-4 mt-auto text-xs text-muted leading-relaxed">
          Setup and scaffolding by AI; the core of each experiment is written by me.
        </p>
      </aside>

      {/* Mobile: collapsible top bar */}
      <div className="md:hidden border-b border-border">
        <details>
          <summary className="flex items-center justify-between px-4 py-3 cursor-pointer select-none list-none text-sm font-medium">
            <span>Lab</span>
            <span className="text-xs text-muted">entries ↓</span>
          </summary>
          <div className="border-t border-border">
            <SidebarList entries={entries} />
          </div>
        </details>
      </div>
    </>
  )
}
