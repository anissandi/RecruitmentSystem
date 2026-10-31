'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState, type FormEvent } from 'react'

type AuthMode = 'login' | 'email' | 'otp' | 'reset' | 'complete'

const steps = [
  { id: 'email', label: 'Email' },
  { id: 'otp', label: 'Verification' },
  { id: 'reset', label: 'New password' },
] as const

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M3 3l18 18M10.6 10.7a3 3 0 004.2 4.2M9.9 4.2A10.8 10.8 0 0112 4c5.2 0 8.8 4.3 9.8 6.2a1.8 1.8 0 010 1.7 16.4 16.4 0 01-2.3 3.1M6.2 6.2A16.1 16.1 0 002.3 10.3a1.8 1.8 0 000 1.7C3.2 13.7 6.8 18 12 18c1.4 0 2.7-.3 3.8-.8" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 fill-none stroke-current stroke-[1.8]"
    >
      <path d="M2.2 12s3.5-6.8 9.8-6.8S21.8 12 21.8 12s-3.5 6.8-9.8 6.8S2.2 12 2.2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  )
}

function PasswordInput({
  label,
  value,
  onChange,
  placeholder = 'Enter your password',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  const [visible, setVisible] = useState(false)

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#193862]">{label}</span>
      <span className="relative block">
        <input
          required
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-[#cbd9e8] bg-white/90 px-4 pr-12 text-[15px] text-[#172b4d] outline-none transition placeholder:text-[#90a1b7] focus:border-[#123d7a] focus:ring-4 focus:ring-[#dbeafe]"
        />
        <button
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          onClick={() => setVisible(!visible)}
          className="absolute inset-y-0 right-0 grid w-12 place-items-center text-[#537195] transition hover:text-[#123d7a] focus:outline-none"
        >
          <EyeIcon open={visible} />
        </button>
      </span>
    </label>
  )
}

function Progress({ mode }: { mode: AuthMode }) {
  if (mode === 'login') return null
  const current = mode === 'email' ? 0 : mode === 'otp' ? 1 : 2

  return (
    <ol aria-label="Password reset progress" className="mb-8 flex items-start">
      {steps.map((step, index) => (
        <li key={step.id} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-2">
            <span
              className={`grid size-7 place-items-center rounded-full text-xs font-bold ${index <= current ? 'bg-[#123d7a] text-white' : 'bg-[#dce5ef] text-[#71839a]'}`}
            >
              {index < current ? '✓' : index + 1}
            </span>
            <span
              className={`whitespace-nowrap text-[11px] font-medium ${index <= current ? 'text-[#123d7a]' : 'text-[#8494a8]'}`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <span
              className={`mx-2 mb-5 h-px flex-1 ${index < current ? 'bg-[#123d7a]' : 'bg-[#dce5ef]'}`}
            />
          )}
        </li>
      ))}
    </ol>
  )
}

