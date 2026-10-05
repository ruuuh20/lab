import { redirect } from 'next/navigation'
import { entries } from '@/entries'

export default function Home() {
  redirect(`/${entries[0].slug}`)
}
