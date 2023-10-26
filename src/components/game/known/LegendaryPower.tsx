import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'

interface LegendaryPowerProps {
  power: string
}

export default function Legend({ power }: LegendaryPowerProps) {
  return (
    <p className=''>
      <Image
        src={Bullet}
        alt='Legendary power bullet'
        className='inline-block w-4 h-4 mb-1 mr-1'
      />
      <span className='text-legendary'>{power}</span>
    </p>
  )
}