'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full px-6 py-4 font-semibold">
      <nav className="max-w-7xl mx-auto flex justify-between">
        <Link href="/" className="text-xl">diable</Link>
        <div className="flex gap-4">
          <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>Diablo III</Link>
          <Link href="/albums" className={`${pathname === '/items' ? 'active' : ''}`}>Items</Link>
        </div>
      </nav>
    </header>
  )
}