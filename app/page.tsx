'use client';

import Image from 'next/image';
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
  Cloud,
  BrainCircuit,
  Bot,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import { FeatureCard } from '@/components/feature-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CarouselControls } from '@/components/carousel-controls';
import { useCarouselPagination } from '@/hooks/useCarouselPagination';

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

const services = [
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Frontend Engineering',
    description: 'Component-driven, accessible, high-performance UIs in React, Next.js, Angular & Astro with design systems and SSR/ISR optimization.',
    href: '/#services',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Reactive & State Architecture',
    description: 'Predictable dataflow & side-effect management using RxJS, Effect-TS, Zustand; scalable store patterns & stream composition.',
    href: '/#services',
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'Backend APIs (Node/Nest/Express)',
    description: 'Type-safe REST/GraphQL APIs, modular NestJS architecture, auth, caching, testing, performance profiling & observability.',
    href: '/#services',
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: 'Full-Stack Delivery',
    description: 'End-to-end integration: frontend + backend alignment, CI/CD, code quality processes, performance budgets, maintainable monorepos.',
    href: '/#services',
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Cloud & DevOps',
    description: 'Containerization, cloud deployment (AWS, GCP, Azure), infrastructure as code, monitoring, and performance optimization.',
    href: '/#services',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Agentic frameworks & AI-Enabled Delivery',
    description: 'Leveraging AI for project scoping, architecture design, and implementation strategies to accelerate development.',
    href: '/#services',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI & Machine Learning',
    description: 'Implementing intelligent solutions using AI and machine learning to enhance decision-making and automate processes.',
    href: '/#services',
  },
  {
  icon: <Database className="h-8 w-8 text-primary" />,
  title: 'Database & Data Engineering',
  description: 'Schema design, query optimization, and data pipeline architecture across relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) systems — including migrations, replication, and real-time data flows.',
  href: '/#services',
}
];

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Embedded Technical Partner',
    description: 'We collaborate inside your workflow—shaping architecture, mentoring teams, refining PRs, and accelerating roadmap execution.',
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Process That Scales',
    description: 'Incremental delivery, observability, performance budgets, contract testing & CI/CD pipelines that keep velocity sustainable.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Proven Type-Safe Stack',
    description: 'React, Angular, Next.js, NestJS, Node.js, RxJS, Effect-TS & robust typing patterns to reduce runtime defects and future refactor cost.',
  },
];

export default function Home() {
  const servicesPag = useCarouselPagination(services.length);
  const valuesPag = useCarouselPagination(values.length);
  const featuresPag = useCarouselPagination(features.length);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-10 md:py-20">
        <div className="container flex flex-col px-4 mx-auto">
          <div className="relative sm:h-32 md:h-60 h-80 w-full lg:w-1/2 md:w-2/4 mb-4 flex items-center justify-center overflow-hidden">
            <h1 className="text-4xl font-headline font-bold text-primary transition-all duration-1000 ease-[var(--ease-back-in-out)] absolute w-full">
              From AI-enabled planning to implementation, we deliver efficient development tailored to your business needs
            </h1>
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
            We focus on performance, speed, and measurable results.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-16 py-16 md:py-24 bg-secondary/30">
        <div className="text-center mb-12 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">How We Can Help You</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Focused on four pillars: modern frontend engineering, resilient reactive/state architecture, scalable TypeScript APIs, and cohesive full-stack delivery.
          </p>
        </div>
        <div
          ref={servicesPag.ref}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scroll-px-4 scrollbar-hide"
        >
          {services.map(service => (
            <div
              key={service.title}
              className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-3*2rem)/4)]"
            >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            ))}
        </div>
        <CarouselControls pagination={servicesPag} label="services" />
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
          <div
            ref={valuesPag.ref}
            className="mt-12 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0"
          >
            {values.map(value => (
              <div
                key={value.name}
                className="snap-center shrink-0 w-[85%] sm:w-[55%] md:w-auto md:shrink"
              >
                <Card className="text-center h-full">
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
              </div>
            ))}
          </div>
          <CarouselControls pagination={valuesPag} label="values" className="md:hidden" />
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
          <div
            ref={featuresPag.ref}
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-4 px-4 md:mx-0 md:px-0 pb-4 md:pb-0 text-center"
          >
            {features.map(feature => (
              <div
                key={feature.title}
                className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto md:shrink"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
          <CarouselControls pagination={featuresPag} label="features" className="md:hidden" />
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

          <div className="mt-12 justify-center">
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <a
                    href="mailto:solutions@signlanguagetech.com"
                    className="text-primary font-medium hover:underline"
                  >
                    solutions@signlanguagetech.com
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
