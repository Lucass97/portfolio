import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Benvenuto nel mio Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sono uno sviluppatore appassionato di tecnologia e innovazione. 
            Esplora i miei progetti e scopri le mie competenze.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
          <Link
            href="/progetti"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Vedi i miei progetti
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center justify-center px-6 py-3 border border-input text-base font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Le mie competenze
          </Link>
        </div>

        {/* Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Progetti Innovativi</h3>
            <p className="text-sm text-muted-foreground">
              Scopri le mie creazioni e i progetti su cui ho lavorato
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Skills Tecniche</h3>
            <p className="text-sm text-muted-foreground">
              Le tecnologie e i linguaggi che padroneggio
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Le mie Passioni</h3>
            <p className="text-sm text-muted-foreground">
              Cosa mi ispira oltre il codice
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
