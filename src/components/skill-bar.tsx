'use client'

import { useEffect, useState } from 'react'
import { Skill } from '@/lib/data'
import { cn } from '@/lib/utils'

interface SkillBarProps {
  skill: Skill
  delay?: number
}

/**
 * Animated skill bar component
 */
export function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-gradient-to-r from-primary to-blue-600 rounded-full",
            "transition-all duration-1000 ease-out"
          )}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
          }}
        />
      </div>
    </div>
  )
}
