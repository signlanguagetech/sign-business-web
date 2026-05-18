'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Workflow,
  Server,
  Layers,
  Users,
  Rocket,
  ShieldCheck,
  CheckCircle,
  Mail,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

const values = [
  {
    name: 'Partnership',
    description:
      'We act as an extension of your team, building strong, collaborative relationships with every client.',
  },
  {
    name: 'Quality',
    description:
      'A commitment to excellence — robust, scalable, and high-performance software solutions.',
  },
  {
    name: 'Innovation',
    description:
      'We continuously explore new technologies and methodologies to deliver cutting-edge products.',
  },
  {
    name: 'Transparency',
    description:
      'Open, honest communication at the core of our process so you are always informed.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-10 md:py-20">
        <div className="container flex flex-col px-4 mx-auto">
          <div className="relative sm:h-32 md:h-60 h-80 w-full lg:w-1/2 md:w-2/4 mb-4 flex items-center justify-center overflow-hidden">
            <h1 className="text-4xl font-headline font-bold text-primary transition-all duration-1000 ease-[var(--ease-back-in-out)] absolute w-full">
              Your Embedded Partner for Frontend & Backend Excellence
            </h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
            We engineer type-safe, performant frontends & backend APIs using React, Angular, Next.js, NestJS, Node.js, and modern reactive/state tools (RxJS, Effect-TS, Zustand) to help teams ship faster with confidence.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">Schedule a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              The Team Behind the Code
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We are the engineering partner we always wished we had — deep technical expertise paired with true partnership and transparent communication, helping teams turn ambitious ideas into production-grade software.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <Card key={value.name} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16 py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">How We Can Help You</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Focused on four pillars: modern frontend engineering, resilient reactive/state architecture, scalable TypeScript APIs, and cohesive full-stack delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<LayoutDashboard className="h-8 w-8 text-primary" />}
              title="Frontend Engineering"
              description="Component-driven, accessible, high-performance UIs in React, Next.js, Angular & Astro with design systems and SSR/ISR optimization."
              href="/#services"
            />
            <ServiceCard
              icon={<Workflow className="h-8 w-8 text-primary" />}
              title="Reactive & State Architecture"
              description="Predictable dataflow & side-effect management using RxJS, Effect-TS, Zustand; scalable store patterns & stream composition."
              href="/#services"
            />
            <ServiceCard
              icon={<Server className="h-8 w-8 text-primary" />}
              title="Backend APIs (Node/Nest/Express)"
              description="Type-safe REST/GraphQL APIs, modular NestJS architecture, auth, caching, testing, performance profiling & observability."
              href="/#services"
            />
            <ServiceCard
              icon={<Layers className="h-8 w-8 text-primary" />}
              title="Full-Stack Delivery"
              description="End-to-end integration: frontend + backend alignment, CI/CD, code quality processes, performance budgets, maintainable monorepos."
              href="/#services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Why Partner on Your Stack With Us?
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We blend architecture discipline with delivery speed—turning complex frontend + backend requirements into maintainable systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Embedded Technical Partner"
              description="We collaborate inside your workflow—shaping architecture, mentoring teams, refining PRs, and accelerating roadmap execution."
            />
            <FeatureCard
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="Process That Scales"
              description="Incremental delivery, observability, performance budgets, contract testing & CI/CD pipelines that keep velocity sustainable."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="Proven Type-Safe Stack"
              description="React, Angular, Next.js, NestJS, Node.js, RxJS, Effect-TS & robust typing patterns to reduce runtime defects and future refactor cost."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project. We&apos;ll be in touch within one business day.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-headline font-bold">Other Ways to Connect</h3>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <a
                    href="mailto:hello@craftedcode.com"
                    className="text-primary font-medium hover:underline"
                  >
                    hello@craftedcode.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-primary font-medium hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
