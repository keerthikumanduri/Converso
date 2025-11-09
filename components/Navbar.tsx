"use client"

import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const onSignInPage = pathname?.startsWith('/sign-in')

  if (onSignInPage) return null

  return (
    <>
      <SignedIn>
        <nav className='navbar'>
          <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={46}
                height={44}
              />
            </div>
          </Link>
          <div className='flex items-center gap-8'>
            <NavItems/>
            <UserButton afterSignOutUrl='/sign-in'/>
          </div>
        </nav>
      </SignedIn>
    </>
  )
}

export default Navbar