import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Cpu, Database, Layers, GitBranch, Cloudy, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software Development | Crafted Code',
    description: 'Bespoke software solutions tailored to your unique business needs, from web apps to complex system integrations.',
};

const capabilities = [
    { title: "Web Application Development", description: "Building responsive, high-performance web apps for any business function." },
    { title: "API Development & Integration", description: "Creating robust APIs and integrating third-party services to extend your software's capabilities." },
    { title: "Legacy System Modernization", description: "Upgrading outdated systems to improve performance, security, and maintainability." },
    { title: "SaaS Product Development", description: "From concept to launch, we build scalable and secure Software-as-a-Service products." },
];

const processSteps = [
    { icon: <Search className="h-8 w-8 text-accent" />, name: "Discovery & Strategy", description: "We start by understanding your goals, challenges, and requirements to create a detailed project roadmap." },
    { icon: <Layers className="h-8 w-8 text-accent" />, name: "Design & Prototyping", description: "Our UI/UX experts design intuitive interfaces and create interactive prototypes for your feedback." },
    { icon: <GitBranch className="h-8 w-8 text-accent" />, name: "Development & Testing", description: "Our agile development teams write clean, efficient code and perform rigorous testing to ensure quality." },
    { icon: <Cloudy className="h-8 w-8 text-accent" />, name: "Deployment & Support", description: "We handle the deployment process and provide ongoing support to ensure your application runs smoothly." },
];

const techStack = ["Python", "JavaScript", "React", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Google Cloud"];

export default function CustomSoftwareDevelopmentPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-accent font-semibold">Our Services</p>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mt-2">
                            Custom Software Development
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We build custom software applications tailored to your specific business needs, ensuring seamless integration with your existing systems and scalability for future growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">
                            Our Custom Development Capabilities
                        </h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                            From complex enterprise platforms to sleek single-purpose applications, we have the expertise to deliver.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((capability) => (
                            <Card key={capability.title}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Cpu className="h-8 w-8 text-primary" />
                                    <CardTitle className="font-headline text-xl">{capability.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{capability.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Our Process Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">
                            Our Approach to Development
                        </h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                            Our proven process ensures high-quality results, delivered on time and on budget.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={step.name} className="text-center">
                                <div className="mx-auto bg-background p-4 rounded-full w-fit mb-4 shadow-md">{step.icon}</div>
                                <h3 className="font-headline font-bold text-lg mb-2">
                                    <span className="text-accent">{index + 1}.</span> {step.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Tech Stack Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">
                            Our Tech Stack
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            We use modern, robust technologies to build future-proof applications.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        {techStack.map((tech) => (
                            <div key={tech} className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full text-muted-foreground font-medium">
                                <Database className="h-5 w-5 text-accent" />
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">
                        Ready to Start Your Project?
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        Let's discuss your specific needs and how our custom software development services can help you achieve your goals.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/contact">Get a Project Estimate</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
