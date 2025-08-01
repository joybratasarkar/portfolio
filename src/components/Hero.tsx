'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Full Stack AI/ML Engineer', 'Conversational AI Expert', 'RAG Systems Specialist', 'Real-time Systems Engineer']

  useEffect(() => {
    setMounted(true)
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-accent-50/20 dark:from-neutral-950 dark:via-primary-950/30 dark:to-accent-950/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-left space-y-8">
              <div className={`${mounted ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-sm font-medium text-primary-700 dark:text-primary-300 rounded-full mb-6 border border-primary-200/50 dark:border-primary-800/50 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  Available for work
                </span>
              </div>
              
              <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-accent-600 dark:from-neutral-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
                  Joybrata Sarkar
                </h1>
              </div>
              
              <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="h-20 flex items-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-700 dark:text-neutral-300">
                    <span className="inline-block min-w-0">
                      <span 
                        key={currentWord}
                        className="inline-block animate-fade-in-up bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-medium"
                      >
                        {words[currentWord]}
                      </span>
                      <span className="animate-blink text-primary-500">|</span>
                    </span>
                  </p>
                </div>
              </div>
              
              <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  I build{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">AI-powered applications</span>{' '}
                  and{' '}
                  <span className="text-accent-600 dark:text-accent-400 font-medium">conversational systems</span>{' '}
                  that serve 10K+ users with{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">sub-50ms latency</span>.
                  Transforming complex AI challenges into scalable production solutions.
                </p>
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <a 
                  href="#projects" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 hover:from-primary-700 hover:via-accent-600 hover:to-accent-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-xl font-semibold hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/50 dark:to-accent-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              
              <div className={`flex space-x-4 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <a
                  href="https://github.com/joybratasarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/10 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joybrata-sarkar-650406169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/10 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:joybrata.official@gmail.com"
                  className="group p-3 text-neutral-600 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-all duration-300 hover:bg-accent-50 dark:hover:bg-accent-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-lg hover:shadow-accent-500/10 transform hover:scale-110"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right content - Interactive 3D Showcase */}
            <div className={`flex justify-center lg:justify-end ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <div className="relative">
                {/* Dynamic background particles */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute top-10 left-10 w-4 h-4 bg-primary-400/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute top-20 right-16 w-2 h-2 bg-accent-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-16 left-20 w-3 h-3 bg-primary-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-24 right-12 w-1 h-1 bg-accent-500/50 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
                </div>
                
                {/* Main showcase container with perspective */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 perspective-1000">
                  {/* Rotating outer ring */}
                  <div className="absolute inset-0 border-4 border-gradient-to-r from-primary-300/30 to-accent-300/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border-2 border-gradient-to-l from-accent-200/20 to-primary-200/20 rounded-full animate-reverse-spin" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Central showcase area */}
                  <div className="absolute inset-8 bg-gradient-to-br from-primary-50/90 via-neutral-50/95 to-accent-50/90 dark:from-primary-950/90 dark:via-neutral-900/95 dark:to-accent-950/90 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-lg border border-primary-200/50 dark:border-primary-800/50 hover:scale-105 transition-all duration-500 group">
                    
                    {/* Interactive tech stack display */}
                    <div className="text-center relative">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-500 relative overflow-hidden">
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100"></div>
                        <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-lg font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                          AI/ML Engineer
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                          10K+ Users • &lt;50ms Latency
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating technology badges with enhanced animations */}
                  <div className="absolute -top-6 -left-6 group/badge">
                    <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-default border-2 border-primary-300/50">
                      <span className="relative z-10">LangChain</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 group/badge" style={{ animationDelay: '1s' }}>
                    <div className="px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-default border-2 border-accent-300/50">
                      <span className="relative z-10">Vertex AI</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 group/badge" style={{ animationDelay: '2s' }}>
                    <div className="px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 cursor-default border-2 border-primary-300/50">
                      <span className="relative z-10">FastAPI</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 group/badge" style={{ animationDelay: '3s' }}>
                    <div className="px-4 py-2 bg-gradient-to-r from-accent-600 to-primary-500 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-default border-2 border-accent-300/50">
                      <span className="relative z-10">Redis</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-400 rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                {/* Ambient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className={`flex justify-center mt-20 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="animate-bounce-slow">
            <a href="#about" className="group flex flex-col items-center space-y-2 p-4 text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              <span className="text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}