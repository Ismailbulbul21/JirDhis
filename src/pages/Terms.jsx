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

export default function Terms() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest">Legal</span>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Terms of Service</h1>
          <p className="text-slate-500 mt-2">Effective: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-12 text-slate-600 leading-relaxed">

        {/* 1 */}
        <section>
          <SectionHeading>1. Acceptance of Terms</SectionHeading>
          <div className="space-y-3">
            <p>
              By downloading, installing, or using the Caafi mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the app.
            </p>
            <p>
              These terms apply to all users of Caafi, including users who access the app via iOS or Android.
            </p>
          </div>
        </section>

        {/* 2 */}
        <section>
          <SectionHeading>2. Description of Service</SectionHeading>
          <div className="space-y-3">
            <p>
              Caafi is a personal fitness and nutrition tracking application. It provides:
            </p>
            <ul className="space-y-3 mt-2">
              <Bullet>Workout planning and a comprehensive exercise library</Bullet>
              <Bullet>Food logging, calorie tracking, and macro tracking</Bullet>
              <Bullet>AI-powered food scanning via Google Gemini</Bullet>
              <Bullet>Progress tracking and fitness milestone recording</Bullet>
            </ul>
            <p className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800">
              <strong>Important:</strong> Caafi is for <strong>informational and general wellness purposes only</strong>. It is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </section>

        {/* 3 */}
        <section>
          <SectionHeading>3. User Accounts</SectionHeading>
          <div className="space-y-3">
            <p>To use Caafi, you must create an account. By registering, you agree that:</p>
            <ul className="space-y-3 mt-2">
              <Bullet>You will provide accurate and complete information during registration.</Bullet>
              <Bullet>You are solely responsible for the security of your account credentials.</Bullet>
              <Bullet>You must be at least <strong className="text-slate-800">13 years of age</strong> to create an account.</Bullet>
              <Bullet>You may only create one account per person. Multiple accounts for the same individual are not permitted.</Bullet>
            </ul>
          </div>
        </section>

        {/* 4 */}
        <section>
          <SectionHeading>4. Acceptable Use</SectionHeading>
          <div className="space-y-3">
            <p>By using Caafi, you agree <strong className="text-slate-800">NOT</strong> to:</p>
            <ul className="space-y-3 mt-2">
              <Bullet>Use the app for any unlawful or unauthorized purpose.</Bullet>
              <Bullet>Attempt to hack, reverse engineer, scrape, or otherwise compromise the app or its infrastructure.</Bullet>
              <Bullet>Share your account credentials with any other person.</Bullet>
              <Bullet>Upload, post, or transmit any harmful, offensive, or inappropriate content.</Bullet>
              <Bullet>Use automated tools or bots to access or interact with the app.</Bullet>
              <Bullet>Interfere with other users' enjoyment of the app.</Bullet>
            </ul>
            <p className="mt-3">
              Violation of these rules may result in immediate account suspension or termination.
            </p>
          </div>
        </section>

        {/* 5 */}
        <section>
          <SectionHeading>5. Health Disclaimer</SectionHeading>
          <div className="space-y-3">
            <p>
              Caafi provides fitness and nutrition information for general wellness purposes only. The content within the app — including exercises, calorie targets, and nutritional data — is not intended as medical advice.
            </p>
            <p>
              <strong className="text-slate-800">Always consult a qualified healthcare professional</strong> before starting any new exercise program or dietary plan, particularly if you have a pre-existing medical condition, injury, or health concern.
            </p>
            <p>
              Caafi and its developers are not liable for any injury, illness, or health consequences that may result from following content or recommendations within the app.
            </p>
          </div>
        </section>

        {/* 6 */}
        <section>
          <SectionHeading>6. Intellectual Property</SectionHeading>
          <div className="space-y-3">
            <p>
              All content within Caafi — including but not limited to the exercise database, UI design, branding, Somali-language translations, and app code — is the intellectual property of Caafi and is protected under applicable copyright and trademark laws.
            </p>
            <p>
              You may not reproduce, copy, distribute, sell, or create derivative works from any content in Caafi without express written permission.
            </p>
          </div>
        </section>

        {/* 7 */}
        <section>
          <SectionHeading>7. Termination</SectionHeading>
          <div className="space-y-3">
            <p>
              We reserve the right to suspend or permanently terminate your account at our discretion if you violate these Terms of Service, engage in fraudulent activity, or otherwise misuse the app.
            </p>
            <p>
              You may delete your account at any time via the app settings or by visiting our{' '}
              <a href="/delete-account" className="text-emerald-600 underline hover:text-emerald-700">
                Account Deletion page
              </a>
              .
            </p>
          </div>
        </section>

        {/* 8 */}
        <section>
          <SectionHeading>8. Limitation of Liability</SectionHeading>
          <div className="space-y-3">
            <p>
              Caafi is provided <strong className="text-slate-800">"as is"</strong> and <strong className="text-slate-800">"as available"</strong> without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of harmful components.
            </p>
            <p>
              To the fullest extent permitted by law, Caafi and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of — or inability to use — the app.
            </p>
          </div>
        </section>

        {/* 9 */}
        <section>
          <SectionHeading>9. Governing Law</SectionHeading>
          <div className="space-y-3">
            <p>
              These Terms of Service are governed by and construed in accordance with applicable international law. Any disputes arising under these terms shall be resolved in good faith. As a global app serving the Somali diaspora, we are committed to honoring applicable local laws and regulations.
            </p>
          </div>
        </section>

        {/* 10 */}
        <section>
          <SectionHeading>10. Contact</SectionHeading>
          <div className="space-y-3">
            <p>
              If you have any questions about these Terms of Service, please reach out:
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
