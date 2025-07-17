import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BarChart, TrendingUp, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Study: Fintech Mobile App | Crafted Code',
    description: 'See how we developed a secure and user-friendly mobile app that increased user engagement by 40%.',
};

const results = [
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, value: "40%", label: "Increase in User Engagement" },
    { icon: <Users className="h-8 w-8 text-primary" />, value: "5-Star", label: "Rating on the App Store" },
    { icon: <BarChart className="h-8 w-8 text-primary" />, value: "30%", label: "Reduction in Server Costs" },
];

export default function CaseStudyPage() {
    return (
        <div className="bg-background">
            {/* Project Header */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-accent font-semibold text-center">Case Study</p>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mt-2 text-center">
                            Fintech Mobile App
                        </h1>
                        <div className="mt-6 flex justify-center flex-wrap gap-2">
                            <Badge variant="default">UI/UX Design</Badge>
                            <Badge variant="default">iOS Development</Badge>
                            <Badge variant="default">API Integration</Badge>
                            <Badge variant="default">Security</Badge>
                        </div>
                        <div className="mt-12">
                            <Image
                                src="https://placehold.co/1200x600"
                                alt="Fintech Mobile App Showcase"
                                width={1200}
                                height={600}
                                data-ai-hint="mobile app interface"
                                className="rounded-lg shadow-xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column (The Challenge & Our Solution) */}
                        <div className="lg:col-span-2">
                            <div className="mb-12">
                                <h2 className="font-headline text-3xl font-bold mb-4">The Challenge</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    A promising fintech startup needed to launch a mobile-first platform for personal finance management. Their goal was to create a highly secure, intuitive, and user-friendly app that could simplify budgeting and investing for millennials. They faced the challenge of building a robust backend, ensuring bank-level security, and designing an interface that was engaging enough to drive daily use.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-headline text-3xl font-bold mb-4">Our Solution</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    Crafted Code partnered with the client to deliver a full-cycle development solution. Our process included:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                                        <span className="text-muted-foreground text-lg">
                                            <strong>Discovery & UI/UX Design:</strong> We conducted extensive user research to inform a clean, gamified UI/UX design, which we prototyped and tested iteratively.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                                        <span className="text-muted-foreground text-lg">
                                            <strong>Native iOS Development:</strong> We built a high-performance native iOS application using Swift, ensuring a smooth and responsive user experience.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                                        <span className="text-muted-foreground text-lg">
                                            <strong>Secure API & Backend:</strong> We developed a secure backend and integrated it with multiple financial data providers and payment gateways, implementing multi-factor authentication and data encryption.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column (Client Info & Testimonial) */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-24">
                                <CardContent className="p-6">
                                    <h3 className="font-headline text-xl font-bold mb-4">Project Information</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Client:</span>
                                            <span className="font-semibold">Fintech Innovators Inc.</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Industry:</span>
                                            <span className="font-semibold">Financial Technology</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Services:</span>
                                            <span className="font-semibold">Mobile App, UI/UX</span>
                                        </div>
                                    </div>

                                    <hr className="my-6"/>

                                    <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                                        "Crafted Code didn't just build an app; they built the foundation of our business. Their expertise and dedication were phenomenal."
                                    </blockquote>
                                    <p className="mt-4 font-semibold text-right">- CEO, Fintech Innovators Inc.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">The Results</h2>
                        <p className="mt-2 text-muted-foreground">Tangible outcomes that drove business success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {results.map((result) => (
                            <Card key={result.label}>
                                <CardContent className="p-6">
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">{result.icon}</div>
                                    <p className="text-4xl font-bold text-primary">{result.value}</p>
                                    <p className="text-muted-foreground mt-1">{result.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
