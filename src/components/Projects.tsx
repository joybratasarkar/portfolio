'use client'

import { useState, useEffect } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [mounted, setMounted] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      projects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index])
        }, index * 150)
      })
    }, 800)
    return () => clearTimeout(timer)
  }, [])
  
  const projects = [
    {
      id: 1,
      title: 'Conversational AI Interviewer',
      description: 'A web-based interface built with Angular that enables interactive, real-time interviews powered by AI. Features WebSocket communication with FastAPI backend and responsive modern UI for seamless interview experiences.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'WebSocket', 'FastAPI'],
      category: 'AI/ML',
      github: 'https://github.com/joybratasarkar/conversational-ai-interviewer',
      live: 'https://conversational-ai-interviewer.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Career Guidance RAG System',
      description: 'AI-powered career guidance system using RAG (Retrieval Augmented Generation) to help students and professionals with job search, skill assessment, courses, mentorship, and career development. Features real-time chat with conversation history.',
      image: '/api/placeholder/600/400',
      technologies: ['Streamlit', 'FastAPI', 'Vertex AI', 'MongoDB', 'Redis', 'LangGraph'],
      category: 'AI/ML',
      github: 'https://github.com/joybratasarkar/career-guidance-rag',
      live: null,
      featured: true
    },
    {
      id: 3,
      title: 'Video Query RAG System',
      description: 'A multimodal video indexing and retrieval system that lets you query any video and returns the most relevant video segments with timestamps. Uses BLIP for image captioning and Whisper for audio transcription.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'OpenCV', 'BLIP', 'Whisper', 'FAISS', 'SentenceTransformers'],
      category: 'AI/ML',
      github: 'https://github.com/joybratasarkar/video-query-rag',
      live: null,
      featured: false
    },
    {
      id: 4,
      title: 'AI Interview Platform (Enterprise)',
      description: 'Led 4-engineer team to build breakthrough conversational AI platform with real-time processing achieving sub-50ms response latency. Features smart turn detection, intelligent conversation orchestration, and dynamic question generation.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'FastAPI', 'Vertex AI', 'WebSocket', 'Redis', 'LangGraph', 'Silero VAD'],
      category: 'AI/ML',
      github: null,
      live: null,
      featured: false
    },
    {
      id: 5,
      title: 'Candidate Scoring Engine',
      description: 'Built automated job-fit evaluation using lexical, phonetic, and semantic similarity algorithms with LLM pipeline generating recruiter-ready reports for enterprise hiring processes.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'NLP', 'LLM', 'Semantic Analysis', 'FastAPI'],
      category: 'AI/ML',
      github: null,
      live: null,
      featured: false
    },
    {
      id: 6,
      title: 'AI-Driven Developer Search Engine',
      description: 'Built NLP-powered candidate search using LLM processing and TF-IDF retrieval. Implemented cosine similarity matching and MongoDB indexing with dynamic query refinement for precise developer matching.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'NLP', 'LLM', 'MongoDB', 'TF-IDF', 'Cosine Similarity'],
      category: 'AI/ML',
      github: null,
      live: null,
      featured: false
    }
  ]

  const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend', 'Backend']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-neutral-50 to-accent-50/20 dark:from-primary-950/20 dark:via-neutral-950 dark:to-accent-950/20"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-40 right-16 w-80 h-80 bg-gradient-to-r from-primary-400/12 to-accent-400/12 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-16 w-96 h-96 bg-gradient-to-r from-accent-400/12 to-primary-400/12 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-block ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full border border-primary-300/50 dark:border-primary-700/50 mb-6 inline-block">
              ✨ Portfolio Showcase
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-neutral-900 via-primary-600 to-accent-600 dark:from-neutral-100 dark:via-primary-400 dark:to-accent-400 bg-clip-text text-transparent mb-8 ${mounted ? 'animate-fade-in-down' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Featured Projects
          </h2>
          <p className={`text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Transforming complex challenges into{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">intelligent solutions</span>{' '}
            that serve{' '}
            <span className="text-accent-600 dark:text-accent-400 font-semibold">thousands of users</span>{' '}
            with cutting-edge AI technology.
          </p>
          
          {/* Achievement stats */}
          <div className={`flex justify-center gap-8 mt-8 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10K+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">&lt;50ms</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">6+</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">AI Projects</div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className={`grid md:grid-cols-2 gap-8 mb-16 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-gradient-to-br from-white/90 via-primary-50/50 to-accent-50/30 dark:from-neutral-900/90 dark:via-primary-950/50 dark:to-accent-950/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ${visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary-500/90 to-accent-500/90 relative overflow-hidden group-hover:from-primary-600/95 group-hover:to-accent-600/95 transition-all duration-500">
                {/* Animated tech pattern background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-lg animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 border border-white/40 rounded-full animate-bounce-slow"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-white/20 rounded-sm animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 right-12 w-3 h-8 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* Central icon/logo area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                      <div className="text-white text-2xl font-bold">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Floating particles around the icon */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 -left-4 w-1 h-1 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 opacity-0 group-hover:opacity-100"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full border border-primary-200/50 dark:border-primary-700/50">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-2 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-lg border border-neutral-200/50 dark:border-neutral-600/50 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 text-white rounded-xl hover:from-neutral-700 hover:to-neutral-800 dark:hover:from-neutral-600 dark:hover:to-neutral-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover-glow"
                    >
                      <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="relative z-10">Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover-glow"
                    >
                      <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="relative z-10 flex items-center gap-1">
                        Live Demo
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects */}
        <div>
          <div className={`flex justify-center mb-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="flex flex-wrap gap-3 p-2 bg-gradient-to-r from-primary-100/50 to-accent-100/50 dark:from-primary-900/30 dark:to-accent-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-2xl shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-accent-700'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.id} 
                className={`group bg-gradient-to-br from-white/90 via-accent-50/40 to-primary-50/30 dark:from-neutral-900/90 dark:via-accent-950/40 dark:to-primary-950/30 backdrop-blur-sm border border-accent-200/50 dark:border-accent-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ${visibleProjects.includes(index + featuredProjects.length) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="aspect-video bg-gradient-to-br from-accent-400/70 to-primary-400/70 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-600/10 to-primary-600/10 group-hover:from-accent-500/5 group-hover:to-primary-500/5 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-gradient-to-r from-accent-100 to-primary-100 dark:from-accent-900/50 dark:to-primary-900/50 text-accent-700 dark:text-accent-300 text-xs font-semibold rounded-full border border-accent-200/50 dark:border-accent-700/50">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-lg border border-neutral-200/50 dark:border-neutral-600/50 hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-lg border border-primary-200/50 dark:border-primary-700/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-700 dark:to-neutral-800 text-white text-sm rounded-lg hover:from-neutral-700 hover:to-neutral-800 dark:hover:from-neutral-600 dark:hover:to-neutral-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-3 h-3 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-600 to-primary-600 text-white text-sm rounded-lg hover:from-accent-700 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-3 h-3 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}