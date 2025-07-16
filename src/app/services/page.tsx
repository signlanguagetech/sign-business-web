import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Palette, Smartphone, Cloud, Check } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Crafted Code',
    description: 'Explore our expert software development, design, mobile, and cloud services.',
};

const services = [
    {
        icon: <Code className="h-8 w-8 text-accent" />,
        title: "Custom Software Development",
        description: "Tailored software solutions that solve your unique business challenges and scale with your growth.",
        href: "/services/custom-software-development",
        features: ["Web Application Development", "API Development & Integration", "SaaS Product Development", "System Architecture Design"],
    },
    {
        icon: <Palette className="h-8 w-8 text-accent" />,
        title: "UI/UX Design",
        description: "Creating intuitive, beautiful, and user-centric interfaces that provide a seamless and engaging user experience.",
        href: "#",
        features: ["User Research & Analysis", "Wireframing & Prototyping", "Interaction Design", "Usability Testing"],
    },
    {
        icon: <Smartphone className="h-8 w-8 text-accent" />,
        title: "Mobile App Development",
        description: "Building performant, scalable, and engaging native and cross-platform mobile applications for both iOS and Android.",
        href: "#",
        features: ["Native iOS & Android Apps", "Cross-Platform Development", "App Store Deployment", "Maintenance & Support"],
    },
    {
        icon: <Cloud className="h-8 w-8 text-accent" />,
        title: "Cloud & DevOps",
        description: "Automating your infrastructure and deployment pipelines for maximum efficiency, scalability, and reliability.",
        href: "#",
        features: ["Cloud Migration & Strategy", "CI/CD Pipeline Automation", "Infrastructure as Code (IaC)", "Performance Monitoring"],
    },
]

export default function ServicesPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                        Our Services
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We provide a comprehensive suite of services designed to transform your ideas into powerful, market-ready digital products.
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
                                        <div className="p-3 bg-accent/10 rounded-full">{service.icon}</div>
                                        <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col">
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-accent" />
                                                <span className="text-sm">{feature}</span>
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
                        Have a Project in Mind?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Let's discuss how our expertise can bring your vision to life.
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
