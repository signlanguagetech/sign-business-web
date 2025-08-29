"use client";;
import Link from 'next/link';
import { CodeXml, PanelLeft, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';
import { useSidebar } from './sidebar';

export default function Header() {
  const title = 'Sign Business';
  const { open, toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-xl text-primary">
            {title}
          </span>
        </Link>
        {open ? <PanelLeft className="h-5 w-5 cursor-pointer" onClick={toggle} /> : <Square className="h-5 w-5 cursor-pointer" onClick={toggle} />}
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <ModeToggle />
        <Button>
        <Link href="/contact">Contact Us</Link>
        </Button>
      </nav>

      </div>
    </header>
  );
}