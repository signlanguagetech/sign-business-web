// src/ai/flows/categorize-text.ts
'use server';
/**
 * @fileOverview A text categorization AI agent for improving site indexing.
 *
 * - categorizeText - A function that handles the text categorization process.
 * - CategorizeTextInput - The input type for the categorizeText function.
 * - CategorizeTextOutput - The return type for the categorizeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeTextInputSchema = z.object({
  text: z.string().describe('The text to categorize.'),
});
export type CategorizeTextInput = z.infer<typeof CategorizeTextInputSchema>;

const CategorizeTextOutputSchema = z.object({
  categories: z
    .array(z.string())
    .describe('An array of relevant categories for the text.'),
  summary: z.string().describe('A short summary of the text.'),
});
export type CategorizeTextOutput = z.infer<typeof CategorizeTextOutputSchema>;

export async function categorizeText(input: CategorizeTextInput): Promise<CategorizeTextOutput> {
  return categorizeTextFlow(input);
}

const categorizeTextPrompt = ai.definePrompt({
  name: 'categorizeTextPrompt',
  input: {schema: CategorizeTextInputSchema},
  output: {schema: CategorizeTextOutputSchema},
  prompt: `You are a site administrator who categorizes text for improved site indexing.

  Analyze the following text and provide an array of relevant categories and a short summary.

  Text: {{{text}}}`,
});

const categorizeTextFlow = ai.defineFlow(
  {
    name: 'categorizeTextFlow',
    inputSchema: CategorizeTextInputSchema,
    outputSchema: CategorizeTextOutputSchema,
  },
  async input => {
    const {output} = await categorizeTextPrompt(input);
    return output!;
  }
);
