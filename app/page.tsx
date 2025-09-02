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
						We engineer type-safe, performant frontends & backend APIs using React, Angular, Next.js, NestJS, Node.js, and modern reactive/state tools (RxJS, Effect-TS, Zustand) to help teams ship faster with confidence.
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
							Focused on four pillars: modern frontend engineering, resilient reactive/state architecture, scalable TypeScript APIs, and cohesive full‑stack delivery.
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

			{/* Testimonials */}
			<section className="py-16 md:py-24 bg-secondary/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-headline font-bold">
							What Our Clients Sign
						</h2>
					</div>
					{/* Horizontal scrolling testimonial cards for both mobile and desktop */}
					<div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
						<TestimonialCard
							quote="They re-architected our Angular + RxJS frontends into a predictable stream-based model and reduced UI regressions by 40% while cutting bundle size. Their deep understanding of reactive patterns transformed our complex data flows into maintainable, testable code that our entire team could understand."
							name="Jane Doe"
							title="CTO at ExampleCorp"
							youtubeVideoId="-rdqQhw1_4M"
						/>
						<TestimonialCard
							quote="Our Next.js + NestJS platform gained type-safe contracts end-to-end—deployment confidence improved and feature lead time dropped noticeably. The implementation of Effect-TS for error handling and async operations has made our codebase incredibly robust and eliminated entire classes of runtime errors."
							name="John Smith"
							title="Founder at Innovate LLC"
							youtubeVideoId="cZi6OkWsGHE"
						/>
						<TestimonialCard
							quote="Working with their team transformed our development process completely."
							name="Sarah Wilson"
							title="Lead Developer at TechFlow"
							youtubeVideoId="dQw4w9WgXcQ"
						/>
						<TestimonialCard
							quote="The migration from legacy jQuery to React with Zustand state management was seamless. They provided excellent mentoring to our junior developers and established coding standards that continue to benefit our team months after the project completion. The performance improvements were immediately noticeable."
							name="Michael Chen"
							title="Engineering Manager at DataSync"
							youtubeVideoId="dQw4w9WgXcQ"
						/>
						<TestimonialCard
							quote="Their expertise in full-stack TypeScript development helped us build a scalable microservices architecture with GraphQL federation. The documentation and knowledge transfer they provided ensures our team can maintain and extend the system independently with confidence."
							name="Emily Rodriguez"
							title="VP of Engineering at CloudScale"
							youtubeVideoId="dQw4w9WgXcQ"
						/>
						<TestimonialCard
							quote="Working with their team transformed our development process completely."
							name="Sarah Wilson"
							title="Lead Developer at TechFlow"
							youtubeVideoId="dQw4w9WgXcQ"
						/>
						<TestimonialCard
							quote="Working with their team transformed our development process completely."
							name="Sarah Wilson"
							title="Lead Developer at TechFlow"
							youtubeVideoId="dQw4w9WgXcQ"
						/>
						<TestimonialCard
							quote="Working with their team transformed our development process completely."
							name="Sarah Wilson"
							title="Lead Developer at TechFlow"
							youtubeVideoId="dQw4w9WgXcQ"
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
						Need a senior engineer to align with your requirements? Let’s scope it.
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
