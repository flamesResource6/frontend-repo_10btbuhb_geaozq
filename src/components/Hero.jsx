import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-blue-100 ring-1 ring-white/20">
            Trusted bio-pharma partner
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Clinical testing built for speed, rigor, and regulatory confidence
          </h1>
          <p className="mt-4 text-blue-100/90 leading-relaxed">
            We design and execute end-to-end preclinical and clinical testing programs across oncology, rare disease, and immunology—delivering audit-ready data and submission-ready reports.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow hover:bg-blue-600 transition-colors">
              Start your study
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 ring-1 ring-white/20 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
