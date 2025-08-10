'use client';

import Link from 'next/link';
import { LayoutDashboard, Workflow, Server, Layers, Users, Rocket, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/service-card';
import { FeatureCard } from '@/components/feature-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { useRotatingList } from '@/hooks/useRotatingList';

const headlines = [
  'Production-grade Frontend & Backend Engineering: React, Angular, Next.js, Node.js.',
  'Robust Reactive Architectures with RxJS, Effect-TS & Zustand.',
  'Type-safe APIs & Performant Interfaces Delivered with Craft & Speed.',
];

export default function Home() {
  const { index: currentHeadline } = useRotatingList(headlines, 3000);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-10 md:py-20">
        <div className="container flex flex-col px-4 mx-auto">
          <div className="relative sm:h-32 md:h-60 h-80 w-full lg:w-1/2 md:w-2/4 mb-4 flex items-center justify-center overflow-hidden">
            {headlines.map((headline, index) => (
            <h1
                key={index}
                className={`text-4xl font-headline font-bold text-primary transition-all duration-1000 ease-[var(--ease-back-in-out)] absolute w-full ${
                  index === currentHeadline
                    ? 'opacity-100 transform-none'
                    : 'opacity-0 transform -translate-y-full'
                }`}
            >
                {headline}
            </h1>
            ))}
          </div>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
            We partner with innovative companies to design, build, and scale
            exceptional digital products.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              How We Can Help You
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We offer a complete range of services to bring your digital
              products to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<LayoutDashboard className="h-8 w-8 text-primary" />}
              title="Frontend Engineering"
              description="Component-driven, accessible, high-performance UIs in React, Next.js, Angular & Astro with design systems and SSR/ISR optimization."
              href="/services/frontend-engineering"
            />
            <ServiceCard
              icon={<Workflow className="h-8 w-8 text-primary" />}
              title="Reactive & State Architecture"
              description="Predictable dataflow & side-effect management using RxJS, Effect-TS, Zustand; scalable store patterns & stream composition."
              href="/services/reactive-architecture"
            />
            <ServiceCard
              icon={<Server className="h-8 w-8 text-primary" />}
              title="Backend APIs (Node/Nest/Express)"
              description="Type-safe REST/GraphQL APIs, modular NestJS architecture, auth, caching, testing, performance profiling & observability."
              href="/services/backend-apis"
            />
            <ServiceCard
              icon={<Layers className="h-8 w-8 text-primary" />}
              title="Full-Stack Delivery"
              description="End-to-end integration: frontend + backend alignment, CI/CD, code quality processes, performance budgets, maintainable monorepos."
              href="/services/full-stack-delivery"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Why Partner With Crafted Code?
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We're more than just developers. We're your dedicated technical
              partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="A Partner, Not Just a Provider"
              description="We deeply integrate with your team to understand your vision, goals, and challenges, ensuring we deliver results that truly matter."
            />
            <FeatureCard
              icon={<Rocket className="h-10 w-10 text-primary" />}
              title="Transparent & Agile Process"
              description="You'll have full visibility and control over the project's progress with our proven agile development methodology and open communication."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="Deep Technical Expertise"
              description="Our dedicated team of senior engineers is committed to the highest standards of quality, security, and performance in everything we build."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Crafted Code was instrumental in launching our new platform. Their technical skill and project management were top-notch, delivering ahead of schedule."
              name="Jane Doe"
              title="CTO at ExampleCorp"
              avatarUrl="https://placehold.co/100x100"
              avatarFallback="JD"
            />
            <TestimonialCard
              quote="The team's attention to detail and commitment to quality is unparalleled. They transformed our user experience and significantly boosted engagement."
              name="John Smith"
              title="Founder at Innovate LLC"
              avatarUrl="https://placehold.co/100x100"
              avatarFallback="JS"
            />
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's turn your idea into a reality.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
