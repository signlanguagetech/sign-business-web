'use server';

import { categorizeText, type CategorizeTextOutput } from '@/ai/flows/categorize-text';

export async function analyzeText(input: { text: string }): Promise<CategorizeTextOutput | null> {
    if (!input.text || input.text.length < 50) {
        throw new Error("Text must be at least 50 characters long.");
    }

    try {
        const result = await categorizeText(input);
        return result;
    } catch (error) {
        console.error("Error in categorizeText flow:", error);
        return null;
    }
}
