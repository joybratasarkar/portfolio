'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-neutral-50 to-accent-50/30 dark:from-primary-950/30 dark:via-neutral-950 dark:to-accent-950/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400/12 to-accent-400/12 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent-400/12 to-primary-400/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
 

        <div className={`text-center space-y-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-white/90 via-primary-50/30 to-accent-50/20 dark:from-neutral-900/90 dark:via-primary-950/30 dark:to-accent-950/20 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-8">
              Get In Touch
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed">
              Ready to bring your ideas to life? Let's connect and discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:joybrata.official@gmail.com"
                className="group flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/joybratasarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/10 transform hover:scale-110"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/joybrata-sarkar-650406169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg hover:shadow-primary-500/10 transform hover:scale-110"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-8 text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary-100/50 to-accent-100/50 dark:from-primary-900/30 dark:to-accent-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-6 inline-block">
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">
              <span className="text-primary-600 dark:text-primary-400">joybrata.official@gmail.com</span>{' '}
              •{' '}
              <span className="text-accent-600 dark:text-accent-400">Bengaluru, India</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

