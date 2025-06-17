import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

function Clerk() {
    return (
        <ClerkProvider>
            <SignedOut>
                <SignInButton  oauthFlow='popup'/>
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </ClerkProvider>
    )
}

export default Clerk;