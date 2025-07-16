import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Work | Crafted Code',
    description: 'Explore our portfolio of successful projects and case studies.',
};

const projects = [
    {
        title: "Fintech Mobile App",
        slug: "fintech-mobile-app",
        category: "Mobile App for Fintech Startup",
        imageUrl: "https://placehold.co/600x400",
        imageHint: "mobile app interface",
        tags: ["UI/UX Design", "iOS Development", "Fintech"],
    },
    {
        title: "E-commerce Platform",
        slug: "#",
        category: "Scalable Online Retail Solution",
        imageUrl: "https://placehold.co/600x400",
        imageHint: "ecommerce website",
        tags: ["Web App", "System Integration", "Cloud"],
    },
    {
        title: "Healthcare SaaS",
        slug: "#",
        category: "Data Management for Healthcare",
        imageUrl: "https://placehold.co/600x400",
        imageHint: "dashboard analytics",
        tags: ["SaaS", "API Development", "Security"],
    },
    {
        title: "Logistics Dashboard",
        slug: "#",
        category: "Real-time Fleet Management",
        imageUrl: "https://placehold.co/600x400",
        imageHint: "map logistics",
        tags: ["Web App", "Data Visualization", "DevOps"],
    },
];

export default function PortfolioPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                        Success Stories
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We take pride in our work. Explore some of the impactful solutions we've delivered for our clients.
                    </p>
                </div>
            </section>

            {/* Projects Gallery */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Card key={project.title} className="group overflow-hidden flex flex-col">
                                <CardHeader className="p-0">
                                    <div className="overflow-hidden">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            data-ai-hint={project.imageHint}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                                    <p className="text-muted-foreground">{project.category}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0">
                                    <Button asChild variant="outline">
                                        <Link href={`/portfolio/${project.slug}`}>View Case Study</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
