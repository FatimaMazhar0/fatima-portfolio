import { useState, useEffect, useRef } from 'react'
import {
  Mail, ExternalLink, ChevronLeft, ChevronRight,
  Code2, Wrench, PenLine, ArrowUp, Download, Menu, X,
  MessageSquare, Users, Monitor
} from 'lucide-react'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

// — Image imports —
import bloodDonationsImg from '../imports/blood_donations.jpg'
import doctorProfileImg from '../imports/doctor_profile.jpg'
import homeImg from '../imports/home.jpg'
import allHospitalsImg from '../imports/all-hospitals.jpg'
import featureGraphicImg from '../imports/health_care_app_feature_graphic__1_.png'
import samcardLandingImg from '../imports/image.png'
import samcardDashboardImg from '../imports/image-1.png'
import samcardEditorImg from '../imports/image-2.png'
import samcardQrImg from '../imports/image-3.png'
import resuflowLandingImg from '../imports/image-4.png'
import resuflowSignupImg from '../imports/image-5.png'
import resuflowUploadImg from '../imports/image-6.png'
import resuflowCustomizeImg from '../imports/image-7.png'
import resuflowLiveImg from '../imports/image-8.png'
import resumePdf from '../fatima mazhar resume.pdf'

const whatsappLink = 'https://wa.me/923302789440?text=Hi%20Fatima%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!'
const emailLink = 'mailto:mazharfatima23@gmail.com?subject=Hello%20Fatima'
const phoneLink = 'tel:+923302789440'

// ─── Typing animation hook ────────────────────────────────────────────────────
function useTypingCycle(phrases: string[], typeSpeed = 55, pause = 1800, deleteSpeed = 30) {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), typeSpeed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), deleteSpeed)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases, typeSpeed, pause, deleteSpeed])

  return phrases[phraseIdx].slice(0, charIdx)
}

// ─── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setVal(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

// ─── Intersection observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Stat counter card ────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1000, active)
  return (
    <div className="card-hover" style={{
      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 14, padding: '20px 22px', backdropFilter: 'blur(8px)',
    }}>
      <div className="font-display" style={{ fontSize: 30, fontWeight: 700, color: 'var(--accent-blue)', letterSpacing: '-0.02em' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)
  const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(11,15,25,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(31,41,55,0.7)' : 'none',
      transition: 'all 0.35s ease', padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #7C5CFF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff',
          }}>FM</div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden-mobile">
          <a href="https://github.com/FatimaMazhar0" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', display: 'flex', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          ><GithubIcon size={20} /></a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Fatima-Mazhar-Resume.pdf" className="btn-secondary" style={{ padding: '7px 18px', fontSize: 13 }}>Resume</a>
        </div>

        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '16px 24px' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{
              display: 'block', color: 'var(--text-primary)', textDecoration: 'none',
              padding: '10px 0', fontSize: 15, fontWeight: 500, borderBottom: '1px solid var(--border)',
            }}>{l}</a>
          ))}
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Fatima-Mazhar-Resume.pdf" style={{ display: 'block', marginTop: 12, color: 'var(--accent-blue)', fontWeight: 600, textDecoration: 'none' }}>Resume</a>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const roles = ['Full-Stack Developer', 'QA Engineer', 'AI/ML Enthusiast', 'React · Node · Python']
  const typed = useTypingCycle(roles)
  const { ref: statsRef, inView: statsVisible } = useInView(0.3)

  const stats = [
    { value: 5, suffix: '+', label: 'Projects Shipped' },
    { value: 150, suffix: '+', label: 'Bugs Resolved' },
    { value: 3, suffix: '', label: 'Internships' },
    { value: 94, suffix: '%', label: 'Model Accuracy' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Aurora blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '5%', left: '50%', width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(124,92,255,0.12) 0%, transparent 70%)',
          transform: 'translateX(-20%)',
          animation: 'auroraFloat1 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '10%', width: 500, height: 400,
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.09) 0%, transparent 70%)',
          animation: 'auroraFloat2 15s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 300,
          background: 'radial-gradient(ellipse, rgba(45,212,191,0.07) 0%, transparent 70%)',
          animation: 'auroraFloat1 18s ease-in-out infinite alternate-reverse',
        }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'center' }} className="hero-grid">
          {/* Left */}
          <div>
            <div className="animate-fadeup" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 9999, padding: '5px 14px', marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block', boxShadow: '0 0 8px var(--accent-green)', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 13, color: 'var(--accent-green)', fontWeight: 500 }}>Available for opportunities</span>
            </div>

            <h1 className="font-display animate-fadeup" style={{
              fontSize: 'clamp(42px, 7vw, 72px)', fontWeight: 700, lineHeight: 1.08,
              letterSpacing: '-0.03em', margin: '0 0 16px', color: 'var(--text-primary)',
              animationDelay: '0.1s',
            }}>Fatima Mazhar</h1>

            {/* Typing tagline */}
            <div className="animate-fadeup" style={{ fontSize: 'clamp(15px, 2.2vw, 20px)', color: 'var(--accent-blue)', fontWeight: 600, margin: '0 0 20px', minHeight: '1.5em', animationDelay: '0.2s', fontFamily: 'var(--font-display)' }}>
              {typed}<span style={{ borderRight: '2px solid var(--accent-blue)', marginLeft: 1, animation: 'blink 1s step-end infinite' }}>&nbsp;</span>
            </div>

            <p className="animate-fadeup" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 500, margin: '0 0 36px', animationDelay: '0.3s' }}>
              BS Computer Science student at FAST-NUCES Lahore, building full-stack products and exploring AI — from digital business cards to vision transformers for cancer detection.
            </p>

            {/* Floating code card */}
            <div className="animate-fadeup" style={{ marginBottom: 32, animationDelay: '0.35s' }}>
              <div style={{
                display: 'inline-block', background: 'rgba(17,24,39,0.9)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 10, padding: '12px 18px', fontFamily: 'monospace', fontSize: 13,
                color: 'var(--text-secondary)', backdropFilter: 'blur(8px)',
                animation: 'floatUpDown 4s ease-in-out infinite',
                boxShadow: '0 8px 32px rgba(59,130,246,0.1)',
              }}>
                <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28ca41', display: 'inline-block' }} />
                </div>
                <span style={{ color: '#7C5CFF' }}>const</span>{' '}
                <span style={{ color: '#3B82F6' }}>stack</span>{' = ['}
                <span style={{ color: '#2DD4BF' }}>'React'</span>{', '}
                <span style={{ color: '#2DD4BF' }}>'Node'</span>{', '}
                <span style={{ color: '#2DD4BF' }}>'AI'</span>{'];'}
              </div>
            </div>

            <div className="animate-fadeup" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32, animationDelay: '0.4s' }}>
              <a href="#projects" className="btn-primary">View Projects <ExternalLink size={14} /></a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" download="Fatima-Mazhar-Resume.pdf" className="btn-secondary"><Download size={14} /> Download Resume</a>
            </div>

            <div className="animate-fadeup" style={{ display: 'flex', gap: 10, animationDelay: '0.5s' }}>
              {[
                { icon: <GithubIcon size={18} />, href: 'https://github.com/FatimaMazhar0', label: 'GitHub' },
                { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/fatima-mazhar-54475a347/', label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: 'mailto:mazharfatima23@gmail.com', label: 'Email' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    color: 'var(--text-secondary)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-blue)'; e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Right: animated stat cards */}
          <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, minWidth: 260 }} className="hero-stats">
            {stats.map(s => <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} active={statsVisible} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Marquee tech strip ───────────────────────────────────────────────────────
const MARQUEE_TECHS = ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'Next.js', 'Express', 'Supabase', 'Tailwind CSS', 'AWS', 'Vercel', 'Git', 'Java', 'C++', 'PyTorch']
const MARQUEE_COLORS: Record<string, string> = {
  'React': '#61DAFB', 'Node.js': '#339933', 'TypeScript': '#3178C6', 'Python': '#3776AB',
  'MongoDB': '#47A248', 'PostgreSQL': '#4169E1', 'Next.js': '#FFFFFF', 'Express': '#FFFFFF',
  'Supabase': '#3ECF8E', 'Tailwind CSS': '#06B6D4', 'AWS': '#FF9900', 'Vercel': '#FFFFFF',
  'Git': '#F05032', 'Java': '#ED8B00', 'C++': '#00599C', 'PyTorch': '#EE4C2C',
}

