import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { entries } from '@/entries'
import Sidebar from '@/components/Sidebar'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Front-end experiments',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const metas = entries.map(({ slug, number, title, date }) => ({
    slug,
    number,
    title,
    date,
  }))

  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="md:flex md:h-screen md:overflow-hidden">
        <Sidebar entries={metas} />
        <main className="flex-1 md:overflow-y-auto">{children}</main>
      </body>
    </html>
  )
}
