import { ShieldCheck, Microscope, FlaskConical, CloudCog, FileCheck, BadgeCheck } from 'lucide-react'

const items = [
  {
    icon: Microscope,
    title: 'Bioanalytical assays',
    text: 'Validated LC–MS/MS, PCR, immunoassays, and NGS pipelines with GLP/GCP compliance.'
  },
  {
    icon: FlaskConical,
    title: 'Clinical operations',
    text: 'Protocol design, site activation, monitoring, safety, and data management end-to-end.'
  },
  {
    icon: CloudCog,
    title: 'Data & biostatistics',
    text: 'CDISC SDTM/ADaM, EDC builds, interim analyses, and submission-ready outputs.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality systems',
    text: '21 CFR Part 11, ICH-GCP, and ISO-certified quality frameworks across studies.'
  },
  {
    icon: FileCheck,
    title: 'Regulatory writing',
    text: 'CSRs, IBs, protocols, and briefing packages authored by former reviewers.'
  },
  {
    icon: BadgeCheck,
    title: 'Therapeutic expertise',
    text: 'Oncology, rare disease, cell & gene therapy, and immunology programs.'
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.1),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-blue-100/90">Integrated lab and clinical services that accelerate development while meeting the highest bar for data integrity.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-sm hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/80 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
