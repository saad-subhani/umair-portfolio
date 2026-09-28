'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Nav from '../components/Nav'
import { ArrowRight, ArrowUp, Check, Code, Layers, Mail, Palette, Phone, Sparkle, WhatsApp } from '../components/Icons'

const NAME = 'UMAIR'
const ROLES = ['Web Developer', 'Graphic Designer', 'Web3 Builder']
const SKILLS = ['Next.js', 'React', 'JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Web3', 'wagmi', 'viem', 'Graphic Design']
const EMAIL = 'muhammadumair.22908@gmail.com'
const PHONE = '0300 3939224'
const PHONE_HREF = 'tel:+923003939224'
const WHATSAPP_HREF = 'https://wa.me/923003939224'

const FACTS = [
  'BSCS student — computer science foundations',
  'ICS from KIPS D Ground',
  '2 months of hands-on graphic design experience',
  'Comfortable with Next.js, React, GSAP, wagmi & viem',
]

const SERVICES = [
  {
    n: '01', Icon: Code, title: 'Web Development',
    desc: 'Fast, responsive interfaces built with Next.js & React — component-driven, accessible and tuned for real devices.',
    tags: ['Next.js', 'React', 'JavaScript'],
  },
  {
    n: '02', Icon: Layers, title: 'Web3 Integration',
    desc: 'Wallet connect, ENS lookups and on-chain reads on Ethereum with wagmi + viem, wrapped in clean client-safe components.',
    tags: ['wagmi', 'viem', 'ENS'],
  },
  {
    n: '03', Icon: Palette, title: 'Graphic Design',
    desc: 'Bold visuals, branding and social creatives — the reason layout, spacing and colour get as much attention as the code.',
    tags: ['Branding', 'Social', 'Layout'],
  },
]

const STACK = [
  { name: 'Next.js', cat: 'Framework', v: 90 },
  { name: 'React', cat: 'Library', v: 88 },
  { name: 'JavaScript', cat: 'Language', v: 86 },
  { name: 'HTML5 & CSS3', cat: 'Markup', v: 92 },
  { name: 'GSAP Animation', cat: 'Motion', v: 80 },
  { name: 'Web3 · wagmi · viem', cat: 'On-chain', v: 72 },
  { name: 'Graphic Design', cat: 'Design', v: 70 },
  { name: 'Responsive & UI detail', cat: 'Craft', v: 88 },
]

const JOURNEY = [
  {
    when: 'Ongoing', title: 'BSCS — Computer Science',
    desc: 'Studying the fundamentals behind the interfaces I build: programming, data structures and software design.',
  },
  {
    when: 'Completed', title: 'ICS — KIPS D Ground',
    desc: 'Intermediate in Computer Science, where the interest in code and visuals started.',
  },
  {
    when: '2 months', title: 'Graphic Design Experience',
    desc: 'Hands-on branding, layout and social creatives for real briefs — fast turnaround, clean files.',
  },
  {
    when: 'Now', title: 'Self-taught Web & Web3',
    desc: 'Levelling up in Next.js, GSAP motion and wallet/on-chain integration with wagmi + viem on personal builds.',
  },
]

const NOTES = [
  'Pixel-obsessed: spacing, contrast and motion are part of the build, not an afterthought.',
  'Comfortable picking up new tools fast — most of what I know came from shipping, not slides.',
  'Clear communication, honest timelines, and code that someone else can read.',
]

