import { Link } from 'react-router-dom'

function FeatureCard({ icon, title, subtitle, description }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col">
      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-5 shrink-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-emerald-600 text-sm font-semibold mt-0.5 mb-3">{subtitle}</p>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function LegalLink({ to, label, sub }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
    >
      <div>
        <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors">
          {label}
        </span>
        {sub && <p className="text-slate-400 text-sm mt-0.5">{sub}</p>}
      </div>
      <svg
        className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-slate-900 overflow-hidden py-28 md:py-44">
        {/* Soft glow orb */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[600px] h-[600px] bg-emerald-500 rounded-full opacity-[0.10] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-[9rem] font-extrabold text-white tracking-tight leading-none mb-5 select-none">
            JirDhis
          </h1>
          <p className="text-emerald-400 text-xl md:text-2xl font-semibold mb-4 tracking-wide">
            Caafimaadkaaga gacantaada
          </p>
          <p className="text-slate-400 text-base md:text-lg mb-12 max-w-sm mx-auto leading-relaxed">
            Your health in your hands — a Somali-first fitness &amp; nutrition app for iOS and Android.
          </p>

          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <span className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-slate-900 rounded-xl font-semibold text-sm cursor-default select-none shadow-sm">
              {/* Apple logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </span>
            <span className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm cursor-default select-none shadow-sm">
              {/* Android logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.44-.5-3.04-.79-4.73-.79-1.69 0-3.29.29-4.73.79L5.09 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L5.84 9.48C3.3 11.25 1.6 14.1 1.6 17.4h20.8c0-3.3-1.7-6.15-4.8-7.92zM7.8 15.4c-.66 0-1.2-.55-1.2-1.2 0-.65.54-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8.4 0c-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.66 0 1.2.55 1.2 1.2 0 .65-.54 1.2-1.2 1.2z" />
              </svg>
              Google Play
            </span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
              Features
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
              Everything you need to stay fit
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              JirDhis brings your fitness journey, nutrition tracking, and progress insights together in one beautifully simple app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Jimicsiga"
              subtitle="Fitness"
              description="Build and track custom workout plans with a comprehensive exercise library tailored for all fitness levels."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              }
              title="Cuntada"
              subtitle="Nutrition"
              description="Log meals, scan foods with AI, and track your daily calories and macronutrients effortlessly."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              title="Horumarka"
              subtitle="Progress"
              description="Visualize your fitness journey with detailed progress charts and personal achievement milestones."
            />
          </div>
        </div>
      </section>

      {/* ── Legal links ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">
              Legal
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Policies &amp; Legal</h2>
            <p className="text-slate-500 mt-2">Transparent, simple, and built on trust.</p>
          </div>

          <div className="space-y-3">
            <LegalLink to="/privacy" label="Privacy Policy" sub="How we collect, use, and protect your data" />
            <LegalLink to="/terms" label="Terms of Service" sub="Rules and guidelines for using JirDhis" />
            <LegalLink to="/delete-account" label="Account Deletion" sub="Request permanent deletion of your account and data" />

            {/* Email contact */}
            <a
              href="mailto:ismailbulbul381@gmail.com"
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all group"
            >
              <div>
                <span className="text-slate-700 font-medium group-hover:text-emerald-600 transition-colors">
                  Contact Us
                </span>
                <p className="text-slate-400 text-sm mt-0.5">ismailbulbul381@gmail.com</p>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
