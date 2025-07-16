// src/ai/flows/generate-headline-options.ts
'use server';

/**
 * @fileOverview Generates multiple headline options for website sections based on a brief description.
 *
 * - generateHeadlineOptions - A function that generates headline options.
 * - GenerateHeadlineOptionsInput - The input type for the generateHeadlineOptions function.
 * - GenerateHeadlineOptionsOutput - The return type for the generateHeadlineOptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeadlineOptionsInputSchema = z.object({
  sectionDescription: z
    .string()
    .describe('A brief description of the website section.'),
  numOptions: z
    .number()
    .default(3)
    .describe('The number of headline options to generate.'),
});
export type GenerateHeadlineOptionsInput = z.infer<
  typeof GenerateHeadlineOptionsInputSchema
>;

const GenerateHeadlineOptionsOutputSchema = z.object({
  headlineOptions: z.array(z.string()).describe('An array of headline options.'),
});
export type GenerateHeadlineOptionsOutput = z.infer<
  typeof GenerateHeadlineOptionsOutputSchema
>;

export async function generateHeadlineOptions(
  input: GenerateHeadlineOptionsInput
): Promise<GenerateHeadlineOptionsOutput> {
  return generateHeadlineOptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeadlineOptionsPrompt',
  input: {schema: GenerateHeadlineOptionsInputSchema},
  output: {schema: GenerateHeadlineOptionsOutputSchema},
  prompt: `You are a marketing expert specializing in creating website content.

  Generate {{numOptions}} headline options for the following website section description:

  {{sectionDescription}}

  Each headline option should be concise and benefit-driven.
  Return the headline options as a JSON array of strings.
  Make sure to use double quotes around the strings in the array.

  For example:
  [\"Headline Option 1\", \"Headline Option 2\", \"Headline Option 3\"]`,
});

const generateHeadlineOptionsFlow = ai.defineFlow(
  {
    name: 'generateHeadlineOptionsFlow',
    inputSchema: GenerateHeadlineOptionsInputSchema,
    outputSchema: GenerateHeadlineOptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