export default function Home() {
  const root = useRef(null)
  const portrait = useRef(null)
  const motionOff = useRef(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isPhone = window.matchMedia('(max-width: 760px)').matches
    const coarse = window.matchMedia('(pointer:coarse)').matches
    motionOff.current = reduce || coarse

    const ctx = gsap.context(() => {
      /* ---------- hero entrance ---------- */
      if (!reduce) {
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.badge', { y: 18, opacity: 0, duration: .7 })
          .from('.name .ch', { yPercent: 120, rotateX: -85, opacity: 0, stagger: .06, duration: 1 }, '-=.4')
          .from('.role-line', { y: 18, opacity: 0, duration: .7 }, '-=.65')
          .from('.hero .lede', { y: 20, opacity: 0, duration: .7 }, '-=.6')
          .from('.hero .cta .btn', { y: 20, opacity: 0, stagger: .1, duration: .6 }, '-=.5')
          .from('.quick div', { y: 16, opacity: 0, stagger: .1, duration: .6 }, '-=.45')
          .from('.stage', { scale: .88, y: 26, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=1.15')
          .from('.chip', { scale: .6, opacity: 0, stagger: .12, duration: .7, ease: 'back.out(1.8)' }, '-=.7')

        // skip continuous motion on phones — saves battery and frames
        if (!isPhone) {
          gsap.to('.chip', { y: 'random(-12,12)', duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: .35 })
          gsap.to('.stage', {
            yPercent: -9, ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .6 },
          })
        }
      }

      /* ---------- rotating role (typewriter) ---------- */
      if (!reduce) {
        const roleTl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })
        ROLES.forEach((r) => roleTl.to('.role', { text: r, duration: Math.max(.5, r.length * .055), ease: 'none' }))
      }

      /* ---------- skill bars + counters ---------- */
      gsap.utils.toArray('.bar i').forEach((el) => {
        if (reduce) return
        gsap.from(el, {
          scaleX: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })
      gsap.utils.toArray('.num').forEach((el) => {
        const target = +el.dataset.to
        if (reduce) { el.textContent = target; return }
        const o = { v: 0 }
        gsap.to(o, {
          v: target, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = Math.round(o.v) },
        })
      })

      /* ---------- scroll reveals ---------- */
      if (!reduce) {
        ScrollTrigger.batch('.reveal', {
          start: 'top 88%', once: true,
          onEnter: (batch) => gsap.from(batch, { y: 56, opacity: 0, duration: .85, ease: 'power3.out', stagger: .09 }),
        })
      }

      /* ---------- seamless skill marquee ---------- */
      const track = document.querySelector('.track')
      const group = track && track.firstElementChild
      if (track && group && !reduce) {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0
        const shift = group.getBoundingClientRect().width + gap
        gsap.to(track, { x: -shift, duration: shift / 70, repeat: -1, ease: 'none' })
      }

      /* ---------- cursor glow (fine pointers only) ---------- */
      const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches
      if (fine && !reduce) {
        const glow = document.querySelector('.cursor')
        const dot = document.querySelector('.cursor-dot')
        const gx = gsap.quickTo(glow, 'x', { duration: .55, ease: 'power3' })
        const gy = gsap.quickTo(glow, 'y', { duration: .55, ease: 'power3' })
        const dx = gsap.quickTo(dot, 'x', { duration: .12, ease: 'power3' })
        const dy = gsap.quickTo(dot, 'y', { duration: .12, ease: 'power3' })
        const move = (e) => {
          gx(e.clientX); gy(e.clientY); dx(e.clientX); dy(e.clientY)
          glow.classList.add('on'); dot.classList.add('on')
        }
        const over = (e) => gsap.to(dot, { scale: e.target.closest('a,button,input,textarea') ? 2.6 : 1, duration: .3 })
        window.addEventListener('mousemove', move, { passive: true })
        window.addEventListener('mouseover', over)
        return () => {
          window.removeEventListener('mousemove', move)
          window.removeEventListener('mouseover', over)
        }
      }

    }, root)

    // re-measure after webfonts settle so reveals land in the right place
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh())

    return () => ctx.revert()
  }, [])
  /* ---------- micro-interactions ---------- */
  const tilt = (e) => {
    const el = portrait.current
    if (!el || motionOff.current) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - .5
    const py = (e.clientY - r.top) / r.height - .5
    gsap.to(el, { rotationY: px * 12, rotationX: -py * 12, duration: .6, ease: 'power3.out', transformPerspective: 900 })
  }
  const untilt = () => {
    if (!portrait.current || motionOff.current) return
    gsap.to(portrait.current, { rotationX: 0, rotationY: 0, duration: .9, ease: 'power3.out' })
  }
  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <main id="home" ref={root}>
      <a className="skip" href="#about">Skip to content</a>

      <div className="bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="aurora" />
        <div className="noise" />
        <div className="vignette" />
      </div>
      <div className="cursor" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <Nav />

      <section className="hero">
        <div>
          <p className="badge"><span className="pip" />Open to internships &amp; junior roles</p>
          <h1 className="name">
            {NAME.split('').map((c, i) => (
              <span
                className="ch"
                key={i}
                style={{ backgroundSize: `${(NAME.length + 1) * 100}% 100%`, backgroundPosition: `${(i / NAME.length) * 100}% 50%` }}
              >
                {c}
              </span>
            ))}
            <span className="ch dot">.</span>
          </h1>
          <p className="role-line">I&apos;m a <span className="role">Web Developer</span><span className="caret" /></p>
          <p className="lede">
            BSCS student crafting fast, modern web experiences with Next.js, GSAP and Web3 — backed by two months of
            hands-on graphic design work, so the visuals get as much care as the code.
          </p>
          <div className="cta">
            <a className="btn" href="#contact">Hire me <ArrowRight /></a>
            <a className="btn ghost" href="#services">See what I do</a>
          </div>
          <div className="quick">
            <div><b>BSCS</b><small>Computer science</small></div>
            <div><b>10+</b><small>Tools &amp; skills</small></div>
            <div><b>2 mo</b><small>Design experience</small></div>
          </div>
        </div>

        <div className="stage" onMouseMove={tilt} onMouseLeave={untilt}>
          <div className="portrait" ref={portrait}>
            <div className="portrait-inner">
              <img
                src="/umair.jpg"
                srcSet="/umair-640.jpg 640w, /umair.jpg 984w"
                sizes="(max-width: 400px) 260px, (max-width: 640px) 340px, (max-width: 1080px) 420px, 500px"
                alt="Portrait of Muhammad Umair"
                width={500}
                height={600}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="plate">
              <div><b>Muhammad Umair</b><small>Web developer · Graphic designer</small></div>
              <Sparkle size={18} />
            </div>
            <span className="chip chip-1"><i />Next.js &amp; React</span>
            <span className="chip c2 chip-2"><i />wagmi + viem</span>
            <span className="chip c3 chip-3"><i />GSAP motion</span>
          </div>
        </div>

        <div className="cue" aria-hidden="true">Scroll<span /></div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((g) => (
            <div className="m-group" key={g}>
              {[...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => <span key={i}>{s}</span>)}
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="section">
        <div className="head-row">
          <div>
            <p className="eyebrow reveal">About me</p>
            <h2 className="h2 reveal">Code, craft &amp; <em>attention to detail</em></h2>
          </div>
          <p className="lede reveal" style={{ maxWidth: '38ch' }}>
            Fresher web developer, BSCS student — and a designer at heart.
          </p>
        </div>

        <div className="about-grid">
          <div className="panel reveal">
            <p>
              I&apos;m Umair — a fresher web developer with a BSCS background and an ICS from KIPS D Ground. I build
              responsive interfaces with Next.js and React, animate them with GSAP, and connect them to wallets and
              on-chain data with wagmi + viem.
            </p>
            <p>
              Two months of hands-on graphic design experience shaped how I work: layout, spacing, colour and motion are
              part of the build, not decoration bolted on at the end.
            </p>
            <ul className="facts">
              {FACTS.map((f) => <li key={f}><Check />{f}</li>)}
            </ul>
            <div className="toolkit">
              {SKILLS.map((s) => <span className="tag" key={s}>{s}</span>)}
            </div>
          </div>

          <div className="stats reveal">
            <div className="stat"><b><span className="num" data-to="2">0</span></b><small>Months design exp.</small></div>
            <div className="stat"><b><span className="num" data-to="10">0</span>+</b><small>Tools &amp; skills</small></div>
            <div className="stat"><b><span className="num" data-to="100">0</span>%</b><small>Passion</small></div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="head-row">
          <div>
            <p className="eyebrow reveal">Services</p>
            <h2 className="h2 reveal">What I <em>do best</em></h2>
          </div>
          <p className="lede reveal" style={{ maxWidth: '40ch' }}>
            Three things I can plug into a team or a project straight away.
          </p>
        </div>

        <div className="cards">
          {SERVICES.map(({ n, Icon, title, desc, tags }) => (
            <article className="card reveal" key={n} onMouseMove={spot}>
              <p className="idx">{n}</p>
              <span className="ico"><Icon /></span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="card-foot">{tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="head-row">
          <div>
            <p className="eyebrow reveal">Skills</p>
            <h2 className="h2 reveal">The <em>toolkit</em> I build with</h2>
          </div>
        </div>

        <div className="skill-grid">
          {STACK.map(({ name, cat, v }) => (
            <div className="skill reveal" key={name}>
              <div className="skill-top"><b>{name}</b><i>{cat}</i></div>
              <div className="bar"><i style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="section">
        <div className="head-row">
          <div>
            <p className="eyebrow reveal">Journey</p>
            <h2 className="h2 reveal">Where I&apos;m <em>heading</em></h2>
          </div>
        </div>

        <div className="split">
          <div className="timeline reveal">
            {JOURNEY.map(({ when, title, desc }) => (
              <article className="tl" key={title}>
                <time>{when}</time>
                <h4>{title}</h4>
                <p>{desc}</p>
              </article>
            ))}
          </div>

          <div className="panel reveal">
            <p className="eyebrow">How I work</p>
            <ul className="note-list">
              {NOTES.map((n) => <li key={n}><Sparkle />{n}</li>)}
            </ul>
            <div className="cta" style={{ marginTop: '2.2rem' }}>
              <a className="btn" href={`mailto:${EMAIL}`}>Start a conversation <ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-shell reveal">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2">Let&apos;s build <em>something good</em></h2>
              <p className="lede">
                Open to internships, freelance work and junior front-end roles. Email or WhatsApp gets the fastest reply.
              </p>
              <div className="contact-list">
                <a className="contact-item" href={`mailto:${EMAIL}`}>
                  <span className="ico"><Mail /></span>
                  <span><small>Email</small><b>{EMAIL}</b></span>
                </a>
                <a className="contact-item" href={PHONE_HREF}>
                  <span className="ico"><Phone /></span>
                  <span><small>Phone</small><b>{PHONE}</b></span>
                </a>
                <a className="contact-item" href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                  <span className="ico"><WhatsApp /></span>
                  <span><small>WhatsApp</small><b>{PHONE}</b></span>
                </a>
              </div>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="c-name">Your name</label>
                <input id="c-name" name="name" value={form.name} onChange={onChange} placeholder="Sara Khan" required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Your email</label>
                <input id="c-email" name="email" type="email" value={form.email} onChange={onChange} placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell me about the role or the project…" required />
              </div>
              <button className="btn" type="submit">Send message <ArrowRight /></button>
              <p className={`form-note${sent ? ' ok' : ''}`}>
                {sent
                  ? 'Opening your email app — thanks for reaching out!'
                  : 'Composed in your own email app — nothing is stored on this site.'}
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="mark">UM</span>
          <span>UMAIR<small>web dev · designer</small></span>
        </a>
        <nav className="f-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="copy">© 2026 Muhammad Umair · Built with Next.js, GSAP &amp; wagmi</p>
        <a className="top" href="#home">Back to top <ArrowUp /></a>
      </footer>
    </main>
  )
}

