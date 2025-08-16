import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, LayoutDashboard, Workflow, Server, Layers, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Type-Safe Engineering',
  description:
    'Frontend (React, Angular, Next.js, Astro), reactive/state (RxJS, Effect-TS, Zustand), backend APIs (Node.js, NestJS, Express), full‑stack delivery.',
};

const services = [
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Frontend Engineering',
    description:
      'Component-driven, accessible, high-performance UIs in React, Angular, Next.js & Astro.',
    href: '/services/frontend-engineering',
    features: [
      'Design systems & component architecture',
      'SSR/ISR, SEO & performance budgets',
      'Accessibility (a11y) best practices',
      'Type-safe tooling & testing',
    ],
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Reactive & State Architecture',
    description:
      'Predictable dataflow and side-effects with RxJS, Effect‑TS & Zustand.',
    href: '/services/reactive-architecture',
    features: [
      'RxJS stream composition & operators',
      'Effect‑TS for effects, resources & layers',
      'Zustand store patterns & slices',
      'Error handling, retries & cancellation',
    ],
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Backend APIs (Node/Nest/Express)',
    description:
      'Type-safe REST/GraphQL APIs with robust auth, caching and observability.',
    href: '/services/backend-apis',
    features: [
      'NestJS modular architecture',
      'Auth, RBAC, rate limiting & caching',
      'Testing (unit/e2e) & contract tests',
      'Tracing, metrics & profiling',
    ],
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Full‑Stack Delivery',
    description:
      'Frontend + backend alignment with CI/CD, quality gates and maintainable repos.',
    href: '/services/full-stack-delivery',
    features: [
      'End‑to‑end type safety',
      'CI/CD pipelines & release strategy',
      'Monorepos (pnpm/turbo) & codegen',
      'Performance & error budgets',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Type-safe frontend, reactive/state, backend APIs, and full‑stack delivery.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">{service.icon}</div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-auto group">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let’s discuss how React, Angular, Next.js & NestJS can deliver it.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
