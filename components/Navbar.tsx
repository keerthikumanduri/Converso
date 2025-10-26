"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import NavItems from './NavItems'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const onSignInPage = pathname?.startsWith('/sign-in')

  if (onSignInPage) return null

  return (
    <>
      {/* (signed-out view below includes the Sign In button/modal) */}

      {/* Navbar shown when user is signed in: full nav with items and user button */}
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
            {/* After sign out, go directly to the sign-in page to avoid extra redirect loops */}
            <UserButton afterSignOutUrl='/sign-in'/>
          </div>
        </nav>
      </SignedIn>

      {/* Signed-out view with centered logo and a Sign In button/modal */}
      <SignedOut>
        <nav className='navbar signed-out'>
          <div className='flex items-center gap-4'>
            <Link href="/">
              <div className='cursor-pointer'>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={64}
                  height={60}
                  className="logo-lg"
                />
              </div>
            </Link>
            {!onSignInPage && (
              <SignInButton>
                <button className='btn-signin'>Sign In</button>
              </SignInButton>
            )}
          </div>
        </nav>
      </SignedOut>
    </>
  )
}

export default Navbar