import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Crafted Code',
    description: 'Learn about the team, mission, and values behind Crafted Code.',
};

const values = [
    { name: 'Partnership', description: 'We believe in building strong, collaborative relationships with our clients, acting as an extension of their team.' },
    { name: 'Quality', description: 'Our commitment to excellence ensures we deliver robust, scalable, and high-performant software solutions.' },
    { name: 'Innovation', description: 'We constantly explore new technologies and methodologies to provide our clients with cutting-edge products.' },
    { name: 'Transparency', description: 'Open and honest communication is at the core of our process, ensuring you\'re always informed.' },
];

const team = [
    { name: 'Jane Doe', title: 'Founder & CEO', avatarUrl: 'https://placehold.co/150x150', fallback: 'JD' },
    { name: 'John Smith', title: 'Chief Technology Officer', avatarUrl: 'https://placehold.co/150x150', fallback: 'JS' },
    { name: 'Emily White', title: 'Head of Product Design', avatarUrl: 'https://placehold.co/150x150', fallback: 'EW' },
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                            The Team Behind the Code
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Crafted Code was founded on a simple principle: to be the software development partner we always wished we had. We saw a gap in the market for a firm that not only possessed deep technical expertise but also valued true partnership and transparent communication. Today, we help businesses of all sizes turn their ambitious ideas into impactful digital realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">
                            Our Guiding Principles
                        </h2>
                        <p className="mt-2 text-muted-foreground">The values that drive our work and our relationships.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <Card key={value.name} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit">
                                      <CheckCircle className="h-6 w-6 text-accent" />
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
            
            {/* Team Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">
                            Our Leadership
                        </h2>
                        <p className="mt-2 text-muted-foreground">The experts guiding our vision and your success.</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-8 md:gap-12">
                        {team.map((member) => (
                            <div key={member.name} className="flex flex-col items-center text-center w-48">
                                <Avatar className="w-32 h-32 mb-4 shadow-lg">
                                    <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="person headshot" />
                                    <AvatarFallback>{member.fallback}</AvatarFallback>
                                </Avatar>
                                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                                <p className="text-accent font-semibold">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