function MarqueeStrip() {
  const items = [...MARQUEE_TECHS, ...MARQUEE_TECHS]
  return (
    <div style={{ overflow: 'hidden', padding: '20px 0', background: 'rgba(17,24,39,0.6)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 32, width: 'max-content' }} className="animate-marquee">
        {items.map((tech, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: MARQUEE_COLORS[tech] ?? '#fff', boxShadow: `0 0 6px ${MARQUEE_COLORS[tech] ?? '#fff'}`, display: 'inline-block' }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.02em' }}>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ padding: '96px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>About</span>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>Who I Am</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="about-grid">
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
              I'm a Computer Science student at FAST-NUCES Lahore (Expected 2027, CGPA 3.63), consistently on the Dean's List and ranked 3rd in my batch. I specialise in building full-stack web applications and have a growing focus on AI/ML research.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
              During my internship at AICE Xpert, I owned the end-to-end development of SAMCard — a digital business card platform — from REST API design and database schema to frontend and deployment. I also formally documented and resolved 150+ bugs through structured QA reporting.
            </p>
          </div>

          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
              {[
                { val: '3.63', label: 'CGPA', color: 'var(--accent-teal)' },
                { val: "Dean's List", label: 'Fall 2023 – Spring 2025', color: 'var(--accent-blue)' },
                { val: '3rd', label: 'in Batch — Spring 2024', color: 'var(--accent-violet)' },
                { val: '2027', label: 'Expected Graduation', color: 'var(--accent-green)' },
              ].map(({ val, label, color }) => (
                <div key={label} className="card-hover" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
                  <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color }}>{val}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>FAST-NUCES, Lahore — BS Computer Science</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>Cambridge A Levels: 1A*, 2As · 100% Scholarship</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>Cambridge O Levels: 8A*s · National Biology Distinction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  const jobs = [
    {
      icon: <Code2 size={16} />,
      role: 'Software Engineer Intern',
      company: 'Techlogix - OBDX Department',
      period: 'Jul 2026 – Aug 2026',
      bullets: [
        'Developed features for a project/task management dashboard within the Oracle Banking Digital Experience (OBDX) suite using SASS, Knockout.js, and Oracle JET',
        'Built TaskLite, a lightweight task management app, and packaged it as a cross-platform mobile app using Apache Cordova',
        'Worked with Require.js for modular JavaScript architecture and communicated directly with bank clients on requirements and feature feedback',
      ],
    },
    {
      icon: <Code2 size={16} />,
      role: 'Full Stack Development & QA Intern',
      company: 'AICE Xpert',
      period: 'Feb 2026 – Jul 2026',
      bullets: [
        'Built SAMCard, a full-stack digital business card platform (React.js, Node.js/Express, MongoDB, JWT auth, QR code verification)',
        'Owned end-to-end development: REST API design, database schema, frontend, deployment',
        'Documented and resolved 150+ bugs through formal QA reporting (validation, behavioral, UI defects)',
      ],
    },
    {
      icon: <Wrench size={16} />,
      role: 'IT Intern',
      company: 'Malik International Organization',
      period: 'Jun 2024 – Aug 2024',
      bullets: [
        'IT support, system updates, and troubleshooting across the organisation',
        'Managed internal tool configuration and hardware inventory',
      ],
    },
    {
      icon: <PenLine size={16} />,
      role: 'Content Writing & Project Management Intern',
      company: 'Buzz Interactive',
      period: 'Jan 2023 – Mar 2023',
      bullets: [
        'Wrote SEO-optimised content for client campaigns',
        'Managed content calendar and cross-team coordination',
      ],
    },
  ]
  return (
    <section id="experience" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>Experience</span>
        <h2 className="section-heading" style={{ marginBottom: 56 }}>Where I've Worked</h2>

        <div style={{ position: 'relative', paddingLeft: 56 }}>
          <div className="timeline-line" />
          {jobs.map((job, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 40 }}>
              <div style={{
                position: 'absolute', left: -56, top: 4,
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--bg-secondary)', border: '2px solid var(--accent-blue)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent-blue)',
              }}>{job.icon}</div>

              <div className="card-hover" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '22px 26px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <div>
                    <div className="font-display" style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)' }}>{job.role}</div>
                    <div style={{ fontSize: 14, color: 'var(--accent-blue)', fontWeight: 500, marginTop: 2 }}>{job.company}</div>
                  </div>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 6, padding: '3px 10px', whiteSpace: 'nowrap' }}>{job.period}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 4 }}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Image carousel ────────────────────────────────────────────────────────────
// ─── Medify carousel — landscape banner for slide 0, phone frame for slides 1–4 ──
function MedifyCarousel() {
  const [idx, setIdx] = useState(0)
  const images = [featureGraphicImg, homeImg, doctorProfileImg, allHospitalsImg, bloodDonationsImg]
  const labels = ['Feature graphic', 'Home', 'Doctor profile', 'All hospitals', 'Blood donation']
  const isFirst = idx === 0

  const nav = (
    <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 5, zIndex: 2 }}>
      {images.map((_, i) => (
        <button key={i} onClick={() => setIdx(i)} style={{
          width: i === idx ? 16 : 6, height: 6, borderRadius: 9999, padding: 0, border: 'none', cursor: 'pointer',
          background: i === idx ? 'var(--accent-blue)' : 'rgba(255,255,255,0.4)', transition: 'all 0.2s',
        }} />
      ))}
    </div>
  )

  const prevBtn = (
    <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} style={{
      position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
      background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
      width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', cursor: 'pointer',
    }}><ChevronLeft size={13} /></button>
  )
  const nextBtn = (
    <button onClick={() => setIdx((idx + 1) % images.length)} style={{
      position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2,
      background: 'rgba(0,0,0,0.6)', border: 'none', borderRadius: '50%',
      width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', cursor: 'pointer',
    }}><ChevronRight size={13} /></button>
  )

  return (
    <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: '#0d1420' }}>
      {isFirst ? (
        // Wide landscape feature graphic
        <div style={{ position: 'relative', height: 200 }}>
          <img src={images[0]} alt={labels[0]}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {prevBtn}{nextBtn}{nav}
        </div>
      ) : (
        // Phone frame for portrait mobile screenshots
        <div style={{ position: 'relative', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {prevBtn}
          {/* Phone shell */}
          <div style={{
            width: 138, height: 268,
            borderRadius: 24,
            border: '7px solid #1e2d40',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(0,0,0,0.4), 0 12px 32px rgba(0,0,0,0.6)',
            overflow: 'hidden',
            position: 'relative',
            background: '#000',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: 44, height: 12, background: '#1e2d40', borderRadius: '0 0 8px 8px', zIndex: 1,
            }} />
            <img src={images[idx]} alt={labels[idx]}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
            />
          </div>
          {nextBtn}
          {nav}
        </div>
      )}
    </div>
  )
}

