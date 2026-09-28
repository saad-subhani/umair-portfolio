'use client'
import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Close } from './Icons'

const LINKS = [
  ['#about', 'About'],
  ['#services', 'Services'],
  ['#skills', 'Skills'],
  ['#journey', 'Journey'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Sticky styling + scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 24)
      document.documentElement.style.setProperty('--p', `${max > 0 ? (y / max) * 100 : 0}%`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const els = LINKS.map(([href]) => document.getElementById(href.slice(1))).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Lock scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Main">
        <a className="brand" href="#home" aria-label="Umair — back to top">
          <span className="mark">UM</span>
          <span>UMAIR<small>web dev · designer</small></span>
        </a>

        <div className="links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className={active === href.slice(1) ? 'active' : undefined}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="btn btn-sm nav-cta" href="#contact">Let&apos;s talk <ArrowRight size={15} /></a>
          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <Close size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <span className="nav-progress" aria-hidden="true" />
      </nav>

      <div id="mobile-menu" className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map(([href, label], i) => (
          <a key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${0.06 * i + 0.08}s` : '0s' }}>
            {label}
          </a>
        ))}
        <p className="drawer-foot">Open to internships, freelance & junior roles.</p>
      </div>
    </>
  )
}
