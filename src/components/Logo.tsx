import Image from 'next/image'
import logo from '@/images/logo.png'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src={logo}
      width={40}
      height={40}
      alt="Spatial Calendar Logo"
      className="pointer-events-none select-none"
    />
  )
}
