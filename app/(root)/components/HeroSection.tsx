import { Briefcase, User } from 'lucide-react'
import React from 'react'

function HeroSection() {
  return (
    <main className="flex flex-col items-center text-center mt-32 sm:mt-40">
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 leading-tight">
                        The Future of Interviewing
                        <span className="block bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">is Intelligent.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-400">
                        Avioo leverages cutting-edge AI to create fair, efficient, and insightful video interviews. Revolutionize your hiring process today.
                    </p>

                    {/* --- UPDATED CTA Buttons --- */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#candidate-login" className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 text-lg font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
                           <User className="h-6 w-6" /> Candidate Login
                        </a>
                        <a href="#hr-login" className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                           <Briefcase className="h-6 w-6" /> HR Login
                        </a>
                    </div>
                </main>
  )
}

export default HeroSection