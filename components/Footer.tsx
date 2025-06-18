'use client'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto text-center py-10 mt-20 text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Avioo. All rights reserved.</p>
                </footer>
  )
}

export default Footer