import { PlayCircle } from 'lucide-react'

const studies = [
  {
    area: 'Oncology',
    title: 'First-in-human PK/PD for targeted therapy',
    impact: 'Dose-escalation completed 3 months ahead of plan with robust exposure-response model.',
  },
  {
    area: 'Rare disease',
    title: 'Natural history and biomarker strategy',
    impact: 'Established validated surrogate endpoint enabling accelerated pathway.',
  },
  {
    area: 'Immunology',
    title: 'Adaptive Phase II with Bayesian design',
    impact: 'Reduced sample size by 22% while increasing power through interim decision rules.',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Selected work</h2>
          <p className="mt-3 text-blue-100/90">Examples of programs where our cross-functional teams delivered measurable outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {studies.map((s) => (
            <article key={s.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="aspect-video bg-[linear-gradient(135deg,rgba(59,130,246,0.15),transparent)] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
                    <PlayCircle size={16} />
                    {s.area}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{s.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
