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

  // Close sidebar on route change (mobile)
  useEffect(() => {
    const handleResize = () => {
      // Close sidebar on mobile when resizing to desktop
      if (window.innerWidth >= 768 && open) {
        // Don't auto-close on desktop resize, only manual toggle
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <SidebarContext.Provider value={{ open, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function Sidebar() {
  const { open, close } = useSidebar();
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const handleLinkClick = (href: string) => {
    if (href.includes("#")) {
      setHash("#" + href.split("#")[1]);
    }
    // Only close on mobile (< md breakpoint)
    if (window.innerWidth < 768) {
      close();
    }
  };

  return (
    <aside
      ref={ref}
      className={cn(
        // Base styling
        "w-64 bg-background",
        
        // Mobile: fixed positioned overlay with high z-index
        "fixed left-0 top-16 bottom-0 z-50",
        "transform transition-transform duration-300 ease-in-out will-change-transform",
        open ? "translate-x-0" : "-translate-x-full",
        
        // Desktop: fixed positioned, lower z-index so it goes under header
        "md:top-0 md:fixed md:h-full md:z-30 md:mt-[200px]",
        open ? "md:translate-x-0" : "md:-translate-x-full"
      )}
    >
      <nav className="pl-10 space-y-4">
        {navLinks.map(({ href, label }) => {
          const hashPart = href.includes("#") ? "#" + href.split("#")[1] : "";
          const isActive = hashPart
            ? pathname === "/" && hash === hashPart
            : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={cn(
                "block text-lg font-handwriting transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
              )}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
