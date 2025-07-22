import { getSkillsByCategory } from '@/lib/data'
import { SkillBar } from '@/components/skill-bar'
import { Code2, Database, Wrench, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    description: 'Tecnologie per creare interfacce utente moderne e responsive',
    category: 'frontend' as const,
  },
  {
    title: 'Backend',
    icon: Database,
    description: 'Linguaggi e framework per lo sviluppo server-side',
    category: 'backend' as const,
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    description: 'Strumenti per sviluppo, deployment e collaborazione',
    category: 'tools' as const,
  },
  {
    title: 'Altri',
    icon: Sparkles,
    description: 'Competenze aggiuntive e tecnologie emergenti',
    category: 'other' as const,
  },
]

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Le Mie Competenze</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Un overview delle tecnologie e degli strumenti che utilizzo per 
          trasformare idee in realtà digitali.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-12">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon
          const skills = getSkillsByCategory(category.category)

          return (
            <div key={category.category} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-16">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 200 + index * 100}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-16 p-8 rounded-lg border bg-card text-center">
        <h3 className="text-xl font-semibold mb-4">Sempre in Apprendimento</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Il mondo della tecnologia è in continua evoluzione. Mi impegno costantemente 
          ad aggiornarmi sulle ultime tecnologie e best practices per offrire soluzioni 
          innovative e all&apos;avanguardia.
        </p>
      </div>
    </div>
  )
}
