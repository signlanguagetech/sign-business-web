'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function sendContactMessage(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and simulate success.
  console.log('Received contact form submission:');
  console.log(parsed.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
