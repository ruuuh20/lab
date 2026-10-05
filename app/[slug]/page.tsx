import { notFound } from 'next/navigation'
import { entries } from '@/entries'
import Notes from '@/components/Notes'

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = entries.find((e) => e.slug === slug)
  if (!entry) return {}
  return { title: `${entry.number} — ${entry.title}` }
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = entries.find((e) => e.slug === slug)
  if (!entry) notFound()

  const { Stage } = entry

  return (
    <div className="pb-16">
      <div className={entry.stageFullBleed ? 'w-full' : 'max-w-3xl mx-auto px-6 pt-8'}>
        <Stage />
      </div>
      <div className="max-w-3xl mx-auto px-6">
        <Notes notes={entry.notes} />
      </div>
    </div>
  )
}
