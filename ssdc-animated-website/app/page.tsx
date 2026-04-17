'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MapPinned, Menu, MoveRight, Sparkles, Waves, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
};

type PriorityCard = {
  index: string;
  title: string;
  body: string;
};

type RegionCard = {
  state: string;
  summary: string;
  image: string;
};

type InsightCard = {
  title: string;
  tag: string;
  summary: string;
};

type StoryRailCard = {
  title: string;
  body: string;
  image: string;
};

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Priorities', href: '#priorities' },
  { label: 'Region', href: '#region' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '2025', label: 'Act establishing SSDC' },
  { value: '28 Aug', label: 'formal inauguration in Abuja' },
  { value: '06', label: 'South-South states covered' },
  { value: '03+', label: 'core anchors: transport, energy, agriculture' },
];

const priorities: PriorityCard[] = [
  {
    index: '01',
    title: 'Infrastructure and regional connectivity',
    body: 'SSDC is positioned to channel development funding into roads, rail, waterways, bridges, and power infrastructure so cities, riverine communities, and industrial corridors are better linked.',
  },
  {
    index: '02',
    title: 'Environmental renewal and resilience',
    body: 'The commission is tasked with addressing ecological damage and developmental deficits tied to extraction and industrial activity across the oil-rich South-South.',
  },
  {
    index: '03',
    title: 'Inclusive socio-economic growth',
    body: 'Its strategy centers on industrial transformation, agriculture, jobs, housing, health, telecommunications, and broader social investment for both urban and rural communities.',
  },
];

const regionCards: RegionCard[] = [
  {
    state: 'Akwa Ibom',
    summary: 'Coastal energy, maritime enterprise, and urban expansion make it a key piece of the region-wide growth story.',
    image: 'https://images.pexels.com/photos/25881189/pexels-photo-25881189.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    state: 'Bayelsa',
    summary: 'Riverine settlements and wetlands underline why waterways, environmental stewardship, and inclusion matter so much.',
    image: 'https://images.pexels.com/photos/33807974/pexels-photo-33807974.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    state: 'Cross River',
    summary: 'Tourism, agriculture, logistics, and ecological assets create room for balanced and diversified development.',
    image: 'https://images.pexels.com/photos/34885625/pexels-photo-34885625.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    state: 'Delta, Edo, and Rivers',
    summary: 'Industrial activity, transport corridors, urban economies, and environmental pressure points shape the commission’s wider intervention landscape.',
    image: 'https://images.pexels.com/photos/34885737/pexels-photo-34885737.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const insights: InsightCard[] = [
  {
    tag: 'Legal foundation',
    title: 'The SSDC was created under a 2025 Act and publicly positioned as a separate regional development vehicle.',
    summary:
      'This homepage now reflects that status directly instead of using generic placeholder branding.',
  },
  {
    tag: 'Institutional role',
    title: 'The commission is framed around infrastructure delivery, ecological response, and long-range economic transformation.',
    summary:
      'That makes the site read more like a serious public-facing institution and less like a generic campaign page.',
  },
  {
    tag: 'Regional scope',
    title: 'Akwa Ibom, Bayelsa, Cross River, Delta, Edo, and Rivers now appear as the explicit geographic footprint.',
    summary:
      'The riverine imagery helps reinforce the identity of the region while the copy keeps the focus on policy and delivery.',
  },
];

const storyRail: StoryRailCard[] = [
  {
    title: 'Waterways and mobility',
    body: 'From river channels to urban corridors, the SSDC story is ultimately about how movement unlocks trade, access, and public value.',
    image: 'https://images.pexels.com/photos/25881189/pexels-photo-25881189.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'Ecology and renewal',
    body: 'Environmental pressure is part of the region\'s reality, so the visual system now gives that challenge more weight and seriousness.',
    image: 'https://images.pexels.com/photos/33807974/pexels-photo-33807974.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'Cities and communities',
    body: 'The page now balances institutional authority with local texture, framing cities and riverine settlements as one connected mandate.',
    image: 'https://images.pexels.com/photos/34885625/pexels-photo-34885625.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    title: 'Industry and future growth',
    body: 'A more cinematic middle section gives the site the sense of scale expected from a flagship federal development commission.',
    image: 'https://images.pexels.com/photos/34885737/pexels-photo-34885737.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[120] overflow-hidden bg-[#12100d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(204,163,96,0.18),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(44,93,77,0.2),transparent_24%)]" />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 h-px w-full origin-left bg-gradient-to-r from-transparent via-[#e1c9a5] to-transparent"
      />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-[#f3eadf]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] uppercase tracking-[0.65em] text-[#ccb997]"
        >
          South-South Development Commission
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-5xl leading-[0.9] md:text-7xl"
        >
          Building a more cinematic public face for regional development.
        </motion.div>
      </div>
    </motion.div>
  );
}

function SSDCLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'inline-flex items-center gap-3' : 'inline-flex flex-col items-start gap-4'}>
      <SSDCMark />

      <div className={compact ? 'leading-none' : ''}>
        <div className={`${compact ? 'text-lg tracking-[0.22em]' : 'text-3xl tracking-[0.18em] md:text-4xl'} font-semibold uppercase text-[#d3b777]`}>
          South South
        </div>
        <div
          className={`${compact ? 'mt-1 text-[9px] tracking-[0.44em]' : 'mt-2 text-[10px] tracking-[0.62em] md:text-xs'} uppercase text-[#8f836a]`}
        >
          Development Commission
        </div>
      </div>
    </div>
  );
}

function SSDCMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1rem] border border-[#cfba8c]/40 bg-[#1a1938] shadow-[0_18px_40px_rgba(26,25,56,0.18)] ${
        small ? 'px-2.5 py-2' : 'px-5 py-4'
      }`}
    >
      <svg
        width={small ? '34' : '96'}
        height={small ? '32' : '88'}
        viewBox="0 0 96 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M44 6L56 18V72H44V6Z" fill="#D7BE84" />
        <path d="M60 0L72 12V72H60V0Z" fill="#E2CC95" />
        <path d="M28 28L40 12V72H28V28Z" fill="#CDAF6C" />
        <path d="M76 24L88 36V72H76V24Z" fill="#D6BB80" />
        <path d="M0 72L20 44H34L18 72H0Z" fill="#CBA96A" />
        <path d="M96 72L76 44H62L78 72H96Z" fill="#D7BE84" />
        <path d="M40 12L56 28" stroke="#1A1938" strokeWidth="6" />
        <path d="M56 18L72 34" stroke="#1A1938" strokeWidth="6" />
        <path d="M28 44L40 56" stroke="#1A1938" strokeWidth="6" />
        <path d="M76 44L88 56" stroke="#1A1938" strokeWidth="6" />
      </svg>
    </div>
  );
}

function SSDCBackgroundLogo() {
  return (
    <svg
      width="920"
      height="420"
      viewBox="0 0 920 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="#17130f">
        <path d="M406 26H472V222H406V26Z" />
        <path d="M480 0H546V222H480V0Z" />
        <path d="M332 118L404 30V222H332V118Z" />
        <path d="M554 72L626 144V222H554V72Z" />
        <path d="M136 222L232 102H332L256 222H136Z" />
        <path d="M784 222L688 102H588L664 222H784Z" />
        <path d="M404 30L472 98L406 164V30Z" opacity="0.18" />
        <path d="M480 72L546 138L480 204V72Z" opacity="0.18" />
      </g>
      <text
        x="460"
        y="318"
        textAnchor="middle"
        fill="#17130f"
        fontFamily="Trebuchet MS, Segoe UI, sans-serif"
        fontSize="74"
        fontWeight="700"
        letterSpacing="1.5"
      >
        SOUTH SOUTH
      </text>
      <text
        x="460"
        y="374"
        textAnchor="middle"
        fill="#17130f"
        fontFamily="Trebuchet MS, Segoe UI, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="13"
      >
        DEVELOPMENT COMMISSION
      </text>
    </svg>
  );
}

function GlassCursor({
  mouseX,
  mouseY,
  active,
}: {
  mouseX: number;
  mouseY: number;
  active: boolean;
}) {
  const cursorVisible = mouseX !== 0 || mouseY !== 0;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[130] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1d7b69]/65 bg-[rgba(22,106,88,0.26)] shadow-[0_8px_26px_rgba(22,106,88,0.2)] backdrop-blur-md lg:block"
        animate={{
          x: typeof window === 'undefined' ? -100 : window.innerWidth / 2 + mouseX * (window.innerWidth / 2),
          y: typeof window === 'undefined' ? -100 : window.innerHeight / 2 + mouseY * (window.innerHeight / 2),
          opacity: cursorVisible ? 1 : 0,
          scale: active ? 2.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.55 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[131] hidden h-[0.34rem] w-[0.34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d77a63] shadow-[0_0_16px_rgba(215,122,99,0.7)] lg:block"
        animate={{
          x: typeof window === 'undefined' ? -100 : window.innerWidth / 2 + mouseX * (window.innerWidth / 2),
          y: typeof window === 'undefined' ? -100 : window.innerHeight / 2 + mouseY * (window.innerHeight / 2),
          opacity: cursorVisible ? 1 : 0,
          scale: active ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.4 }}
      />
    </>
  );
}

function SectionIntro({
  label,
  title,
  body,
  invert = false,
  shift = 0,
}: {
  label: string;
  title: string;
  body: string;
  invert?: boolean;
  shift?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-3xl"
      style={{ transform: `translateY(${shift}px)` }}
    >
      <div
        className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.32em] ${
          invert ? 'border-white/15 text-[#d8cfbf]' : 'border-[#1f1d19]/10 text-[#6c6559]'
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
        {label}
      </div>
      <h2 className={`max-w-2xl text-4xl leading-[0.94] md:text-6xl ${invert ? 'text-[#f5efe4]' : 'text-[#161410]'}`}>
        {title}
      </h2>
      <p className={`mt-5 max-w-2xl text-sm leading-8 md:text-base ${invert ? 'text-[#d0c6b8]' : 'text-[#5f584d]'}`}>
        {body}
      </p>
    </motion.div>
  );
}

function ParallaxImage({
  src,
  alt,
  shift,
  mouseX,
  mouseY,
  className,
}: {
  src: string;
  alt: string;
  shift: number;
  mouseX: number;
  mouseY: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border border-black/10 bg-[#d7cfbf] ${className ?? ''}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        animate={{
          x: mouseX * 18,
          y: shift + mouseY * 18,
          scale: 1.08,
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 18, mass: 0.9 }}
      />
    </div>
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeMetric, setActiveMetric] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setLoading(false), 2200);
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactiveTarget = target?.closest('a, button, input, textarea, select, [data-cursor-hover="true"]');

      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
      setCursorActive(Boolean(interactiveTarget));
    };
    const onLeave = () => setCursorActive(false);

    const timer = window.setInterval(() => {
      setActiveMetric((current) => (current + 1) % stats.length);
    }, 2400);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      window.clearTimeout(loaderTimer);
      window.clearInterval(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const mouseX = pointer.x;
  const mouseY = pointer.y;
  const heroShift = Math.min(scrollY * 0.03, 22);
  const titleShift = Math.max(scrollY * -0.008, -10);
  const sectionShift = Math.max(scrollY * -0.004, -8);
  const softImageShift = Math.max(scrollY * -0.008, -14);
  const lighterImageShift = Math.max(scrollY * -0.006, -10);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f3ede2] text-[#161410]">
      <AnimatePresence>{loading ? <Preloader /> : null}</AnimatePresence>
      <GlassCursor mouseX={mouseX} mouseY={mouseY} active={cursorActive} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(215,173,111,0.18),transparent_26%),radial-gradient(circle_at_80%_16%,rgba(47,95,78,0.16),transparent_20%),linear-gradient(180deg,#f3ede2_0%,#f6f1e9_42%,#ede4d6_100%)]" />
      <motion.div
        className="pointer-events-none fixed left-1/2 top-[16%] z-0 hidden -translate-x-1/2 opacity-20 lg:block"
        animate={{ y: scrollY * 0.05, x: mouseX * -26 }}
        transition={{ type: 'spring', stiffness: 38, damping: 18 }}
      >
        <SSDCBackgroundLogo />
      </motion.div>

      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f3ede2]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <SSDCMark small />
            <div>
              <div className="text-xs uppercase tracking-[0.42em] text-[#6d665a]">South-South Development Commission</div>
              <div className="text-lg leading-none text-[#171511]">Federal agency for regional growth</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#454038] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#161410] px-5 py-3 text-sm text-[#f5efe4] transition hover:bg-[#2b2722] md:inline-flex"
            >
              Contact SSDC
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#161410] lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-black/5 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 px-5 py-4 md:px-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[1.25rem] bg-white/55 px-4 py-3 text-sm text-[#1d1a16]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative px-5 pb-12 pt-10 md:px-8 lg:px-10 lg:pb-20 lg:pt-14">
          <div className="pointer-events-none absolute inset-0 -z-[1]">
            <motion.div
              className="absolute left-[4%] top-[8%] h-48 w-48 rounded-full border border-black/10"
              animate={{ x: mouseX * 24, y: mouseY * 24 + scrollY * 0.03 }}
              transition={{ type: 'spring', stiffness: 50, damping: 18 }}
            />
            <motion.div
              className="absolute right-[8%] top-[18%] h-28 w-28 rounded-full bg-[#1b4332]/10"
              animate={{ x: mouseX * -28, y: mouseY * 16 + scrollY * 0.05 }}
              transition={{ type: 'spring', stiffness: 50, damping: 18 }}
            />
          </div>

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="pt-8 lg:pt-14"
              style={{ transform: `translate3d(${mouseX * 4}px, ${titleShift + mouseY * 2}px, 0)` }}
            >
              <div className="mb-7">
                <SSDCLogo />
              </div>
              <div className="inline-flex rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white mix-blend-difference">
                Established in 2025 for the South-South region
              </div>
              <h1 className="mt-6 max-w-5xl text-[3.25rem] leading-[0.92] text-white mix-blend-difference md:text-[5.35rem] lg:text-[6.3rem]">
                Advancing infrastructure, ecological recovery, and inclusive growth across South-South Nigeria.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white mix-blend-difference md:text-lg">
                The South-South Development Commission is a Nigerian federal agency established in 2025 to accelerate
                socio-economic development, tackle environmental challenges, and strengthen infrastructure across Akwa
                Ibom, Bayelsa, Cross River, Delta, Edo, and Rivers States.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#priorities"
                  className="inline-flex items-center gap-2 rounded-full bg-[#171410] px-6 py-3 text-sm text-[#f5efe4] transition hover:bg-[#2c2822]"
                >
                  Explore priorities
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm text-[#1c1915] transition hover:bg-white/50"
                >
                  Leadership and mandate
                  <MoveRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-5 sm:grid-cols-3">
                {[
                  ['Transportation', 'Roads, rail, and waterways'],
                  ['Energy', 'Power infrastructure and access'],
                  ['Agriculture', 'Rural growth and food systems'],
                ].map(([title, body]) => (
                  <motion.div
                    key={title}
                    whileHover={{ scale: 1.35, zIndex: 30 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-[1.5rem] border border-black/10 bg-white/60 p-4 shadow-[0_20px_60px_rgba(27,22,16,0.08)]"
                  >
                    <div className="text-lg text-[#161410]">{title}</div>
                    <div className="mt-2 text-sm leading-7 text-[#5e564b]">{body}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(204,163,96,0.18),transparent_52%)] blur-3xl"
                animate={{ x: mouseX * 24, y: mouseY * 24 + scrollY * 0.02 }}
                transition={{ type: 'spring', stiffness: 40, damping: 18 }}
              />
              <div
                className="grid gap-4 md:grid-cols-[1.04fr_0.96fr]"
                style={{ transform: `translate3d(${mouseX * -10}px, ${heroShift + mouseY * -8}px, 0)` }}
              >
                <ParallaxImage
                  src="https://images.pexels.com/photos/33807974/pexels-photo-33807974.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Representative riverine stock image"
                  shift={scrollY * -0.06}
                  mouseX={mouseX}
                  mouseY={mouseY}
                  className="min-h-[470px] md:row-span-2"
                />

                <ParallaxImage
                  src="https://images.pexels.com/photos/25881189/pexels-photo-25881189.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Representative waterways stock image"
                  shift={scrollY * -0.04}
                  mouseX={mouseX * -0.8}
                  mouseY={mouseY * -0.8}
                  className="h-[218px]"
                />

                <motion.div
                  key={activeMetric}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex min-h-[218px] flex-col justify-between rounded-[2rem] bg-[#161410] p-6 text-[#f4ece1]"
                  style={{
                    transform: `perspective(1200px) rotateX(${mouseY * -6}deg) rotateY(${mouseX * 6}deg) translateY(${scrollY * -0.015}px)`,
                  }}
                >
                  <div className="text-xs uppercase tracking-[0.36em] text-[#b9ad99]">Institutional marker</div>
                  <div>
                    <div className="text-6xl leading-none">{stats[activeMetric].value}</div>
                    <div className="mt-3 text-sm uppercase tracking-[0.34em] text-[#d8cbb8]">
                      {stats[activeMetric].label}
                    </div>
                  </div>
                  <p className="max-w-xs text-sm leading-7 text-[#cfc3b2]">
                    The refreshed homepage now foregrounds the commission&apos;s legal basis, launch timeline, regional
                    scope, and development agenda.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-black/6 bg-[#161410] px-5 py-5 text-[#f0e7da] md:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.35, zIndex: 30 }}
                className="relative flex items-center justify-between rounded-[1.6rem] border border-white/8 px-4 py-4"
              >
                <span className="text-3xl">{item.value}</span>
                <span className="max-w-[10rem] text-right text-[11px] uppercase tracking-[0.28em] text-[#cdbfa8]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative overflow-visible bg-[#d9ccb7] py-20 text-[#17130f]">
          <div className="mx-auto flex max-w-7xl items-start justify-between gap-8 px-5 md:px-8 lg:px-10">
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.42em] text-[#6c6356]">Story rail</div>
              <h2 className="mt-3 text-3xl leading-tight md:text-5xl">
                A moving mid-page sequence gives the commission a more cinematic presentation.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-8 text-[#5b5348]">
              This horizontal band is designed to feel like a curated showcase strip, creating more momentum between the hero and the core institutional sections.
            </p>
          </div>

          <div className="mt-10 overflow-visible py-10">
            <motion.div
              className="flex w-max gap-6 px-8 md:px-12 lg:px-16"
              style={{ x: -Math.min(scrollY * 0.22, 520) }}
            >
              {[...storyRail, ...storyRail].map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  whileHover={{ scale: 1.08, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[320px] shrink-0 overflow-visible rounded-[2rem] border border-black/10 bg-[#f5efe5] p-4 shadow-[0_24px_60px_rgba(22,20,16,0.08)] md:w-[420px]"
                >
                  <div className="overflow-hidden rounded-[1.4rem]">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="h-[220px] w-full object-cover"
                      animate={{ y: lighterImageShift + mouseY * 8, x: mouseX * 8, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 55, damping: 18 }}
                    />
                  </div>
                  <h3 className="mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[#5c5549]">{item.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionIntro
              label="About SSDC"
              title="A federal commission built to move the South-South from extraction-heavy pressure toward broader prosperity."
              body="The commission&apos;s public mandate spans socio-economic growth, infrastructure renewal, ecological response, and stronger participation from the communities it serves. That makes this website better suited to a confident institutional tone than a generic brochure style."
              shift={sectionShift}
            />

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-5 md:grid-cols-2"
            >
              {[
                [
                  'Mandate',
                  'Manage and deploy resources toward infrastructure, social development, and long-term regional transformation.',
                ],
                [
                  'Environmental focus',
                  'Respond to ecological and developmental issues affecting land, communities, and waterways in the oil-producing zone.',
                ],
                [
                  'Strategic goal',
                  'Support industrial transformation, regional competitiveness, and inclusive growth for both cities and rural settlements.',
                ],
                [
                  'Sectoral scope',
                  'Transportation, energy, agriculture, health, housing, industry, telecommunications, and related public-interest systems.',
                ],
              ].map(([title, body]) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.35, zIndex: 30 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] border border-black/10 bg-white/50 p-6 shadow-[0_16px_40px_rgba(22,20,16,0.06)]"
                >
                  <div className="text-xs uppercase tracking-[0.32em] text-[#6a6357]">{title}</div>
                  <p className="mt-4 text-sm leading-8 text-[#544e45]">{body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="priorities" className="bg-[#ece3d4] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Priority agenda"
              title="Transportation, energy, agriculture, and wider social infrastructure are now the center of the homepage narrative."
              body="The content has been rewritten around the commission&apos;s actual purpose: accelerating development through practical investment, regional planning, and transparent community-facing delivery."
              shift={sectionShift * 0.8}
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#d4cab9]"
              >
                <motion.img
                  src="https://images.pexels.com/photos/34885737/pexels-photo-34885737.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Representative stock image of a traditional fishing boat on calm river water"
                  className="h-full min-h-[520px] w-full object-cover"
                  animate={{ y: softImageShift + mouseY * 10, x: mouseX * 10, scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 55, damping: 18 }}
                />
              </motion.div>

              <div className="grid gap-6">
                {priorities.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.35, zIndex: 30 }}
                    className="relative rounded-[2rem] border border-black/10 bg-white/55 p-7 shadow-[0_20px_60px_rgba(28,22,14,0.06)]"
                    style={{
                      transform: `perspective(1400px) rotateX(${mouseY * -4}deg) rotateY(${mouseX * 5}deg)`,
                    }}
                  >
                    <div className="text-xs uppercase tracking-[0.34em] text-[#7c725f]">{item.index}</div>
                    <h3 className="mt-4 text-3xl leading-tight text-[#181510] md:text-4xl">{item.title}</h3>
                    <p
                      className="mt-4 max-w-2xl text-sm leading-8 text-[#5f574b] md:text-base"
                    >
                      {item.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="region" className="bg-[#161410] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Regional footprint"
              title="Six states, one connected development story."
              body="The commission covers Akwa Ibom, Bayelsa, Cross River, Delta, Edo, and Rivers States. The stock visuals here are representative riverine images used to reinforce the South-South setting while you source final official photography."
              invert
              shift={sectionShift * 0.5}
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {regionCards.map((item, index) => (
                <motion.article
                  key={item.state}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: index * 0.06 }}
                  whileHover={{ scale: 1.35, zIndex: 30 }}
                  className="relative overflow-visible rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                >
                  <div className="grid gap-5 md:grid-cols-[0.96fr_1.04fr] md:items-center">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <motion.img
                        src={item.image}
                        alt={`${item.state} representative riverine stock image`}
                        className="h-[250px] w-full object-cover object-center"
                        animate={{ y: lighterImageShift + mouseY * 8, x: mouseX * 6, scale: 1.04 }}
                        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
                      />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.34em] text-[#d7cbb8]">
                        <MapPinned className="h-4 w-4" />
                        {item.state}
                      </div>
                      <p
                        className="mt-4 text-sm leading-8 text-[#ddd1c0] md:text-base"
                        
                      >
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              label="Leadership and mandate"
              title="Built around accountable leadership, public investment, and community-facing delivery."
              body="Public reporting in 2025 identified Rt. Hon. Chibudom Nwuche as Chairman and Ms. Usoro Akpabio as Managing Director. The homepage now presents that leadership context alongside the commission&apos;s stated development mission."
              shift={sectionShift * 0.3}
            />

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6"
            >
              {[
                [
                  'Establishment and launch',
                  'President Bola Tinubu signed the South-South Development Commission Bill into law in March 2025, and the commission was inaugurated on August 28, 2025.',
                ],
                [
                  'Distinct institutional role',
                  'The SSDC is presented as a separate regional commission created to accelerate development in the South-South, rather than as a duplicate of older intervention bodies.',
                ],
                [
                  'Participation and transparency',
                  'Its public-facing mission emphasizes inclusive growth, transparency, and collaboration with communities across the region.',
                ],
              ].map(([title, body]) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.35, zIndex: 30 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] border border-black/10 bg-white/55 p-7"
                >
                  <div className="text-xs uppercase tracking-[0.34em] text-[#716858]">{title}</div>
                  <p
                    className="mt-4 text-sm leading-8 text-[#564f44] md:text-base"
                    >
                      {body}
                    </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#ece3d4] px-5 py-20 md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Institutional insights"
              title="The supporting sections now read like an official commission website rather than a generic landing page."
              body="Each card below pulls the redesigned homepage back toward law, mandate, regional scope, and implementation language."
              shift={sectionShift * 0.25}
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {insights.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  whileHover={{ scale: 1.35, zIndex: 30 }}
                  className="relative rounded-[2rem] border border-black/10 bg-white/55 p-6"
                  style={{
                    transform: `perspective(1400px) rotateX(${mouseY * -3}deg) rotateY(${mouseX * 4}deg)`,
                  }}
                >
                  <div className="text-xs uppercase tracking-[0.34em] text-[#7a715f]">{item.tag}</div>
                  <h3
                    className="mt-4 text-2xl leading-tight text-[#15130f]"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-[#5d564b]">{item.summary}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16 pt-16 md:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] bg-[#161410] p-8 text-[#f5eee3] md:p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.38em] text-[#cdbfa8]">
                  <Waves className="h-4 w-4" />
                  South-South Development Commission
                </div>
                <h2
                  className="mt-4 max-w-3xl text-4xl leading-[0.95] md:text-6xl"
                >
                  A stronger public-facing homepage for SSDC is now in place.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d5cab9] md:text-base">
                  The new version uses verified 2025 commission context, riverine stock photography, parallax motion,
                  and stronger hover interactions. The next step would be replacing representative imagery and contact
                  details with official SSDC assets and production-ready channels.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://southsouthdc.com/"
                  className="inline-flex items-center justify-center rounded-full bg-[#f4ebde] px-6 py-3 text-sm text-[#171410]"
                >
                  Visit official SSDC site
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm text-[#f5eee3]"
                >
                  Back to top
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
