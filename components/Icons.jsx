// Shared inline SVG icons — stroke based, inherit currentColor, no external deps.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

const Svg = ({ size = 20, children, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false" {...base} {...rest}>{children}</svg>
)

export const ArrowRight = (p) => <Svg {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Svg>
export const ArrowUp = (p) => <Svg {...p}><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></Svg>
export const ArrowDownRight = (p) => <Svg {...p}><path d="M7 7l10 10" /><path d="M17 8v9H8" /></Svg>
export const Check = (p) => <Svg {...p}><path d="m4 12 5 5L20 6" /></Svg>
export const Mail = (p) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3.5 7.5 7.3 5.1a2 2 0 0 0 2.4 0l7.3-5.1" /></Svg>
export const Phone = (p) => <Svg {...p}><path d="M6.5 3h3l1.5 4.2-2 1.4a11 11 0 0 0 5.9 5.9l1.4-2 4.2 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" /></Svg>
export const WhatsApp = (p) => <Svg {...p}><path d="M20.5 11.6A8.4 8.4 0 0 1 8 19.3L3.5 20.5l1.2-4.4A8.4 8.4 0 1 1 20.5 11.6Z" /><path d="M8.9 8.2c.3-.7.7-.6 1-.6.4 0 .6.1.8.6l.6 1.3c.1.3 0 .5-.2.7l-.4.4c-.1.2-.2.3 0 .6a6 6 0 0 0 2.6 2.3c.3.1.4 0 .6-.2l.4-.4c.2-.2.4-.2.7-.1l1.3.6c.4.2.5.3.5.6 0 .4-.4 1.3-1.2 1.4-.7.1-2.2-.2-4-1.7-1.9-1.6-2.4-3-2.5-3.6-.1-.6 0-1.2.2-1.5Z" /></Svg>
export const Code = (p) => <Svg {...p}><path d="m9 8-4 4 4 4" /><path d="m15 8 4 4-4 4" /></Svg>
export const Layers = (p) => <Svg {...p}><path d="m12 3 8 4.5-8 4.5-8-4.5Z" /><path d="m4 12.5 8 4.5 8-4.5" /></Svg>
export const Palette = (p) => <Svg {...p}><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.4-3.4 2 2 0 0 1 1.4-3.4H19a2.4 2.4 0 0 0 2.4-2.4A8.6 8.6 0 0 0 12 3Z" /><circle cx="8" cy="10" r="1.1" /><circle cx="12" cy="7.5" r="1.1" /><circle cx="16" cy="10" r="1.1" /></Svg>
export const Menu = (p) => <Svg {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h10" /></Svg>
export const Close = (p) => <Svg {...p}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></Svg>
export const Sparkle = (p) => <Svg {...p}><path d="M12 3.5l1.7 4.6 4.6 1.7-4.6 1.7L12 16.1l-1.7-4.6L5.7 9.8l4.6-1.7Z" /><path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" /></Svg>
