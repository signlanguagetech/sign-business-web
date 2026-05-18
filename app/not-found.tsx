import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background flex-1 flex">
      <section className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Page not found</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The page you're looking for doesn't exist or was moved.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}