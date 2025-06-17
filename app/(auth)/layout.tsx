import Clerk from '@/components/clerk'
import React from 'react'

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <Clerk/>
        <div>{children}</div>
    </>
  )
}

export default AuthLayout