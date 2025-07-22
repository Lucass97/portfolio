'use client'

import { interests } from '@/lib/data'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function InterestsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Le Mie Passioni</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Oltre al codice, ci sono molte cose che mi appassionano e che 
          arricchiscono la mia vita personale e professionale.
        </p>
      </div>

      {/* Interests Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {interests.map((interest) => (
          <motion.div
            key={interest.title}
            variants={item}
            className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
          >
            {/* Card Content */}
            <div className="p-6 space-y-4">
              {/* Icon */}
              <div className="text-5xl">{interest.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold">{interest.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {interest.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote Section */}
      <div className="mt-16 text-center">
        <blockquote className="relative">
          <div className="text-6xl text-primary/20 absolute -top-4 left-1/2 -translate-x-1/2">
            "
          </div>
          <p className="text-lg md:text-xl italic text-muted-foreground max-w-3xl mx-auto pt-8">
            La diversità degli interessi alimenta la creatività. 
            Ogni passione contribuisce a rendermi un developer più completo, 
            portando prospettive uniche nei progetti che realizzo.
          </p>
        </blockquote>
      </div>
    </div>
  )
}
