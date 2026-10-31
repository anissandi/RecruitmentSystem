'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type IconName =
  | 'home'
  | 'chart'
  | 'users'
  | 'calendar'
  | 'briefcase'
  | 'file'
  | 'layers'
  | 'message'
  | 'settings'
  | 'bell'
  | 'camera'
  | 'arrow'
  | 'search'
  | 'chevronLeft'
  | 'chevronRight'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <path d="M3.5 10.5 12 3l8.5 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-4.5v-6h-5v6H5A1.5 1.5 0 0 1 3.5 19.5v-9Z" />
    ),
    chart: (
      <>
        <path d="M4 20V4M4 20h17" />
        <path d="M8 16v-4M13 16V7M18 16v-7" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.6-3.7 2.5-5.5 5.5-5.5s4.9 1.8 5.5 5.5M16 5.5a3 3 0 0 1 0 5.7M17 14.7c2.1.5 3.2 2.2 3.5 5.3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
        <path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18M10 12v2h4v-2" />
      </>
    ),
    file: (
      <>
        <path d="M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
        <path d="M14 3.5V8h4M8.5 12h7M8.5 16h7" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
        <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
      </>
    ),
    message: (
      <path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h10a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 17 16H10l-4.5 4v-4A2.5 2.5 0 0 1 3 13.5v-8Z" />
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="m19.4 15 .1 1.8-2.1 2.1-1.8-.1-1.1 1.1-.1 1.8h-3l-.1-1.8-1.1-1.1-1.8.1-2.1-2.1.1-1.8L5.3 14l-1.8-.1v-3l1.8-.1 1.1-1.1-.1-1.8 2.1-2.1 1.8.1 1.1-1.1.1-1.8h3l.1 1.8 1.1 1.1 1.8-.1 2.1 2.1-.1 1.8 1.1 1.1 1.8.1v3l-1.8.1-1.1 1.1Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 10a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 22h4" />
      </>
    ),
    camera: (
      <>
        <path d="M4 8h11l2 2h3v9.5A1.5 1.5 0 0 1 18.5 21h-14A1.5 1.5 0 0 1 3 19.5v-10A1.5 1.5 0 0 1 4.5 8Z" />
        <circle cx="11.5" cy="14.5" r="3" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    search: <><circle cx="10.8" cy="10.8" r="5.8" /><path d="m15.2 15.2 4.3 4.3" /></>,
    chevronLeft: <path d="m14.5 5-7 7 7 7" />,
    chevronRight: <path d="m9.5 5 7 7-7 7" />,
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current stroke-[1.7]`}
    >
      {paths[name]}
    </svg>
  )
}

const menu = [
  ['Home', 'home'],
  ['Analytics Dashboard', 'chart'],
  ['Recruitment Process', 'users'],
  ['Interview Schedule', 'calendar'],
  ['Job Openings', 'briefcase'],
  ['Employee Requests', 'users'],
  ['Reports', 'file'],
  ['Online Assessment Content', 'layers'],
  ['Career Website Content', 'file'],
  ['Candidate Feedback', 'message'],
] as const

const notifications = [
  ['8', 'Communication Specialist', 'Sambu Group', 'has not been processed yet.'],
  ['11', 'Legal Permit Officer', 'STI', 'is pending in the online assessment stage.'],
  ['2', 'Legal Permit Officer', 'STI', 'is pending in the initial interview stage.'],
  [
    '1',
    'Training & Development Officer',
    'Sambu Group',
    'is pending in the offering letter stage.',
  ],
]

const requests = [
  ['Legal Permit Officer', 'Legal Department · Sambu Group', '20 Oct 2024', '1 person [0]'],
  ['Office Boy', 'Central Office · Sambu Jakarta', '01 Sep 2024', '1 person [0]'],
  ['Front-end Programmer', 'Information Technology · Sambu Group', '19 Oct 2024', '2 people [1]'],
  [
    'Communication Specialist',
    'Corporate Communication · Sambu Group',
    '03 Sep 2024',
    '1 person [0]',
  ],
]

const interviews = [
  [
    'Febry Siregar',
    'Front-end Programmer',
    'HR Meeting Room 1',
    'Initial interview',
    '29 Sep 2024',
    '09:00 – 11:00 AM',
  ],
  [
    'Febry Siregar',
    'HR Officer',
    'HR Meeting Room 1',
    'User interview',
    '29 Sep 2024',
    '13:00 – 14:00 AM',
  ],
  [
    'Farah Pangaribuan',
    'Communication Specialist',
    'HR Meeting Room 2',
    'Initial interview',
    '01 Nov 2024',
    '10:00 – 12:00 AM',
  ],
  [
    'Rury Illenia',
    'Communication Specialist',
    'Management Meeting Room',
    'User interview',
    '02 Nov 2024',
    '13:00 – 15:00 AM',
  ],
]

const metrics = [
  ['Candidates in review', '24', 'Across 6 open roles', 'chart', 'bg-[#dfe9fb] text-[#244d89]'],
  ['Interviews today', '4', '2 awaiting feedback', 'calendar', 'bg-[#dff1e9] text-[#287a67]'],
  ['Pending actions', '11', 'Requires follow-up', 'users', 'bg-[#f6e8d8] text-[#b26644]'],
  ['Offer acceptance', '78%', 'This recruitment cycle', 'briefcase', 'bg-[#eee5f7] text-[#6c4b91]'],
] as const

const analyticsKpis = [
  ['Unreviewed candidates', '3,201', '+40.1% this week', 'users', 'bg-[#1f2944]'],
  ['Candidates in process', '204', '+2.1% this week', 'chart', 'bg-[#4f6da5]'],
  ['Talent pool', '307', '+14.1% this week', 'layers', 'bg-[#247086]'],
  ['Candidates rejected', '112', '−3.1% this week', 'file', 'bg-[#e9af32]'],
  ['Candidates blacklisted', '8', '0.0% this week', 'users', 'bg-[#df5962]'],
] as const

const vacancyVolume = [
  ['HR Analyst', 126, 'h-[32%]', '[animation-delay:40ms]', 'from-[#4b8ed0] to-[#315d9d]'],
  ['Head of IT', 182, 'h-[50%]', '[animation-delay:90ms]', 'from-[#4aa9a3] to-[#287c83]'],
  ['HR Officer', 348, 'h-[88%]', '[animation-delay:140ms]', 'from-[#686fc4] to-[#474c9a]'],
  ['System Security', 164, 'h-[44%]', '[animation-delay:190ms]', 'from-[#d58c66] to-[#b85d50]'],
  ['Industrial Engineer', 380, 'h-[96%]', '[animation-delay:240ms]', 'from-[#d4a54d] to-[#b67a35]'],
  ['IT Governance', 194, 'h-[53%]', '[animation-delay:290ms]', 'from-[#5b9bc3] to-[#3376ae]'],
  ['Front-end', 78, 'h-[25%]', '[animation-delay:340ms]', 'from-[#a47ab6] to-[#79558f]'],
  ['Engineer', 269, 'h-[67%]', '[animation-delay:390ms]', 'from-[#4dafa1] to-[#267e75]'],
  ['Staff Finance', 321, 'h-[78%]', '[animation-delay:440ms]', 'from-[#7296c8] to-[#4b68a8]'],
  ['Communication', 342, 'h-[84%]', '[animation-delay:490ms]', 'from-[#d87c86] to-[#b64c65]'],
] as const

const pipeline = [
  ['Not applied', '428', 'w-full', 'bg-[#b6bec9]'],
  ['Not processed', '3,201', 'w-[92%]', 'bg-[#4f6da5]'],
  ['Applied', '1,240', 'w-full', 'bg-[#294f89]'],
  ['Screening', '682', 'w-[74%]', 'bg-[#4779ae]'],
  ['Interview', '204', 'w-[48%]', 'bg-[#6b9bbd]'],
  ['Offer', '67', 'w-[27%]', 'bg-[#88ad95]'],
  ['Hired', '36', 'w-[16%]', 'bg-[#d5a95d]'],
  ['Rejected', '112', 'w-[11%]', 'bg-[#dc746e]'],
  ['Blacklisted', '8', 'w-[5%]', 'bg-[#2c3448]'],
] as const

const educationHires = [
  ['SD', 12, 'h-[13%]'], ['SMP', 19, 'h-[20%]'], ['SMK', 54, 'h-[55%]'], ['SMA', 63, 'h-[64%]'],
  ['D1', 17, 'h-[18%]'], ['D2', 21, 'h-[22%]'], ['D3', 46, 'h-[47%]'], ['D4', 31, 'h-[32%]'],
  ['S1', 98, 'h-[100%]'], ['S2', 41, 'h-[42%]'], ['S3', 11, 'h-[12%]'],
] as const

const companyUnits = [
  ['PS (Group)', 78, 'h-[100%]', 'from-[#294f89] to-[#456fac]'], ['PS (Jakarta)', 63, 'h-[81%]', 'from-[#347e9c] to-[#57a6a1]'], ['PS (Kuala Enok)', 48, 'h-[62%]', 'from-[#705dae] to-[#9683cc]'], ['PS (Guntung)', 42, 'h-[54%]', 'from-[#d18a57] to-[#e0b36a]'],
  ['PS (Batam)', 36, 'h-[46%]', 'from-[#4c96c7] to-[#75b8dd]'], ['RSUP (Idn)', 32, 'h-[41%]', 'from-[#b95e69] to-[#dd8b89]'], ['RSUP (Pkb)', 28, 'h-[36%]', 'from-[#739861] to-[#9abb78]'], ['RSTM', 22, 'h-[28%]', 'from-[#5377ab] to-[#7898c7]'],
  ['GHS', 19, 'h-[24%]', 'from-[#b4759d] to-[#d19cbc]'], ['STI (Jakarta)', 31, 'h-[40%]', 'from-[#3d8e8a] to-[#6db5a4]'], ['STI (Batam)', 25, 'h-[32%]', 'from-[#c28a41] to-[#d9b464]'], ['YBDA', 14, 'h-[18%]', 'from-[#8d75ba] to-[#af98d2]'],
  ['KNP', 17, 'h-[22%]', 'from-[#5f93a0] to-[#85b7b4]'], ['BPI', 21, 'h-[27%]', 'from-[#b16c5e] to-[#d0927d]'],
] as const

const originHires = [
  ['DKI Jakarta', '28%', 'bg-[#294f89]'],
  ['Riau', '24%', 'bg-[#247086]'],
  ['Kepulauan Riau', '17%', 'bg-[#e9af32]'],
  ['Jawa Tengah', '12%', 'bg-[#df5962]'],
  ['Jawa Barat', '11%', 'bg-[#7183dc]'],
  ['Sumatera Selatan', '8%', 'bg-[#88ad95]'],
] as const

function CardHeader({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#62738b]">
        {children}
      </h2>
      {action}
    </div>
  )
}

function AnalyticsPanel() {
  return (
    <section className="animate-[analytics-fade_500ms_ease-out_both]">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f5791]">Recruitment intelligence</p>
          <h1 className="text-[30px] font-bold tracking-[-0.045em] text-[#172e4d] sm:text-[35px]">Analytics dashboard</h1>
          <p className="mt-2 text-sm text-[#67758a]">Monitor hiring volume, candidate flow, and recruitment outcomes.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['This year', 'All companies', 'All positions'].map((filter) => <button key={filter} className="rounded-lg border border-[#e3dacf] bg-white/75 px-3 py-2 text-xs font-semibold text-[#536a85] transition hover:border-[#9eb3ce] hover:bg-white">{filter}</button>)}
        </div>
      </div>

      <div className="mb-6 overflow-x-auto pb-1">
        <div className="grid min-w-[780px] grid-cols-5 gap-3">
        {analyticsKpis.map(([label, value, trend, icon, tone], index) => (
          <article key={label} className={`animate-[analytics-fade_500ms_ease-out_both] ${index === 1 ? '[animation-delay:60ms]' : index === 2 ? '[animation-delay:120ms]' : index === 3 ? '[animation-delay:180ms]' : index === 4 ? '[animation-delay:240ms]' : ''} relative overflow-hidden rounded-[15px] p-3.5 text-white shadow-[0_8px_18px_rgba(36,52,76,0.11)] ${tone}`}>
            <div className="absolute -right-5 -top-5 size-16 rounded-full border-8 border-white/10" />
            <div className="relative flex items-start justify-between gap-2"><p className="text-[11px] font-medium leading-4 text-white/85">{label}</p><Icon name={icon} className="size-[18px] shrink-0 text-white/85" /></div>
            <p className="relative mt-2.5 text-[27px] font-bold leading-none tracking-[-0.05em]">{value}</p>
            <p className="relative mt-3 text-[10px] font-medium text-white/80"><span className="mr-1 text-[#b8f2a0]">↗</span>{trend}</p>
          </article>
        ))}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)]">
        <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.8)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <CardHeader action={<span className="rounded-full bg-[#e8eef8] px-2.5 py-1 text-[11px] font-bold text-[#335889]">+12.8% total</span>}>Applications by active vacancy</CardHeader>
          <div className="flex h-[276px] items-end gap-2 border-b border-[#e8e2d8] pt-5 sm:gap-3">
            {vacancyVolume.map(([label, value, height, delay, color]) => (
              <div key={label} className="group flex h-full min-w-0 flex-1 flex-col justify-end gap-1.5">
                <span className="text-center text-[10px] font-bold text-[#355271] opacity-0 transition duration-200 group-hover:opacity-100">{value}</span>
                <div className="relative flex h-full items-end rounded-t-lg bg-[#eaf0f8]">
                  <div title={`${label}: ${value} candidates`} className={`w-full origin-bottom rounded-t-lg bg-gradient-to-b ${color} ${height} ${delay} animate-[analytics-rise_850ms_cubic-bezier(.2,.7,.2,1)_both] transition duration-300 group-hover:scale-x-110 group-hover:brightness-110 group-hover:shadow-[0_0_16px_rgba(52,105,177,0.38)]`} />
                </div>
                <p className="h-7 overflow-hidden text-center text-[9px] leading-3 text-[#7b8898]">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-[#7b8898]"><span>0 candidates</span><span>Peak: Industrial Engineer · 380 candidates</span></div>
        </section>

        <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.8)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <CardHeader>Candidate sources</CardHeader>
          <div className="flex items-center justify-center py-2">
            <div className="relative grid size-44 place-items-center rounded-full bg-[conic-gradient(#0f7896_0_48%,#f1b04c_48%_67%,#7183dc_67%_82%,#fb6e43_82%_100%)] animate-[analytics-spin_900ms_ease-out_both]">
              <div className="grid size-28 place-items-center rounded-full bg-[#fffdfa] text-center"><strong className="block text-2xl tracking-[-0.05em] text-[#173553]">48%</strong><span className="text-[10px] font-medium text-[#7e8a98]">Career portal</span></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-[#62738b]">
            {[['bg-[#0f7896]', 'Career portal', '48%'], ['bg-[#f1b04c]', 'Referral', '19%'], ['bg-[#7183dc]', 'Social media', '15%'], ['bg-[#fb6e43]', 'Job portal', '18%']].map(([color, label, value]) => <div key={label} className="flex items-center justify-between"><span className="flex items-center gap-1.5"><i className={`size-2 rounded-full ${color}`} />{label}</span><b className="text-[#3d526c]">{value}</b></div>)}
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
        <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.8)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <CardHeader action={<span className="text-xs font-semibold text-[#4273a1]">Updated 5 minutes ago</span>}>Candidate pipeline</CardHeader>
          <div className="space-y-4">
            {pipeline.map(([stage, amount, width, color], index) => (
              <div key={stage} className="grid grid-cols-[104px_1fr_48px] items-center gap-3 text-xs">
                <span className="font-semibold text-[#52657d]">{stage}</span>
                <span className="h-3 overflow-hidden rounded-full bg-[#edf0ec]"><i className={`block h-full rounded-full ${color} ${width} animate-[analytics-scale-x_700ms_cubic-bezier(.2,.7,.2,1)_both] ${index === 1 ? '[animation-delay:80ms]' : index === 2 ? '[animation-delay:160ms]' : index === 3 ? '[animation-delay:240ms]' : index === 4 ? '[animation-delay:320ms]' : ''}`} /></span>
                <b className="text-right text-[#334d69]">{amount}</b>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[#f7f2e9] px-4 py-3 text-xs text-[#65758a]"><b className="text-[#314c6c]">Recruitment insight:</b> The largest conversion drop occurs between screening and interview. Consider automating screening reminders.</div>
        </section>

        <section className="relative overflow-hidden rounded-[20px] border border-[#e7dfd4] bg-[linear-gradient(145deg,#f1f6fd,#fbf0e5)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <div className="absolute -right-8 -top-10 size-32 rounded-full border-[18px] border-[#d6e5f8]/70" />
          <CardHeader>Hiring momentum</CardHeader>
          <p className="text-[31px] font-bold leading-none tracking-[-0.05em] text-[#234b82]">+18.4%</p>
          <p className="mt-2 text-xs text-[#6a7b8e]">More qualified candidates compared to last month.</p>
          <svg viewBox="0 0 280 78" className="mt-6 h-20 w-full overflow-visible" role="img" aria-label="Applications trending upward">
            <path d="M3 66 C26 60 35 50 52 55 S82 25 103 39 S131 46 150 29 S183 42 204 21 S239 26 277 5" fill="none" stroke="#2f70bb" strokeWidth="4" strokeLinecap="round" className="animate-[analytics-draw_1.2s_ease-out_both]" />
            <path d="M3 66 C26 60 35 50 52 55 S82 25 103 39 S131 46 150 29 S183 42 204 21 S239 26 277 5 L277 78 L3 78Z" fill="url(#momentum-fill)" opacity=".24" />
            <defs><linearGradient id="momentum-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#78aee6" /><stop offset="1" stopColor="#d9eafb" stopOpacity="0" /></linearGradient></defs>
          </svg>
          <div className="mt-3 flex justify-between text-[10px] font-medium text-[#8794a4]"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div>
        </section>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.8)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <CardHeader action={<span className="text-xs font-semibold text-[#4273a1]">Total hires · 413</span>}>Hires by education</CardHeader>
          <div className="flex h-[230px] items-end gap-2 border-b border-[#ebe4d9] pt-3 sm:gap-3">
            {educationHires.map(([level, value, height], index) => (
              <div key={level} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-1.5">
                <span className="text-center text-[11px] font-bold text-[#2f4f78]">{value}</span>
                <div className="flex min-h-0 flex-1 items-end rounded-t-md bg-[#f0eee8]">
                  <i className={`block w-full origin-bottom rounded-t-md bg-[linear-gradient(180deg,#4b9fea,#345d9b)] ${height} animate-[analytics-rise_750ms_cubic-bezier(.2,.7,.2,1)_both] ${index > 0 ? '[animation-delay:80ms]' : ''}`} />
                </div>
                <span className="pb-1 text-center text-[10px] font-semibold text-[#718096]">{level}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#708095]"><b className="text-[#314d70]">S1</b> is the most common education level among hires, followed by SMA and SMK.</p>
        </section>

        <section className="relative overflow-hidden rounded-[20px] border border-[#e7dfd4] bg-[linear-gradient(135deg,#f2f7fc,#faf0e6)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
          <CardHeader>Hires by origin</CardHeader>
          <div className="relative grid items-center gap-6 sm:grid-cols-[190px_1fr]">
            <div className="mx-auto size-[180px] rounded-full bg-[conic-gradient(#294f89_0_28%,#247086_28%_52%,#e9af32_52%_69%,#df5962_69%_81%,#7183dc_81%_92%,#88ad95_92%_100%)] shadow-[0_12px_26px_rgba(41,79,137,0.16)] ring-8 ring-white/60 animate-[analytics-spin_900ms_ease-out_both]" role="img" aria-label="Hires by origin pie chart" />
            <ul className="space-y-2.5 text-xs text-[#62738b]">
              {originHires.map(([origin, share, color]) => <li key={origin} className="flex items-center justify-between gap-3"><span className="flex items-center gap-2"><i className={`size-2.5 rounded-full ${color}`} />{origin}</span><b className="text-[#35506f]">{share}</b></li>)}
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
      <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.8)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
        <CardHeader action={<span className="rounded-full bg-[#e7f2e9] px-2.5 py-1 text-[11px] font-bold text-[#327261]">14 company units</span>}>Hires by company unit</CardHeader>
        <div className="overflow-x-auto pb-2">
          <div className="flex h-[280px] min-w-[600px] items-end gap-2 border-b border-[#ebe4d9] pt-3">
          {companyUnits.map(([unit, total, height, color], index) => (
              <div key={unit} className="group flex h-full min-w-0 flex-1 flex-col justify-end gap-1.5">
                <span className="text-center text-[11px] font-bold text-[#2f4f78] transition duration-200 group-hover:scale-110 group-hover:text-[#173d72]">{total}</span>
                <div className="flex min-h-0 flex-1 items-end rounded-t-md bg-[#f0eee8]">
                  <i title={`${unit}: ${total} hires`} className={`block w-full origin-bottom rounded-t-md bg-gradient-to-b ${color} ${height} animate-[analytics-rise_750ms_cubic-bezier(.2,.7,.2,1)_both] ${index % 3 === 1 ? '[animation-delay:90ms]' : index % 3 === 2 ? '[animation-delay:180ms]' : ''} transition duration-300 group-hover:scale-x-110 group-hover:brightness-110 group-hover:shadow-[0_0_16px_rgba(52,105,177,0.35)]`} />
                </div>
                <span className="h-9 pb-1 text-center text-[8px] font-semibold leading-3 text-[#718096]" title={unit}>{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[20px] border border-[#e7dfd4] bg-[linear-gradient(145deg,#f1f6fd,#fbf0e5)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
        <div aria-hidden="true" className="absolute -right-8 -top-10 size-32 rounded-full border-[18px] border-[#d6e5f8]/70" />
        <CardHeader>Average time to hire</CardHeader>
        <p className="text-[38px] font-bold leading-none tracking-[-0.06em] text-[#234b82]">26 <span className="text-lg tracking-normal">days</span></p>
        <p className="mt-2 text-xs text-[#6a7b8e]">Average time from application to accepted offer.</p>
        <ol className="mt-6 space-y-3">
          {[
            ['Screening', '4 days', 'w-[16%]'],
            ['Interview process', '15 days', 'w-[58%]'],
            ['Offer & onboarding', '7 days', 'w-[27%]'],
          ].map(([stage, duration, width]) => (
            <li key={stage} className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-xs">
              <div className="flex items-center justify-between font-semibold text-[#3d526c]"><span>{stage}</span><b className="text-[#234b82]">{duration}</b></div>
              <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-[#e7edf3]"><i className={`block h-full rounded-full bg-[#5b91c7] ${width} animate-[analytics-scale-x_700ms_cubic-bezier(.2,.7,.2,1)_both]`} /></span>
            </li>
          ))}
        </ol>
      </section>
      </div>
    </section>
  )
}

export default function DashboardPage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeView, setActiveView] = useState<'home' | 'analytics'>('home')
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const matches = (values: string[]) => !normalizedQuery || values.join(' ').toLowerCase().includes(normalizedQuery)
  const filteredNotifications = notifications.filter((notification) => matches(notification))
  const filteredRequests = requests.filter((request) => matches(request))
  const filteredInterviews = interviews.filter((interview) => matches(interview))
  const filteredMenu = menu.filter(([label]) => matches([label]))

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#fbf8f2] font-[Arial,Helvetica,sans-serif] text-[#172e4d]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-36 size-[430px] rounded-full bg-[#e3edf9]/65 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-[420px] size-[480px] rounded-full bg-[#f7e9d8]/55 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[18%] top-[125px] h-32 w-52 opacity-40 [background-image:radial-gradient(#a9b9ce_1px,transparent_1px)] [background-size:12px_12px]" />
      <header className="relative sticky top-0 z-20 flex h-[64px] items-center gap-4 border-b border-[#e8e0d4] bg-[rgba(255,253,249,0.9)] px-4 backdrop-blur-xl sm:px-6">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/sambu-career.png"
            width={208}
            height={52}
            alt="Sambu Career"
            unoptimized
            priority
            className="h-auto w-[132px] sm:w-[150px]"
          />
        </Link>
        <form onSubmit={(event) => event.preventDefault()} className="mx-auto hidden w-full max-w-[450px] md:block">
          <label className="relative block">
            <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-[#758194]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search candidates, roles, or schedules..."
              className="h-10 w-full rounded-xl border border-[#e7ded2] bg-[#f8f4ed] pl-11 pr-4 text-sm text-[#263d5c] outline-none transition placeholder:text-[#8b95a2] focus:border-[#234e88] focus:bg-white focus:ring-4 focus:ring-[#dfe9f8]"
            />
          </label>
        </form>
        <div className="flex items-center gap-3 sm:gap-5">
          <button
            aria-label="Notifications"
            className="relative grid size-9 place-items-center rounded-full border border-[#d9e4d9] bg-white/70 text-[#1e5a92] transition hover:bg-white"
          >
            <Icon name="bell" className="size-[18px]" />
            <span className="absolute right-1 top-1 size-2 rounded-full border border-white bg-[#e34c4c]" />
          </button>
          <div className="hidden h-7 w-px bg-[#dfe7df] sm:block" />
          <div className="hidden text-right sm:block">
            <p className="text-sm font-bold text-[#213d60]">Rury Illenia</p>
            <p className="text-[11px] text-[#73839a]">Talent Management Officer</p>
          </div>
          <div className="grid size-10 place-items-center rounded-full bg-[linear-gradient(135deg,#1b5a90,#9ac6b0)] text-sm font-bold text-white ring-2 ring-white">
            RI
          </div>
        </div>
      </header>

      <div className="relative z-10 flex min-h-[calc(100vh-64px)]">
        <aside className={`hidden shrink-0 flex-col border-r border-[#e8e0d4] bg-[rgba(255,253,249,0.88)] py-5 transition-[width] duration-300 lg:flex ${isSidebarCollapsed ? 'w-[72px] px-3' : 'w-[250px] px-4'}`}>
          <div className={`mb-5 flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between px-2'}`}>
            {!isSidebarCollapsed && <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8790a0]">Workspace</p>}
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'} className="grid size-8 place-items-center rounded-lg text-[#718096] transition hover:bg-[#f2eee6] hover:text-[#234e88]">
              <Icon name={isSidebarCollapsed ? 'chevronRight' : 'chevronLeft'} className="size-[17px]" />
            </button>
          </div>
          <nav aria-label="Main navigation" className="space-y-1">
            {filteredMenu.map(([label, icon], index) => (
              <a
                key={label}
                href={label === 'Analytics Dashboard' ? '#analytics' : '#home'}
                onClick={() => setActiveView(label === 'Analytics Dashboard' ? 'analytics' : 'home')}
                title={isSidebarCollapsed ? label : undefined}
                className={`flex items-center rounded-xl py-2.5 text-[13px] font-semibold transition ${isSidebarCollapsed ? 'justify-center px-0' : 'gap-3 px-3'} ${((label === 'Home' && activeView === 'home') || (label === 'Analytics Dashboard' && activeView === 'analytics')) ? 'bg-[#e4ecf9] text-[#193d72]' : 'text-[#59677a] hover:bg-[#f5f1e9] hover:text-[#193d72]'}`}
              >
                <Icon name={icon} className="size-[17px]" />
                {!isSidebarCollapsed && label}
              </a>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#e8e0d4] pt-4">
            <a
              href="#"
              title={isSidebarCollapsed ? 'Settings' : undefined}
              className={`flex items-center rounded-xl py-2.5 text-[13px] font-semibold text-[#59677a] transition hover:bg-[#f5f1e9] hover:text-[#193d72] ${isSidebarCollapsed ? 'justify-center px-0' : 'gap-3 px-3'}`}
            >
              <Icon name="settings" className="size-[17px]" />
              {!isSidebarCollapsed && 'Settings'}
            </a>
          </div>
        </aside>

        <section id={activeView === 'analytics' ? 'analytics' : 'home'} className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-9 lg:py-9">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <span className="text-sm font-bold text-[#213d60]">Home</span>
            <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="rounded-lg border border-[#e3dacf] bg-white px-3 py-1.5 text-xs font-semibold text-[#315d88]">
              Menu
            </button>
          </div>
          {activeView === 'analytics' ? <AnalyticsPanel /> : <><section className="relative mb-6 flex flex-wrap items-end justify-between gap-5 overflow-hidden rounded-[22px] border border-[#e8dfd2] bg-[rgba(255,253,249,0.68)] px-5 py-6 shadow-[0_12px_30px_rgba(83,66,42,0.05)] sm:px-6">
            <div aria-hidden="true" className="pointer-events-none absolute -right-7 -top-9 size-36 rounded-[36%_64%_63%_37%] border-[14px] border-[#dfeaf8]/70" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-[-58px] right-28 size-32 rounded-full bg-[#f5e2ce]/70 blur-xl" />
            <div className="relative">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f5791]">Friday, 29 September</p>
              <h1 className="text-[30px] font-bold tracking-[-0.045em] text-[#172e4d] sm:text-[35px]">Good afternoon, Rury.</h1>
              <p className="mt-2 text-sm text-[#67758a]">Here is a snapshot of your recruitment workspace today.</p>
            </div>
            <button className="relative inline-flex h-11 items-center gap-2 rounded-xl bg-[#244d89] px-4 text-sm font-bold text-white shadow-[0_8px_16px_rgba(36,77,137,0.2)] transition hover:-translate-y-0.5 hover:bg-[#193d72]"><span className="text-lg font-normal">+</span> Add candidate</button>
          </section>

          <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#d9e2ef] bg-[linear-gradient(90deg,#e8effa,#faf1e8)] px-4 py-3 text-sm text-[#536b88]">
            <span className="size-2 shrink-0 rounded-full bg-[#2d887d]" />
            <span className="font-medium">Today’s focus:</span><span className="font-semibold text-[#284365]">4 interviews and 11 candidate actions require your attention.</span>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map(([label, value, caption, icon, tone]) => (
              <article key={label} className="group relative overflow-hidden rounded-[18px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.78)] p-4 shadow-[0_8px_24px_rgba(83,66,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(83,66,42,0.1)]">
                <span aria-hidden="true" className={`absolute -bottom-8 -right-6 size-24 rounded-full opacity-30 transition duration-300 group-hover:scale-125 ${tone.split(' ').find((token) => token.startsWith('bg-'))}`} />
                <div className="flex items-start justify-between"><p className="text-[13px] font-medium text-[#5f6d7d]">{label}</p><span className={`grid size-9 place-items-center rounded-xl ${tone}`}><Icon name={icon} className="size-[18px]" /></span></div>
                <p className="mt-3 text-[29px] font-bold leading-none tracking-[-0.05em] text-[#1b304d]">{value}</p>
                <p className="mt-3 text-[11px] text-[#8390a0]">{caption}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.95fr)]">
            <div className="space-y-6">
              <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.78)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
                <CardHeader
                  action={
                    <button className="text-xs font-semibold text-[#4273a1] hover:text-[#183f6e]">
                      View all
                    </button>
                  }
                >
                  Notifications
                </CardHeader>
                <ul className="space-y-3">
                  {filteredNotifications.length ? filteredNotifications.map(([count, role, group, status]) => (
                    <li
                      key={role + status}
                      className="flex gap-3 text-[13px] leading-5 text-[#586b81]"
                    >
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#e35a55]" />
                      <span>
                        <b className="font-semibold text-[#29435f]">[{count}] candidates</b> for{' '}
                        <b className="font-semibold text-[#29435f]">{role}</b> · {group} {status}
                      </span>
                    </li>
                  )) : <li className="rounded-lg bg-[#faf6ef] px-3 py-4 text-center text-xs text-[#7e8a98]">No notifications match your search.</li>}
                </ul>
                <div className="mt-7 flex items-center justify-between border-t border-[#e4ebe2] pt-4 text-[11px] font-medium text-[#93a0af]">
                  <button>‹ Previous</button>
                  <span>● ● ●</span>
                  <button>Next ›</button>
                </div>
              </section>

              <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.78)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
                <CardHeader
                  action={
                    <button className="text-xs font-semibold text-[#4273a1] hover:text-[#183f6e]">
                      All requests <Icon name="arrow" className="ml-1 inline size-3.5" />
                    </button>
                  }
                >
                  Open employee requests
                </CardHeader>
                <div className="space-y-2">
                  {filteredRequests.length ? filteredRequests.map(([role, department, date, count]) => (
                    <article
                      key={role}
                      className="flex items-center justify-between gap-4 rounded-xl border border-[#e8eee6] bg-white/70 px-4 py-3"
                    >
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.02em] text-[#29435f]">
                          {role}
                        </h3>
                        <p className="mt-0.5 text-[11px] text-[#748399]">{department}</p>
                        <p className="mt-1 text-[11px] font-semibold text-[#526b75]">{date}</p>
                      </div>
                      <span className="shrink-0 text-xs font-bold text-[#34536d]">{count}</span>
                    </article>
                  )) : <p className="rounded-lg bg-[#faf6ef] px-3 py-4 text-center text-xs text-[#7e8a98]">No employee requests match your search.</p>}
                </div>
              </section>
            </div>

            <section className="rounded-[20px] border border-[#e7dfd4] bg-[rgba(255,254,251,0.78)] p-5 shadow-[0_10px_28px_rgba(83,66,42,0.05)] sm:p-6">
              <CardHeader
                action={
                  <button className="rounded-lg border border-[#d9e3d7] bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-[#61758e]">
                    All schedules
                  </button>
                }
              >
                Interview schedule
              </CardHeader>
              <p className="mb-3 text-[11px] font-medium text-[#8694a4]">
                Friday, 29 September 2024
              </p>
              <div className="space-y-2">
                {filteredInterviews.length ? filteredInterviews.map(([name, role, room, type, date, time]) => (
                  <article
                    key={name + type}
                    className="rounded-[15px] border border-white/30 bg-[linear-gradient(110deg,#1478c6,#339ac8)] p-3.5 text-white shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/15">
                        <Icon name="camera" className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-bold">{name}</h3>
                        <p className="truncate text-[11px] text-white/80">{role}</p>
                        <p className="mt-0.5 truncate text-[10px] font-semibold text-[#e6f078]">
                          {room}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-[#ebf17e]">{type}</p>
                        <p className="mt-0.5 text-[10px] font-medium text-white/90">{date}</p>
                        <p className="text-[10px] font-semibold text-[#e6f078]">{time}</p>
                      </div>
                    </div>
                  </article>
                )) : <p className="rounded-lg bg-[#faf6ef] px-3 py-4 text-center text-xs text-[#7e8a98]">No interviews match your search.</p>}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-dashed border-[#dce5da] bg-white/40 px-4 py-4 text-xs font-medium text-[#80909c]">
                <span className="grid size-7 place-items-center rounded-full border border-[#cbd8c9]">
                  <Icon name="calendar" className="size-4" />
                </span>{' '}
                No more interviews today
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[#e4ebe2] pt-4 text-[11px] font-medium text-[#93a0af]">
                <button>‹ Previous</button>
                <span>● ● ●</span>
                <button>Next ›</button>
              </div>
            </section>
          </div>
          </>}
        </section>
      </div>
    </main>
  )
}
