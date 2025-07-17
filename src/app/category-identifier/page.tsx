import { CategoryForm } from './category-form';
import type { Metadata } from 'next';
import { Bot } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Category Identifier | Crafted Code',
    description: 'Use our AI tool to analyze and categorize text for improved site indexing and content strategy.',
};

export default function CategoryIdentifierPage() {
    return (
        <div className="bg-background">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                            <Bot className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
                            AI Category Identifier
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Paste any text into the field below, and our AI will analyze it to suggest relevant categories and provide a concise summary. This tool is perfect for improving site indexing and content strategy.
                        </p>
                    </div>

                    <div className="mt-12 max-w-4xl mx-auto">
                        <CategoryForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
