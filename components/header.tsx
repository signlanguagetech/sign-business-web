'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CodeXml } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from './mode-toggle';
import { navLinks } from './nav-links';

export default function Header() {
  const title = 'Sign Solutions';
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <span className="font-bold font-headline text-xl text-primary">
            {title}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-bold font-headline text-xl text-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-md text-primary"
        >
          <span
            className={cn(
              'absolute left-1/2 h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-in-out',
              open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1/2 -translate-y-[10px]',
            )}
          />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 ease-in-out',
              open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100',
            )}
          />
          <span
            className={cn(
              'absolute left-1/2 h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-in-out',
              open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-1/2 translate-y-[8px]',
            )}
          />
        </button>
      </div>

      {/* Mobile dropdown panel — absolute overlay, does not grow header height */}
      <div
        className={cn(
          'md:hidden absolute left-0 right-0 top-full overflow-hidden bg-background border-b border-border/50 shadow-lg transition-[max-height,opacity] duration-300 ease-in-out',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-4 px-4 py-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="font-bold font-headline text-xl text-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
