export type Project = {
  index: string
  title: string
  blurb: string
  tags: string[]
  href: string
  year: string
}

export type Social = {
  label: string
  href: string
}

export type SkillGroup = {
  group: string
  items: string[]
}

export type Role = {
  period: string
  title: string
  company: string
  summary: string
}

/**
 * Everything you see on the page comes from this file.
 * Swap the placeholder email, links, projects and roles for your own.
 */
export const profile = {
  name: 'Abubakr',
  role: 'Software Engineer',
  available: true,
  location: 'Remote — worldwide',
  email: 'abubakrrustamjonov797@gmail.com',
  lede:
    'I design and build fast, accessible web products — from the first sketch to the last deploy.',
  bio: [
    'I am a software engineer who cares about the quiet parts of a product: the loading state, the empty screen, the keyboard shortcut nobody documents. Good software should feel obvious.',
    'Most of my work lives in the browser — TypeScript, React, and a healthy respect for the platform underneath. I like small teams, short feedback loops, and shipping things people actually use.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/abubakr' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/abubakr' },
    { label: 'Email', href: 'mailto:abubakrrustamjonov797@gmail.com' },
  ] satisfies Social[],
  projects: [
    {
      index: '01',
      title: 'Ledger',
      blurb:
        'A personal finance dashboard that turns messy bank exports into a calm monthly picture. Local-first, no account required.',
      tags: ['React', 'TypeScript', 'SQLite'],
      href: 'https://github.com/abubakr',
      year: '2026',
    },
    {
      index: '02',
      title: 'Pulse',
      blurb:
        'Realtime analytics for small teams — streamed events, sub-second charts, and alerts that respect your attention.',
      tags: ['Node.js', 'Postgres', 'WebSockets'],
      href: 'https://github.com/abubakr',
      year: '2025',
    },
    {
      index: '03',
      title: 'Atlas',
      blurb:
        'An accessible component library and design-token pipeline shared across four products. Documented, tested, and themeable.',
      tags: ['Design systems', 'a11y', 'Vite'],
      href: 'https://github.com/abubakr',
      year: '2025',
    },
  ] satisfies Project[],
  skills: [
    {
      group: 'Frontend',
      items: ['React', 'TypeScript', 'CSS architecture', 'Vite', 'Accessibility'],
    },
    {
      group: 'Backend',
      items: ['Node.js', 'Postgres', 'REST & GraphQL', 'Redis'],
    },
    {
      group: 'Craft',
      items: ['Design systems', 'Performance', 'Testing', 'CI/CD'],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      period: '2024 — Now',
      title: 'Senior Software Engineer',
      company: 'Independent',
      summary: 'Product engineering for early-stage teams, end to end.',
    },
    {
      period: '2021 — 2024',
      title: 'Software Engineer',
      company: 'Studio',
      summary: 'Shipped design systems and customer-facing web apps.',
    },
    {
      period: '2019 — 2021',
      title: 'Frontend Developer',
      company: 'Agency',
      summary: 'Built marketing sites and internal tools for 20+ clients.',
    },
  ] satisfies Role[],
  marquee: [
    'TypeScript',
    'React',
    'Node.js',
    'Postgres',
    'CSS',
    'Vite',
    'Accessibility',
    'Design systems',
    'Performance',
    'Figma',
  ],
}