// ─── Generic carousel (browser-framed for web apps, plain for others) ─────────
function ImageCarousel({ images, label, isBrowser = false }: { images: string[]; label: string; isBrowser?: boolean }) {
  const [idx, setIdx] = useState(0)

  const inner = (
    <div style={{ position: 'relative', height: isBrowser ? 230 : 240, overflow: 'hidden', background: '#0a0f1a' }}>
      <img src={images[idx]} alt={`${label} screenshot ${idx + 1}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }}
      />
      {images.length > 1 && (
        <>
          <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: 'none', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}><ChevronLeft size={13} /></button>
          <button onClick={() => setIdx((idx + 1) % images.length)} style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.65)', border: 'none', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}><ChevronRight size={13} /></button>
          <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 4 }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 16 : 6, height: 6, borderRadius: 9999, background: i === idx ? 'var(--accent-blue)' : 'rgba(255,255,255,0.35)', border: 'none', cursor: 'pointer', transition: 'all 0.2s', padding: 0 }} />
            ))}
          </div>
        </>
      )}
    </div>
  )

  if (isBrowser) {
    return (
      <div style={{ background: '#1a1f2e', borderRadius: '12px 12px 0 0', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
        <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, background: '#141926', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41', display: 'inline-block' }} />
          </div>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 5, padding: '3px 10px', fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'monospace', marginLeft: 8 }}>
            {label === 'ResuFlow' ? 'resuflow.app/fatima-mazhar' : 'samcard.vercel.app'}
          </div>
        </div>
        {inner}
      </div>
    )
  }

  return (
    <div style={{ borderRadius: '12px 12px 0 0', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
      {inner}
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Full-Stack', 'AI/ML', 'Healthcare']

  const projects = [
    {
      title: 'MEDIFY',
      tagline: 'Healthcare App — AI Consultations, 24/7 Access',
      tags: ['Java', 'XML', 'Gemini API'],
      category: ['Healthcare', 'AI/ML'],
      bullets: [
        'Full-stack hospital management with patient, doctor & admin portals',
        'Home screen with Emergency, Hospital, Blood, Prescription, Doctor, Check Up tiles',
        'Doctor profiles with date/time slot picker & Confirm Schedule booking flow',
        'All Hospitals directory: search, opening hours, departments, Call Helpline',
        'Blood Donation module with donor list, blood-group filter & request flow',
        'Integrated Gemini API for in-app AI chat/consultation',
      ],
      images: [featureGraphicImg, homeImg, doctorProfileImg, allHospitalsImg, bloodDonationsImg],
      isBrowser: false,
      github: 'https://github.com/FatimaMazhar0/Medify-Healthcare-App',
      live: null,
    },
    {
      title: 'ResuFlow',
      tagline: 'Your CV. Reimagined. Live.',
      tags: ['React', 'TypeScript', 'Next.js', 'Node.js/Express', 'Vercel'],
      category: ['Full-Stack', 'AI/ML'],
      bullets: [
        'Parses a CV/LinkedIn profile and auto-generates a deployable personal portfolio site',
        'Guided flow: Create Account → Upload & Fill (AI analyzes CV) → Choose Template → Customize → Go Live',
        'Template picker: Minimal, Bold, Creative, Corporate, Editorial with real-time live preview',
        'Color palette + typography selector; "Go Live" generates shareable URL + QR code (PNG/SVG)',
        'Dynamic, data-driven components deployed via Vercel',
      ],
      images: [resuflowLandingImg, resuflowSignupImg, resuflowUploadImg, resuflowCustomizeImg, resuflowLiveImg],
      isBrowser: true,
      github: 'https://github.com/zk19604/resuflow',
      live: null,
    },
    {
      title: 'SAMCard',
      tagline: 'Your Business Card, Reimagined',
      tags: ['React.js', 'Node.js/Express', 'MongoDB', 'Supabase', 'JWT'],
      category: ['Full-Stack'],
      bullets: [
        'Landing page with custom QR codes and engagement tracking (50K+ users, 1M+ cards shared)',
        'Pro dashboard: NFC Taps, Unique Visitors, Profile Views, Leads & analytics chart',
        'Card editor: template picker (Medical Teal, Heritage Gold, Team Pro…) with live mobile preview',
        'Custom QR-code studio: shapes, colors, stickers, embeddable brand/social logos',
        'End-to-end ownership: REST API, schema, frontend, deployment; 150+ bugs resolved',
      ],
      images: [samcardLandingImg, samcardDashboardImg, samcardEditorImg, samcardQrImg],
      isBrowser: true,
      github: 'https://github.com/aice-xpert/samcard'
    },
    {
      title: 'Vision Transformers for Breast Cancer',
      tagline: 'Interpretable Deep Transfer Learning · Presented at AIBThings 2025, FAST',
      tags: ['Python', 'PyTorch', 'MaxViT', 'CoAtNet-0', 'BEiT', 'Grad-CAM', 'LIME'],
      category: ['AI/ML'],
      bullets: [
        'Benchmarked MaxViT, CoAtNet-0, BEiT on BreakHis histopathology dataset (7,909 images, 82 patients)',
        'Two-phase transfer learning with WeightedRandomSampler to handle ~3× class imbalance',
        'BEiT: 94.10% accuracy / 0.9854 AUC-ROC @ 40× (highest AUC); CoAtNet-0: fastest inference',
        'Integrated Grad-CAM, LIME, Integrated Gradients, LRP for clinical explainability',
      ],
      images: [],
      isBrowser: false,
      github: null,
      live: null,
      presentation: 'https://docs.google.com/presentation/d/1VnWMueB0YcM1iZvNIIUmm2w4slE7occtifWl6tLgEcI/edit?usp=sharing',
      modelStats: [
        { name: 'MaxViT', acc: '92.49%', auc: '0.9753' },
        { name: 'CoAtNet-0', acc: '93.83%', auc: '0.9813' },
        { name: 'BEiT', acc: '94.10%', auc: '0.9854' },
      ],
    },
    {
      title: 'Movie Watchlist System',
      tagline: 'Full-stack watchlist with persistent relational database',
      tags: ['React', 'Node.js', 'Express', 'SQL'],
      category: ['Full-Stack'],
      bullets: [
        'Search, add, and manage a personal movie watchlist with a persistent relational database',
        'REST API handling CRUD operations with dynamic React frontend and state management',
      ],
      images: [],
      isBrowser: false,
      github: 'https://github.com/FatimaMazhar0/Movies-and-Series-Management-System',
      live: null,
    },
  ]

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter))

  return (
    <section id="projects" style={{ padding: '96px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>Projects</span>
        <h2 className="section-heading" style={{ marginBottom: 24 }}>Featured Projects</h2>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '6px 16px', borderRadius: 9999, fontSize: 13, fontWeight: 500,
              border: `1px solid ${f === filter ? 'var(--accent-blue)' : 'var(--border)'}`,
              background: f === filter ? 'rgba(59,130,246,0.15)' : 'transparent',
              color: f === filter ? 'var(--accent-blue)' : 'var(--text-secondary)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: 24 }} className="projects-grid">
          {filtered.map(p => (
            <div key={p.title} className="card-hover" style={{
              background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)',
              borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column',
            }}>
              {p.title === 'MEDIFY' ? (
                <MedifyCarousel />
              ) : p.images.length > 0 ? (
                <ImageCarousel images={p.images} label={p.title} isBrowser={p.isBrowser} />
              ) : (p as any).modelStats ? (
                <div style={{ background: 'linear-gradient(135deg, #0f1a2e, #1a0f2e)', padding: '24px 28px', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-violet)', marginBottom: 12, textTransform: 'uppercase' }}>Model Benchmark @ 40× Magnification</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {(p as any).modelStats.map((m: { name: string; acc: string; auc: string }) => (
                      <div key={m.name} style={{ background: 'rgba(124,92,255,0.08)', border: '1px solid rgba(124,92,255,0.2)', borderRadius: 10, padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, color: 'var(--accent-violet)', fontWeight: 600, marginBottom: 6 }}>{m.name}</div>
                        <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{m.acc}</div>
                        <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 2 }}>AUC {m.auc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ height: 72, background: 'linear-gradient(135deg, #0f1a2e, #111827)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code2 size={28} style={{ color: 'var(--border)' }} />
                </div>
              )}

              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 10 }}>
                  <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 3px' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0 }}>{p.tagline}</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                  {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                </div>

                <ul style={{ margin: '0 0 18px', paddingLeft: 17, flex: 1 }}>
                  {p.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 3 }}>{b}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 12, padding: '7px 14px' }}>
                      <GithubIcon size={13} /> GitHub
                    </a>
                  )}
                  {(p as any).presentation && (
                    <a href={(p as any).presentation} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: 12, padding: '7px 14px' }}>
                      <ExternalLink size={13} /> View Presentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────
import {
  siCplusplus, siPython, siJavascript, siTypescript, siHtml5,
  siReact, siNodedotjs, siExpress, siNextdotjs, siTailwindcss,
  siMongodb, siPostgresql, siSupabase, siGit, siGithub, siVercel,
  siCss,
} from 'simple-icons'

// Map skill name → { path, hex } — simple-icons for most, custom SVG paths for the rest
const SKILL_ICONS: Record<string, { path: string; hex: string }> = {
  'C++':          { path: siCplusplus.path,   hex: siCplusplus.hex },
  'Python':       { path: siPython.path,       hex: siPython.hex },
  'JavaScript':   { path: siJavascript.path,   hex: siJavascript.hex },
  'TypeScript':   { path: siTypescript.path,   hex: siTypescript.hex },
  'HTML5':        { path: siHtml5.path,         hex: siHtml5.hex },
  'CSS3':         { path: siCss.path,           hex: '1572B6' },
  'React.js':     { path: siReact.path,         hex: siReact.hex },
  'Node.js':      { path: siNodedotjs.path,     hex: siNodedotjs.hex },
  'Express.js':   { path: siExpress.path,       hex: 'FFFFFF' },
  'Next.js':      { path: siNextdotjs.path,     hex: 'FFFFFF' },
  'Tailwind CSS': { path: siTailwindcss.path,   hex: siTailwindcss.hex },
  'MongoDB':      { path: siMongodb.path,       hex: siMongodb.hex },
  'PostgreSQL':   { path: siPostgresql.path,    hex: siPostgresql.hex },
  'Supabase':     { path: siSupabase.path,      hex: siSupabase.hex },
  'Git':          { path: siGit.path,           hex: siGit.hex },
  'GitHub':       { path: siGithub.path,        hex: 'FFFFFF' },
  'Vercel':       { path: siVercel.path,        hex: 'FFFFFF' },
  // Custom SVG paths for icons not in simple-icons
  'SQL': {
    hex: '4479A1',
    path: 'M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zm0 2c4.42 0 8 2.01 8 4s-3.58 4-8 4-8-2.01-8-4 3.58-4 8-4zm0 14c-4.42 0-8-2.01-8-4v-2.26C5.56 13.14 8.6 14 12 14s6.44-.86 8-2.26V16c0 1.99-3.58 4-8 4zm0-4c-4.42 0-8-2.01-8-4v-2.26C5.56 9.14 8.6 10 12 10s6.44-.86 8-2.26V12c0 1.99-3.58 4-8 4z',
  },
  'Assembly': {
    hex: '6E4C13',
    path: 'M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2zM8 7h8v2H8V7zm0 8h8v2H8v-2z',
  },
  'MS SQL Server': {
    hex: 'CC2927',
    path: 'M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zm8 10c0 1.99-3.58 4-8 4s-8-2.01-8-4v-2.26C5.56 11.14 8.6 12 12 12s6.44-.86 8-2.26V12zm-8 6c-4.42 0-8-2.01-8-4v-2.26C5.56 13.14 8.6 14 12 14s6.44-.86 8-2.26V14c0 1.99-3.58 4-8 4zM4 8c0-1.99 3.58-4 8-4s8 2.01 8 4-3.58 4-8 4-8-2.01-8-4z',
  },
  'REST APIs': {
    hex: '6EC1E4',
    path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  'AWS': {
    hex: 'FF9900',
    path: 'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.504.336c-.072.048-.144.072-.208.072-.08 0-.16-.04-.232-.112-.112-.12-.208-.248-.288-.376-.08-.136-.16-.288-.248-.472-.624.736-1.408 1.104-2.352 1.104-.672 0-1.208-.192-1.6-.576-.392-.384-.592-.896-.592-1.536 0-.68.24-1.232.728-1.648.488-.416 1.136-.624 1.96-.624.272 0 .552.024.848.064.296.04.6.104.92.176v-.584c0-.608-.128-1.032-.376-1.28-.256-.248-.688-.368-1.304-.368-.28 0-.568.032-.864.104-.296.072-.584.16-.864.272-.128.056-.224.088-.272.104-.048.016-.08.024-.112.024-.096 0-.144-.072-.144-.224v-.352c0-.112.016-.2.056-.248.04-.056.112-.112.224-.168.28-.144.616-.264 1.008-.36C4.8 6.04 5.216 6 5.648 6c.952 0 1.648.216 2.096.648.44.432.664 1.088.664 1.968v2.592l-.32.016c-.088-.072-.112-.184-.112-.368zM3.8 11.456c.264 0 .536-.048.824-.144.288-.096.544-.272.76-.512.128-.152.224-.32.272-.512.048-.192.08-.424.08-.696v-.336c-.232-.056-.48-.104-.736-.136-.256-.032-.504-.048-.752-.048-.536 0-.928.104-1.192.32-.264.216-.392.52-.392.912 0 .368.096.648.296.832.192.208.464.32.84.32zm6.424.656c-.128 0-.216-.024-.272-.072-.056-.04-.104-.136-.144-.272L8.12 6.736c-.04-.144-.064-.24-.064-.288 0-.112.056-.176.168-.176h.688c.136 0 .224.024.272.072.056.04.096.136.136.272l1.256 4.952 1.168-4.952c.032-.144.072-.232.128-.272.056-.04.152-.072.28-.072h.56c.136 0 .224.024.28.072.056.04.104.136.128.272l1.184 5.016 1.288-5.016c.04-.144.088-.232.136-.272.056-.04.144-.072.272-.072h.648c.112 0 .168.056.168.176 0 .032-.008.072-.016.12-.008.048-.024.112-.048.2l-1.816 5.032c-.04.144-.08.232-.136.272-.056.04-.144.072-.272.072h-.6c-.136 0-.224-.024-.28-.08-.056-.048-.104-.136-.128-.28l-1.16-4.832-1.152 4.824c-.032.144-.072.232-.128.28-.056.056-.152.08-.288.08H10.224zm9.672.176c-.368 0-.736-.04-1.088-.128-.352-.088-.624-.184-.8-.296-.104-.064-.176-.136-.2-.2-.024-.064-.04-.136-.04-.2v-.368c0-.152.056-.224.16-.224.04 0 .08.008.12.024.04.016.104.04.176.072.24.104.5.184.776.24.28.056.552.08.832.08.44 0 .776-.072 1.016-.224.24-.152.36-.368.36-.64 0-.192-.056-.352-.168-.488-.112-.136-.328-.256-.64-.368l-.92-.288c-.464-.144-.808-.36-1.024-.64-.216-.28-.328-.592-.328-.928 0-.264.056-.496.168-.696.112-.2.264-.376.456-.52.192-.144.408-.248.656-.32.248-.072.512-.104.784-.104.136 0 .28.008.424.024.152.016.288.04.424.072.136.024.264.056.384.096.12.04.216.08.288.12.096.056.168.12.208.192.04.064.056.152.056.256v.336c0 .152-.056.232-.16.232-.056 0-.144-.024-.264-.072-.4-.176-.848-.264-1.344-.264-.4 0-.712.064-.928.2-.216.136-.328.336-.328.608 0 .192.064.352.192.488.128.136.36.264.696.376l.896.288c.456.144.792.352 1 .616.208.264.312.568.312.904 0 .272-.056.52-.16.736-.112.216-.264.408-.464.56-.2.152-.432.272-.704.352-.288.088-.6.128-.928.128z',
  },
  'Canva': {
    hex: '00C4CC',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.39 4.924c.901 0 1.63.73 1.63 1.63s-.729 1.631-1.63 1.631c-.9 0-1.63-.73-1.63-1.63s.73-1.631 1.63-1.631zm5.013 13.205c-1.394.882-2.967 1.386-4.65 1.386-4.714 0-8.543-3.829-8.543-8.543 0-1.572.43-3.047 1.18-4.31l.893 1.543A6.87 6.87 0 0 0 4.83 12c0 3.845 3.12 6.962 6.963 6.962 1.24 0 2.41-.325 3.412-.897l1.419 1.064zM9.83 17.26a6.982 6.982 0 0 1-3.053-5.768c0-1.24.328-2.41.9-3.412l1.064 1.418a5.31 5.31 0 0 0-.3 1.763 5.33 5.33 0 0 0 2.547 4.552L9.83 17.26zm5.346-1.117a5.327 5.327 0 0 0 2.195-4.33c0-.55-.082-1.08-.237-1.58l1.533-.892c.312.774.483 1.62.483 2.503 0 2.232-1.08 4.21-2.75 5.475l-1.224-1.176zM12.39 8.32c1.418.212 2.507 1.436 2.507 2.912 0 1.63-1.321 2.951-2.951 2.951-1.63 0-2.952-1.321-2.952-2.951 0-1.476 1.09-2.7 2.508-2.912v-1.67c-2.34.228-4.166 2.2-4.166 4.582 0 2.54 2.06 4.598 4.598 4.598 2.54 0 4.599-2.059 4.599-4.598 0-2.382-1.827-4.354-4.166-4.582V8.32z',
  },
}

function SkillCard({ name, delay }: { name: string; delay: number }) {
  const [hov, setHov] = useState(false)
  const icon = SKILL_ICONS[name]
  const color = icon ? `#${icon.hex}` : '#3B82F6'

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `#${icon?.hex ?? '3B82F6'}0f` : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hov ? color : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12, padding: '16px 8px 12px', textAlign: 'center', cursor: 'default',
        transition: 'all 0.22s ease',
        transform: hov ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hov ? `0 8px 24px ${color}28` : 'none',
        animation: `floatTile ${3 + delay * 0.35}s ease-in-out ${delay * 0.12}s infinite alternate`,
      }}>
      {icon ? (
        <svg
          viewBox="0 0 24 24"
          width={32} height={32}
          style={{
            display: 'block', margin: '0 auto 8px',
            filter: hov ? `drop-shadow(0 0 6px #${icon.hex}99)` : 'none',
            transition: 'filter 0.22s',
          }}
          fill={`#${icon.hex}`}
          aria-label={name}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <div style={{ width: 32, height: 32, margin: '0 auto 8px', borderRadius: 6, background: color, opacity: 0.8 }} />
      )}
      <div style={{
        fontSize: 11, fontWeight: 600, lineHeight: 1.3,
        color: hov ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color 0.2s',
      }}>{name}</div>
    </div>
  )
}

