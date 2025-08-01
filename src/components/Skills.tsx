'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  const [visibleBars, setVisibleBars] = useState<string[]>([])

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      const allTechs = skills.flatMap(skill => skill.technologies.map(tech => tech.name))
      allTechs.forEach((techName, index) => {
        setTimeout(() => {
          setVisibleBars(prev => [...prev, techName])
        }, index * 100)
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])
  const skills = [
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "Google Vertex AI", level: 95 },
        { name: "LangChain", level: 92 },
        { name: "RAG Systems", level: 90 },
        { name: "PyTorch", level: 85 }
      ]
    },
    {
      category: "Backend & APIs",
      technologies: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "WebSocket", level: 88 }
      ]
    },
    {
      category: "Frontend & UI",
      technologies: [
        { name: "Angular", level: 90 },
        { name: "React", level: 88 },
        { name: "TypeScript", level: 92 },
        { name: "Streamlit", level: 85 }
      ]
    },
    {
      category: "Infrastructure",
      technologies: [
        { name: "Redis", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Docker", level: 85 },
        { name: "Microservices", level: 87 }
      ]
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-neutral-50 to-primary-50/30 dark:from-accent-950/30 dark:via-neutral-950 dark:to-primary-950/30"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-primary-400/15 to-accent-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-accent-600 to-primary-600 dark:from-neutral-100 dark:via-accent-400 dark:to-primary-400 bg-clip-text text-transparent mb-6 ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Skills & Technologies
          </h2>
          <p className={`text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Technologies I work with to{' '}
            <span className="text-accent-600 dark:text-accent-400 font-medium">bring ideas to life</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br from-white/90 via-primary-50/40 to-accent-50/30 dark:from-neutral-900/90 dark:via-primary-950/40 dark:to-accent-950/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group/tech">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 group-hover/tech:text-primary-600 dark:group-hover/tech:text-primary-400 transition-colors duration-200">
                        {tech.name}
                      </span>
                      <span className="text-sm font-medium text-accent-600 dark:text-accent-400 px-2 py-1 bg-accent-100/50 dark:bg-accent-900/30 rounded-full">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-neutral-200/70 dark:bg-neutral-700/70 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1500 ease-out shadow-sm ${visibleBars.includes(tech.name) ? 'opacity-100' : 'opacity-0'}`}
                          style={{ 
                            width: visibleBars.includes(tech.name) ? `${tech.level}%` : '0%',
                            boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)'
                          }}
                        />
                      </div>
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 h-3 rounded-full bg-gradient-to-r from-primary-400/50 to-accent-400/50 blur-sm transition-all duration-1500 ease-out ${visibleBars.includes(tech.name) ? 'opacity-100' : 'opacity-0'}`}
                        style={{ width: visibleBars.includes(tech.name) ? `${tech.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}