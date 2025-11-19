export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-950/90 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Ready to accelerate your program?</h2>
        <p className="mt-3 text-blue-100/90">Share your objectives and timelines. Our scientific leads will craft a tailored testing strategy within 72 hours.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 grid gap-3 sm:grid-cols-3">
          <input required placeholder="Work email" type="email" className="sm:col-span-2 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 outline-none ring-1 ring-white/20 focus:ring-blue-500/60"/>
          <button className="w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow hover:bg-blue-600 transition-colors">Request proposal</button>
        </form>
        <p className="mt-3 text-xs text-blue-200/70">By submitting you agree to our privacy policy. We respond within one business day.</p>
      </div>
    </section>
  )
}
