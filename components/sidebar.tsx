"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";

type SidebarContextValue = {
  open: boolean;
  toggle: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within <SidebarProvider>");
  return ctx;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <SidebarContext.Provider value={{ open, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function Sidebar() {
  const { open, close } = useSidebar();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   function onClick(e: MouseEvent) {
  //     console.log(e.target)
  //     console.log(ref.current?.contains(e.target as Node))
  //     if (!ref.current) return;
  //     if (!open) {
  //       console.log('closs...')
  //       close();
  //     }
  //   }
  //   document.addEventListener("mousedown", onClick);
  //   return () => document.removeEventListener("mousedown", onClick);
  // }, [close]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 backdrop-blur transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        // onClick={close}
      />
      {/* Panel */}
      <aside
        ref={ref}
        className={cn(
          "fixed left-0 top-16 bottom-0 z-50 w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "transition-transform duration-300 will-change-transform",
          open ? "translate-x-0" : "-translate-x-full",
          "md:static md:top-auto md:bottom-auto md:z-auto md:w-64"
        )}
      >
        <nav className="p-6 space-y-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={close}
                className={cn(
                  "block text-lg font-handwriting", // mimic playful font from mock
                  isActive ? "text-primary" : "text-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
