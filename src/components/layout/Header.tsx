'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='w-full bg-black bg-opacity-20 px-6 py-4 font-semibold'>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <Link href='/' className='text-xl after:'>Diable III</Link>
        {/* <nav className='flex gap-4'>
          <Link href='/' className={`${pathname === '/' ? 'active' : ''}`}>Diablo III</Link>
        </nav> */}
      </div>
    </header>
  )
}