"use client"

import Footer from '@/components/footer';
import { Sidebar, useSidebar } from '@/components/sidebar';
import { cn } from '@/lib/utils';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open } = useSidebar();

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="flex-1 w-full md:flex md:gap-6">
        <div
          className={cn(
            "transform transition-transform duration-300 ease-in-out will-change-transform fixed md:block",
            open ? "left-0" : "left-[-300px]",
            open ? "translate-x-0" : "-translate-x-full",
            "md:pt-6"
          )}
        >
          <Sidebar />
        </div>
        <main className={cn(
          "flex-1 transform transition-transform duration-300 ease-in-out will-change-transform md:pt-6 md:transform-none",
          open ? "translate-x-64" : "translate-x-0"
        )}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
