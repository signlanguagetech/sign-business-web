'use client';

import Footer from '@/components/footer';
import { Sidebar, useSidebar } from '@/components/sidebar';
import { cn } from '@/lib/utils';

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open, close } = useSidebar();

  return (
    <div className="flex flex-1 relative overflow-hidden">
      <Sidebar />
      <div
        className={cn(
          'flex flex-col flex-1 transition-all duration-300 ease-in-out',
          'w-full', // Ensure full width on mobile
          'md:transition-margin md:duration-300 md:ease-in-out', // Desktop: smooth transition when sidebar opens/closes
          open
            ? 'md:ml-64' // Move content right when sidebar is open (264px = w-64)
            : 'md:ml-0', // Normal position when sidebar is closed
        )}
        onClick={close}
      >
        <main>{children}</main>
        <Footer />
      </div>

      {/* Mobile backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/70 transition-opacity backdrop-blur md:hidden',
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
        onClick={close}
      />
    </div>
  );
}