function Skills() {
  const categories = [
    { label: 'Languages', icon: '</>', skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Assembly'] },
    { label: 'Frameworks & Libraries', icon: '⬡', skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS'] },
    { label: 'Databases & Tools', icon: '⊛', skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'MS SQL Server', 'Git', 'GitHub', 'REST APIs', 'AWS', 'Vercel', 'Canva'] },
  ]
  const softSkills = [
    { icon: <MessageSquare size={13} />, label: 'Communication' },
    { icon: <Users size={13} />, label: 'Teamwork' },
    { icon: <Monitor size={13} />, label: 'Presentation' },
  ]

  let tileIdx = 0
  return (
    <section id="skills" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>Skills</span>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>Tech Stack & Skills</h2>

        {categories.map(cat => (
          <div key={cat.label} style={{ marginBottom: 44 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 15, color: 'var(--accent-blue)', fontWeight: 700 }}>{cat.icon}</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{cat.label}</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, var(--border), transparent)', marginLeft: 8 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 10 }}>
              {cat.skills.map(s => <SkillCard key={s} name={s} delay={tileIdx++} />)}
            </div>
          </div>
        ))}

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 14 }}>Soft Skills</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {softSkills.map(({ icon, label }) => (
              <div key={label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 9999, padding: '6px 14px', fontSize: 13,
                color: 'var(--accent-blue)', fontWeight: 500,
              }}>{icon}{label}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Education ────────────────────────────────────────────────────────────────
function Education() {
  const items = [
    { degree: 'BS Computer Science', institution: 'FAST-NUCES, Lahore', meta: 'Expected 2027 · CGPA 3.63 · Dean\'s List · 3rd in Batch', badge: 'University', color: 'var(--accent-blue)' },
    { degree: 'Cambridge A Levels', institution: 'Class of 2023', meta: '1A*, 2As · 100% Scholarship', badge: 'A Levels', color: 'var(--accent-violet)' },
    { degree: 'Cambridge O Levels', institution: 'Class of 2021', meta: '8A*s · National Level Distinction in Biology', badge: 'O Levels', color: 'var(--accent-teal)' },
    { degree: 'Google IT Support Professional Certificate', institution: 'Coursera', meta: '6-course certification: networking, OS, IT security fundamentals', badge: 'Certificate', color: 'var(--accent-green)' },
  ]
  return (
    <section id="education" style={{ padding: '96px 24px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>Education & Certifications</span>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>Academic Background</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: 18 }}>
          {items.map(item => (
            <div key={item.degree} className="card-hover" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: 14, padding: '22px' }}>
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 9999, fontSize: 11, fontWeight: 600, marginBottom: 12, background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}40` }}>{item.badge}</span>
              <div className="font-display" style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{item.degree}</div>
              <div style={{ fontSize: 13, color: item.color, fontWeight: 500, marginBottom: 6 }}>{item.institution}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── GitHub heatmap ───────────────────────────────────────────────────────────
function ContribGrid() {
  const weeks = 26
  const levels = [0, 0, 0, 1, 1, 2, 2, 3, 4]
  const cols = Array.from({ length: weeks }, (_, wi) =>
    Array.from({ length: 7 }, (_, di) => {
      const seed = wi * 7 + di
      const pseudo = (seed * 1103515245 + 12345) & 0x7fffffff
      return levels[pseudo % levels.length]
    })
  )
  const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
  return (
    <div style={{ display: 'flex', gap: 3, overflowX: 'auto' }}>
      {cols.map((col, wi) => (
        <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {col.map((lvl, di) => (
            <div key={di} style={{ width: 9, height: 9, borderRadius: 2, background: colors[lvl] }} />
          ))}
        </div>
      ))}
    </div>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>Contact</span>
        <h2 className="section-heading" style={{ marginBottom: 8 }}>Let's Build Something Together</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 48, fontSize: 15 }}>
          Open to full-time roles, internships, and interesting project collaborations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-blue)', marginBottom: 10 }}>Direct contact</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 24, color: 'var(--text-primary)' }}>Reach me instantly</h3>
              <p style={{ margin: '0 0 18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Use WhatsApp for a quick message, email for a formal note, or call directly on the number below.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#25D366', gap: 6 }}>
                  <WhatsAppIcon size={16} /> WhatsApp me
                </a>
                <a href={emailLink} className="btn-secondary" style={{ fontSize: 13 }}>
                  <Mail size={14} /> Email me
                </a>
              </div>
              <a href={phoneLink} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>
                <span style={{ color: 'var(--accent-blue)' }}>📞</span> +92 330 2789440
              </a>
            </div>

            <div style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-blue)', marginBottom: 8 }}>Quick note</div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                I’m happy to discuss opportunities, freelance work, or collaboration ideas.
              </p>
            </div>
          </div>

          {/* Social + heatmap */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {[
                { icon: <Mail size={17} />, label: 'mazharfatima23@gmail.com', href: emailLink },
                { icon: <LinkedinIcon size={17} />, label: 'linkedin.com/in/fatima-mazhar', href: 'https://linkedin.com/in/fatima-mazhar' },
                { icon: <GithubIcon size={17} />, label: 'github.com/FatimaMazhar0', href: 'https://github.com/FatimaMazhar0' },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: 12, background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)', borderRadius: 10, padding: '12px 16px',
                  color: 'var(--text-primary)', textDecoration: 'none', transition: 'all 0.2s', fontSize: 13,
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.background = 'rgba(59,130,246,0.06)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-secondary)' }}
                >
                  <span style={{ color: 'var(--accent-blue)' }}>{icon}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </a>
              ))}
            </div>

            <a href="https://github.com/FatimaMazhar0" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#26a641')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <GithubIcon size={15} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>GitHub Contributions</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--accent-green)' }}>↗ github.com/FatimaMazhar0</span>
                </div>
                <ContribGrid />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '22px 24px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>© 2025 Fatima Mazhar · Built with React & Tailwind</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: 8,
          padding: '7px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
          color: 'var(--text-secondary)', fontSize: 13, transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
        ><ArrowUp size={13} /> Back to top</button>
      </div>
    </footer>
  )
}

// ─── Global CSS (keyframes + responsive) ─────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      @keyframes auroraFloat1 {
        0%   { transform: translate(0, 0) scale(1); }
        100% { transform: translate(40px, 30px) scale(1.1); }
      }
      @keyframes auroraFloat2 {
        0%   { transform: translate(0, 0) scale(1); }
        100% { transform: translate(-30px, 20px) scale(1.08); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.5; }
      }
      @keyframes floatUpDown {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-8px); }
      }
      @keyframes floatTile {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-3px); }
      }

      @media (max-width: 900px) {
        .hero-grid    { grid-template-columns: 1fr !important; }
        .hero-stats   { grid-template-columns: repeat(2, 1fr) !important; margin-top: 36px; }
        .about-grid   { grid-template-columns: 1fr !important; }
        .contact-grid { grid-template-columns: 1fr !important; }
        .hidden-mobile { display: none !important; }
        .show-mobile   { display: flex !important; }
        .projects-grid { grid-template-columns: 1fr !important; }
      }
      @media (min-width: 901px) {
        .show-mobile { display: none !important; }
      }
    `}</style>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <GlobalStyles />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
