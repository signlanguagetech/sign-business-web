import { ContactForm } from './contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Crafted Code',
    description: 'Get in touch with the Crafted Code team to discuss your project.',
};

export default function ContactPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                            Let's Start a Conversation
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            We'd love to hear about your project. Fill out the form below, and we'll be in touch within one business day.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-headline font-bold">Other Ways to Connect</h2>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">Send us an email directly.</p>
                                    <a href="mailto:hello@craftedcode.com" className="text-primary font-medium hover:underline">
                                        hello@craftedcode.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Call Us</h3>
                                    <p className="text-muted-foreground">Speak with our team.</p>
                                    <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Our Office</h3>
                                    <p className="text-muted-foreground">123 Tech Avenue, Suite 100<br/>Innovation City, 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
