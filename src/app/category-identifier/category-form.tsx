'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { analyzeText } from './actions';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Loader2, Tags, Newspaper } from 'lucide-react';

const formSchema = z.object({
  text: z.string().min(50, { message: "Please enter at least 50 characters for analysis." }),
});

type AnalysisResult = {
  categories: string[];
  summary: string;
};

export function CategoryForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const analysisResult = await analyzeText(values);
      if (analysisResult) {
        setResult(analysisResult);
      } else {
        throw new Error("Analysis failed to produce a result.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "There was a problem analyzing your text. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Text to Analyze</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste your article, blog post, or any text here..."
                      className="min-h-[200px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Analyze Text
                </>
              )}
            </Button>
          </form>
        </Form>

        {result && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-2xl font-headline font-bold mb-4">Analysis Results</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <Tags className="h-5 w-5 text-accent" />
                  <CardTitle className="text-lg">Suggested Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.categories.map((category, index) => (
                      <Badge key={index} variant="outline" className="text-base px-3 py-1">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <Newspaper className="h-5 w-5 text-accent" />
                  <CardTitle className="text-lg">AI Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.summary}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
