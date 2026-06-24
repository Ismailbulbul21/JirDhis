import { useState } from 'react'

const REASONS = [
  'No longer using the app',
  'Privacy concerns',
  'Switching apps',
  'Other',
]

export default function DeleteAccount() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!email.trim()) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Please enter a valid email address.'
    if (!reason) errs.reason = 'Please select a reason.'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const body = [
      `Email: ${email}`,
      `Reason: ${reason}`,
      message ? `Message: ${message}` : '',
    ]
      .filter(Boolean)
      .join('%0A')

    window.location.href = `mailto:ismailbulbul381@gmail.com?subject=Account%20Deletion%20Request&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 bg-white">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Request Received</h2>
          <p className="text-slate-600 leading-relaxed">
            Your account deletion request has been received. We will delete your account and all associated data within <strong>30 days</strong>.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            If you have questions, email{' '}
            <a href="mailto:ismailbulbul381@gmail.com" className="text-emerald-600 underline">
              ismailbulbul381@gmail.com
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-lg mx-auto px-4 py-16">

        {/* Warning icon */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-2">
            Caution
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">Delete Your Account</h1>
          <p className="text-slate-500 leading-relaxed max-w-sm">
            This will permanently delete all your data including workouts, food logs, and progress.{' '}
            <strong className="text-slate-700">This action cannot be undone.</strong>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((p) => ({ ...p, email: '' }))
              }}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white hover:border-slate-400'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
            )}
            <p className="text-slate-400 text-xs mt-1.5">Enter the email used to register your Caafi account.</p>
          </div>

          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Reason for Deletion <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value)
                if (errors.reason) setErrors((p) => ({ ...p, reason: '' }))
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none bg-white ${
                reason ? 'text-slate-900' : 'text-slate-400'
              } ${errors.reason ? 'border-red-400 bg-red-50' : 'border-slate-300 hover:border-slate-400'}`}
            >
              <option value="" disabled>Select a reason…</option>
              {REASONS.map((r) => (
                <option key={r} value={r} className="text-slate-900">
                  {r}
                </option>
              ))}
            </select>
            {errors.reason && (
              <p className="text-red-500 text-xs mt-1.5">{errors.reason}</p>
            )}
          </div>

          {/* Optional message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Additional Message{' '}
              <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Tell us more about your experience or any feedback…"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            Request Account Deletion
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-slate-400 text-xs font-medium">OR</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Manual email fallback */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            Email us directly at{' '}
            <a
              href="mailto:ismailbulbul381@gmail.com?subject=Account%20Deletion%20Request"
              className="text-emerald-600 font-medium underline hover:text-emerald-700"
            >
              ismailbulbul381@gmail.com
            </a>{' '}
            with subject line:{' '}
            <span className="font-semibold text-slate-700">Account Deletion Request</span>
          </p>
        </div>

        {/* Processing note */}
        <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
          <p className="text-slate-500 text-sm">
            <svg
              className="w-4 h-4 inline mr-1 text-slate-400 -mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            We will process your request within <strong className="text-slate-700">30 days</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
