'use client'

import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@/public/github-icon.svg'
import KofiIcon from '@/public/kofi-icon.svg'

export default function Header() {
  return (
    <header className='w-full bg-black bg-opacity-20 p-3 font-semibold'>
      <div className='max-w-5xl mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl after:'>Diable III</Link>
        <nav className='flex gap-2'>
          <Link href='https://ko-fi.com/malthesers' rel='noopener noreferrer' target='_blank'>
            <Image
              src={KofiIcon} alt='GitHub icon'
              className='h-8 w-auto duration-200 hover:opacity-50'
            />
          </Link>
          <Link href='https://github.com/malthesers/diable-3' rel='noopener noreferrer' target='_blank'>
            <Image
              src={GitHubIcon} alt='GitHub icon'
              className='h-8 w-auto duration-200 hover:opacity-50'
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}