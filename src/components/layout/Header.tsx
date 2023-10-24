'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@/public/github-icon.svg'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className='w-full bg-black bg-opacity-20 p-3 font-semibold'>
      <div className='max-w-5xl mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl after:'>Diable III</Link>
        <nav className='flex gap-4'>
          {/* <Link href='/' className={`${pathname === '/' ? 'active' : ''}`}>Diablo III</Link> */}
          <Link href='https://github.com/malthesers/diable-3'>
            <Image
              src={GitHubIcon}
              alt='GitHub icon'
              className='w-8 duration-200 hover:opacity-50'
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}