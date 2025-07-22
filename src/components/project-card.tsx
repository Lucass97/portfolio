import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

/**
 * Project card component for displaying project information
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card",
        "hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {/* Placeholder for image - in production, use Next Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
        <div className="flex h-full items-center justify-center">
          <span className="text-4xl opacity-50">🚀</span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5 text-white" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
            Featured
          </span>
        </div>
      )}
    </div>
  )
}
