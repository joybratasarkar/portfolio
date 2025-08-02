'use client'

import { useEffect, useState } from 'react'

const About = () => {
  const [mounted, setMounted] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  
  const skills = [
    { category: 'AI & Machine Learning', items: ['Google Vertex AI', 'LangChain', 'LangGraph', 'Silero VAD', 'Wav2Vec2', 'PyTorch', 'NLP', 'RAG Systems', 'Turn Detection'] },
    { category: 'Languages & Frameworks', items: ['Python', 'JavaScript', 'TypeScript', 'FastAPI', 'Angular', 'React', 'Node.js', 'Django'] },
    { category: 'Programming Fundamentals', items: ['Data Structures & Algorithms', 'System Design', 'Problem Solving', 'API Design'] },
    { category: 'Infrastructure & Systems', items: ['Redis', 'Celery', 'Docker', 'Microservices', 'CI/CD', 'MongoDB', 'WebSocket', 'Distributed Systems'] }
  ]

  useEffect(() => {
    setMounted(true)
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 200)
    })
  }, [skills])

  const experiences = [
    {
      title: 'Full Stack AI/ML Engineer',
      company: 'Impacteers',
      period: 'Dec 2024 - Present',
      description: 'Leading 4-engineer team building breakthrough conversational AI platform with real-time processing. Architected distributed system supporting 100+ concurrent connections with <50ms WebSocket routing. Implemented smart turn detection using Silero VAD and intelligent conversation orchestration via LangGraph state machine. Optimized tensor reuse achieving <100ms audio processing and 200MB per worker efficiency.'
    },
    {
      title: 'Software Engineer - Frontend',
      company: 'Supersourcing',
      period: 'Dec 2022 - Nov 2024',
      description: 'Shipped 3 production SaaS platforms: AI interview system, ATS, and vendor management tool. Implemented NgRx state management, lazy loading, and component-level caching for performance optimization. Led technical interviews, conducted code reviews, and enhanced user experience under heavy load while ensuring maintainability and scalability.'
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-accent-50/10 dark:from-neutral-950 dark:via-primary-950/20 dark:to-accent-950/10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-primary-600 to-accent-600 dark:from-neutral-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent mb-6 ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            About Me
          </h2>
          <p className={`text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            I'm a Full Stack Engineer who specializes in{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">integrating AI capabilities into production applications</span>.
            I don't build ML models from scratch—I build the systems that make AI work in the real world. Currently leading a 4-engineer team at Impacteers, 
            where we've architected{' '}
            <span className="text-accent-600 dark:text-accent-400 font-semibold">conversational AI platforms serving 10K+ users</span>{' '}
            with sub-50ms response times. My expertise is in making AI systems scalable, reliable, and production-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Info */}
          <div className={`space-y-8 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-white/80 via-primary-50/50 to-accent-50/30 dark:from-neutral-900/80 dark:via-primary-950/50 dark:to-accent-950/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-6">
                My Journey
              </h3>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  My journey started with a fascination for building things that work. From{' '}
                  <span className="text-accent-600 dark:text-accent-400 font-semibold">KLE Society's S Nijalingappa College in Bengaluru</span>{' '}
                  (BCA 2017-2020) to{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">Bhilai Institute of Technology</span>{' '}
                  (MCA 2020-2022), I focused on practical applications over theoretical knowledge. While others memorized data structures, 
                  I was building full-stack applications and learning how to make software that users actually want to use.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  At{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">Supersourcing</span>{' '}
                  (Dec 2022 - Nov 2024), I evolved from frontend engineer to technical leader. Shipped 3 production SaaS platforms 
                  including an AI interview system, ATS, and vendor management tools. I learned NgRx, implemented performance optimizations 
                  that reduced latency by 60%, and discovered that great engineering is about solving user problems, not just writing clever code.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  Now at{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">Impacteers</span>{' '}
                  (Dec 2024 - Present), I lead a 4-engineer team building{' '}
                  <span className="text-accent-600 dark:text-accent-400 font-semibold">production-ready AI systems</span>.
                  I don't train neural networks—I architect the infrastructure that makes AI work at scale. Real-time speech processing, 
                  distributed WebSocket connections, multi-layer Redis architectures, and optimization that achieves <100ms audio processing. 
                  I bridge the gap between AI possibilities and production realities.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-br from-white/80 via-accent-50/50 to-primary-50/30 dark:from-neutral-900/80 dark:via-accent-950/50 dark:to-primary-950/30 backdrop-blur-sm border border-accent-200/50 dark:border-accent-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative border-l-4 border-gradient-to-b from-primary-500 to-accent-500 pl-8 group">
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-1 w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    
                    <div className="bg-white/50 dark:bg-neutral-800/50 rounded-lg p-4 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300/50 dark:hover:border-primary-700/50 transition-all duration-300 group-hover:shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium px-3 py-1 bg-primary-100/50 dark:bg-primary-900/30 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`${mounted ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-6">
              Skills & Technologies
            </h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className={`group bg-gradient-to-br from-white/80 via-primary-50/30 to-accent-50/20 dark:from-neutral-900/80 dark:via-primary-950/30 dark:to-accent-950/20 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${visibleCards.includes(index) ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200/50 dark:border-primary-700/50 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="group text-center p-6 bg-gradient-to-br from-primary-100/80 to-primary-200/60 dark:from-primary-900/40 dark:to-primary-800/60 backdrop-blur-sm border border-primary-200/50 dark:border-primary-700/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  Production Platforms
                </div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-accent-100/80 to-accent-200/60 dark:from-accent-900/40 dark:to-accent-800/60 backdrop-blur-sm border border-accent-200/50 dark:border-accent-700/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  &lt;50ms
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  Response Latency
                </div>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-green-100/80 to-green-200/60 dark:from-green-900/40 dark:to-green-800/60 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 col-span-2 lg:col-span-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-primary-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  100+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  Concurrent Connections
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className={`mt-20 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-8 text-center">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/80 via-primary-50/30 to-accent-50/20 dark:from-neutral-900/80 dark:via-primary-950/30 dark:to-accent-950/20 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Master in Computer Application
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                Bhilai Institute of Technology, Chhattisgarh
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                2020 - 2022
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/80 via-accent-50/30 to-primary-50/20 dark:from-neutral-900/80 dark:via-accent-950/30 dark:to-primary-950/20 backdrop-blur-sm border border-accent-200/50 dark:border-accent-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Bachelor of Computer Application
              </h4>
              <p className="text-accent-600 dark:text-accent-400 font-medium mb-1">
                KLE Society's S Nijalingappa College, Bengaluru
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                2017 - 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About