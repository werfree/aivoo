import React from 'react'

function HeaderComponent() {
  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-6 fixed top-0 left-1/2 -translate-x-1/2 z-50">
                    <h1 className="text-3xl font-bold tracking-wider text-white">Avioo</h1>
                    <div className="hidden md:flex items-center space-x-6 text-gray-300">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#howitworks" className="hover:text-white transition-colors">How It Works</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                    </div>
                    {/* The login buttons can remain here for desktop convenience if desired */}
                </nav>
  )
}

export default HeaderComponent;