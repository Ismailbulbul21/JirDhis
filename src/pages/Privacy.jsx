function SectionHeading({ children }) {
  return (
    <h2 className="text-xl font-bold text-slate-900 border-l-4 border-emerald-600 pl-4 mb-4">
      {children}
    </h2>
  )
}

function Bullet({ label, children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
      <span>
        {label && <strong className="text-slate-800">{label}: </strong>}
        {children}
      </span>
    </li>
  )
}

export default function Privacy() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Legal</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 mt-2">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-12 text-slate-600 leading-relaxed">

        {/* 1 */}
        <section>
          <SectionHeading>1. Introduction</SectionHeading>
          <div className="space-y-3">
            <p>
              Caafi ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains what data we collect when you use the Caafi mobile application, how we use it, and the rights you have over your information.
            </p>
            <p>
              By using Caafi, you agree to the collection and use of information in accordance with this policy. If you do not agree, please discontinue use of the app.
            </p>
          </div>
        </section>

        {/* 2 */}
        <section>
          <SectionHeading>2. Information We Collect</SectionHeading>
          <div className="space-y-3">
            <p>We collect the following categories of information:</p>
            <ul className="space-y-3 mt-2">
              <Bullet label="Account info">
                Your name and email address, collected via Supabase Auth during registration.
              </Bullet>
              <Bullet label="Fitness data">
                Workouts you create, exercises you view, and planner schedules you set.
              </Bullet>
              <Bullet label="Nutrition data">
                Food logs, calorie entries, and macro data you manually add to the app.
              </Bullet>
              <Bullet label="Usage data">
                App screens visited and features used — collected anonymously to help us improve the app.
              </Bullet>
              <Bullet label="Device info">
                Device type and OS version, used solely for crash reporting and debugging.
              </Bullet>
            </ul>
          </div>
        </section>

        {/* 3 */}
        <section>
          <SectionHeading>3. How We Use Your Information</SectionHeading>
          <div className="space-y-3">
            <p>We use your information to:</p>
            <ul className="space-y-3 mt-2">
              <Bullet>Provide and continuously improve the Caafi app experience.</Bullet>
              <Bullet>Save your workout plans and nutrition logs securely across devices.</Bullet>
              <Bullet>Show you relevant exercises and food items within the app.</Bullet>
              <Bullet>Diagnose crashes and fix technical issues.</Bullet>
            </ul>
            <p className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-medium">
              We do <strong>NOT</strong> sell your data to third parties. We do <strong>NOT</strong> use your data for advertising.
            </p>
          </div>
        </section>

        {/* 4 */}
        <section>
          <SectionHeading>4. Data Storage &amp; Security</SectionHeading>
          <div className="space-y-3">
            <ul className="space-y-3">
              <Bullet>
                Your data is stored securely on <strong className="text-slate-800">Supabase</strong>, hosted on Amazon Web Services (AWS) infrastructure.
              </Bullet>
              <Bullet>
                All data is encrypted in transit using HTTPS/TLS.
              </Bullet>
              <Bullet>
                Authentication is handled via Supabase Auth with email and password. Passwords are never stored in plain text.
              </Bullet>
              <Bullet>
                We retain your data for as long as your account remains active. Upon account deletion, your data is permanently removed within 30 days.
              </Bullet>
            </ul>
          </div>
        </section>

        {/* 5 */}
        <section>
          <SectionHeading>5. Third-Party Services</SectionHeading>
          <div className="space-y-3">
            <p>Caafi uses the following third-party services:</p>
            <ul className="space-y-3 mt-2">
              <Bullet label="Supabase (database &amp; auth)">
                Powers our backend, database, and authentication. See their privacy policy at{' '}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline hover:text-emerald-700"
                >
                  supabase.com/privacy
                </a>.
              </Bullet>
              <Bullet label="Google Gemini AI (food scanning only)">
                Used exclusively for the AI food scanning feature. See Google's AI policy at{' '}
                <a
                  href="https://ai.google.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline hover:text-emerald-700"
                >
                  ai.google.dev
                </a>.
              </Bullet>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              We do not use any analytics SDKs or advertising SDKs.
            </p>
          </div>
        </section>

        {/* 6 */}
        <section>
          <SectionHeading>6. Your Rights</SectionHeading>
          <div className="space-y-3">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="space-y-3 mt-2">
              <Bullet label="Access">
                View all your data (workouts, food logs, progress) directly inside the Caafi app.
              </Bullet>
              <Bullet label="Delete">
                Request permanent deletion of your account and all associated data via our{' '}
                <a href="/delete-account" className="text-emerald-600 underline hover:text-emerald-700">
                  Account Deletion page
                </a>{' '}
                or by emailing us.
              </Bullet>
              <Bullet label="Export">
                Contact us at{' '}
                <a
                  href="mailto:ismailbulbul381@gmail.com"
                  className="text-emerald-600 underline hover:text-emerald-700"
                >
                  ismailbulbul381@gmail.com
                </a>{' '}
                to request a copy of your data.
              </Bullet>
              <Bullet label="GDPR &amp; CCPA">
                We honor GDPR (EU) and CCPA (California) rights upon verified request.
              </Bullet>
            </ul>
          </div>
        </section>

        {/* 7 */}
        <section>
          <SectionHeading>7. Children's Privacy</SectionHeading>
          <div className="space-y-3">
            <p>
              Caafi is not intended for users under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will delete it.
            </p>
          </div>
        </section>

        {/* 8 */}
        <section>
          <SectionHeading>8. Changes to This Policy</SectionHeading>
          <div className="space-y-3">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will revise the "Last updated" date at the top of this page and notify you via the app.
            </p>
            <p>
              We encourage you to review this policy periodically to stay informed.
            </p>
          </div>
        </section>

        {/* 9 */}
        <section>
          <SectionHeading>9. Contact Us</SectionHeading>
          <div className="space-y-3">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-800">Caafi Support</p>
              <a
                href="mailto:ismailbulbul381@gmail.com"
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                ismailbulbul381@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