export default function AuthShell({ initialMode = 'login' }: { initialMode?: 'login' | 'email' }) {
  const router = useRouter()
  const [mode, setMode] = useState<AuthMode>(initialMode)
  const [greeting, setGreeting] = useState('Good day')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const otpRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    const hour = new Date().getHours()
    setGreeting(hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening')
  }, [])

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email && password) router.push('/dashboard')
  }

  const sendOtp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email) setMode('otp')
  }

  const changeOtp = (index: number, input: string) => {
    const digit = input.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[index] = digit
    setOtp(next)
    if (digit && index < otp.length - 1) otpRefs.current[index + 1]?.focus()
  }

  const verifyOtp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (otp.every(Boolean)) setMode('reset')
  }

  const submitNewPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newPassword.length >= 8 && newPassword === confirmation) setMode('complete')
  }

  const modeCopy: Record<AuthMode, { eyebrow: string; title: string; description: string }> = {
    login: {
      eyebrow: 'Recruitment Workspace',
      title: greeting,
      description: 'Sign in to review candidates and keep every hiring process moving forward.',
    },
    email: {
      eyebrow: 'Reset password',
      title: 'Forgot your password?',
      description: 'Enter your corporate email and we will send you a verification code.',
    },
    otp: {
      eyebrow: 'Email verification',
      title: 'Enter your OTP code',
      description: `We sent a 6-digit verification code to ${email || 'your email address'}.`,
    },
    reset: {
      eyebrow: 'New password',
      title: 'Create a new password',
      description: 'Choose a secure password for your Sambu Recruitment account.',
    },
    complete: {
      eyebrow: 'Password updated',
      title: 'You are all set',
      description: 'Your password has been updated. Sign in again to continue.',
    },
  }
  const copy = modeCopy[mode]
  const loginActive = Boolean(email && password)
  const resetActive = newPassword.length >= 8 && newPassword === confirmation

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f7f3] px-5 py-9 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(140,181,132,0.18),transparent_25%),radial-gradient(circle_at_84%_72%,rgba(69,125,177,0.14),transparent_28%)]" />
      <Image
        src="/world-map.jpg"
        alt=""
        width={1381}
        height={802}
        priority
        unoptimized
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(1120px,115vw)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.13] mix-blend-multiply"
      />

      <section className="relative w-full max-w-[438px]">
        <div className="mb-7 flex justify-center">
          <Image
            src="/sambu-career.png"
            width={208}
            height={52}
            priority
            unoptimized
            alt="Sambu Career"
            className="h-auto w-[180px] sm:w-[208px]"
          />
        </div>
        <div className="rounded-[30px] border border-white/80 bg-[rgba(253,254,250,0.64)] p-7 shadow-[0_28px_76px_rgba(28,54,85,0.14)] ring-1 ring-[#dfe9df]/70 backdrop-blur-2xl sm:p-9">
          <Progress mode={mode} />
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#3978b9]">
              {copy.eyebrow}
            </p>
            <h1 className="text-[27px] font-bold tracking-[-0.035em] text-[#102f59] sm:text-[30px]">
              {copy.title}
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#627a98]">{copy.description}</p>
          </div>

          {mode === 'login' && (
            <form onSubmit={submitLogin} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#193862]">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your corporate email"
                  className="h-12 w-full rounded-xl border border-[#cbd9e8] bg-white/90 px-4 text-[15px] text-[#172b4d] outline-none transition placeholder:text-[#90a1b7] focus:border-[#123d7a] focus:ring-4 focus:ring-[#dbeafe]"
                />
              </label>
              <PasswordInput label="Password" value={password} onChange={setPassword} />
              <div className="-mt-1 flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-[#1b5d9f] underline-offset-4 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                disabled={!loginActive}
                className="h-12 w-full rounded-xl bg-[#123d7a] text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,61,122,0.22)] transition enabled:hover:bg-[#0c3065] disabled:cursor-not-allowed disabled:bg-[#c8d0da] disabled:text-white disabled:shadow-none"
              >
                Sign in
              </button>
            </form>
          )}

          {mode === 'email' && (
            <form onSubmit={sendOtp} className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#193862]">
                  Corporate email
                </span>
                <input
                  required
                  autoFocus
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nama@sambu.com"
                  className="h-12 w-full rounded-xl border border-[#cbd9e8] bg-white px-4 text-[15px] text-[#172b4d] outline-none transition placeholder:text-[#90a1b7] focus:border-[#123d7a] focus:ring-4 focus:ring-[#dbeafe]"
                />
              </label>
              <button
                disabled={!email}
                className="h-12 w-full rounded-xl bg-[#123d7a] text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,61,122,0.22)] transition enabled:hover:bg-[#0c3065] disabled:cursor-not-allowed disabled:bg-[#c8d0da] disabled:shadow-none"
              >
                Send verification code
              </button>
              <Link
                href="/"
                className="block text-center text-sm font-semibold text-[#1b5d9f] hover:underline"
              >
                Back to sign in
              </Link>
            </form>
          )}

          {mode === 'otp' && (
            <form onSubmit={verifyOtp}>
              <fieldset>
                <legend className="sr-only">Six-digit OTP code</legend>
                <div className="flex justify-between gap-2">
                  {otp.map((value, index) => (
                    <input
                      key={index}
                      ref={(element) => {
                        otpRefs.current[index] = element
                      }}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={1}
                      value={value}
                      onChange={(event) => changeOtp(index, event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Backspace' && !otp[index] && index > 0)
                          otpRefs.current[index - 1]?.focus()
                      }}
                      className="h-12 min-w-0 flex-1 rounded-xl border border-[#cbd9e8] bg-white text-center text-lg font-bold text-[#123d7a] outline-none transition focus:border-[#123d7a] focus:ring-4 focus:ring-[#dbeafe]"
                      aria-label={`Digit ${index + 1}`}
                    />
                  ))}
                </div>
              </fieldset>
              <button
                disabled={!otp.every(Boolean)}
                className="mt-7 h-12 w-full rounded-xl bg-[#123d7a] text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,61,122,0.22)] transition enabled:hover:bg-[#0c3065] disabled:cursor-not-allowed disabled:bg-[#c8d0da] disabled:shadow-none"
              >
                Verify code
              </button>
              <button
                type="button"
                onClick={() => setMode('email')}
                className="mt-5 w-full text-sm font-semibold text-[#1b5d9f] hover:underline"
              >
                Use a different email
              </button>
            </form>
          )}

          {mode === 'reset' && (
            <form onSubmit={submitNewPassword} className="space-y-5">
              <PasswordInput
                label="New password"
                value={newPassword}
                onChange={setNewPassword}
                placeholder="Minimal 8 karakter"
              />
              <PasswordInput
                label="Confirm new password"
                value={confirmation}
                onChange={setConfirmation}
                placeholder="Re-enter your new password"
              />
              {confirmation && newPassword !== confirmation && (
                <p className="-mt-2 text-xs font-medium text-[#c33a44]">Passwords do not match.</p>
              )}
              <button
                disabled={!resetActive}
                className="h-12 w-full rounded-xl bg-[#123d7a] text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,61,122,0.22)] transition enabled:hover:bg-[#0c3065] disabled:cursor-not-allowed disabled:bg-[#c8d0da] disabled:shadow-none"
              >
                Save new password
              </button>
            </form>
          )}

          {mode === 'complete' && (
            <div>
              <div className="mb-7 grid size-14 place-items-center rounded-full bg-[#e1f4e6] text-2xl text-[#278243]">
                ✓
              </div>
              <Link
                href="/"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#123d7a] text-sm font-bold text-white shadow-[0_8px_18px_rgba(18,61,122,0.22)] transition hover:bg-[#0c3065]"
              >
                Back to sign in
              </Link>
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-[#69809b]">
          © 2026 Sambu Group. All rights reserved.
        </p>
      </section>
    </main>
  )
}
