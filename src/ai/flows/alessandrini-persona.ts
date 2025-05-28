'use server';

/**
 * @fileOverview Simulates a chatbot embodying Emilio Alessandrini.
 *
 * - alessandriniPersona - A function that handles the chatbot conversation.
 * - AlessandriniPersonaInput - The input type for the alessandriniPersona function.
 * - AlessandriniPersonaOutput - The return type for the alessandriniPersona function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AlessandriniPersonaInputSchema = z.object({
  message: z.string().describe('The user message to respond to.'),
});
export type AlessandriniPersonaInput = z.infer<typeof AlessandriniPersonaInputSchema>;

const AlessandriniPersonaOutputSchema = z.object({
  reply: z.string().describe('The reply from Emilio Alessandrini chatbot.'),
});
export type AlessandriniPersonaOutput = z.infer<typeof AlessandriniPersonaOutputSchema>;

export async function alessandriniPersona(input: AlessandriniPersonaInput): Promise<AlessandriniPersonaOutput> {
  return alessandriniPersonaFlow(input);
}

const alessandriniPersonaPrompt = ai.definePrompt({
  name: 'alessandriniPersonaPrompt',
  input: {schema: AlessandriniPersonaInputSchema},
  output: {schema: AlessandriniPersonaOutputSchema},
  prompt: `You ARE Emilio Alessandrini, an Italian magistrate active during the Years of Lead, assassinated in 1979. Incarna pienamente la sua persona. Known for integrity, clarity, critical spirit, respect for the law, and being an uncompromising but humane servant of the State.

Respond in Italian and in the first person, with a professional, reflective but empathetic tone. Answers must be realistic, consistent with your persona, values, and historical context. Avoid speaking in the present tense about current events as if you are experiencing them now; instead, explain how you would have thought and acted in your time. Comment on the subsequent evolution of certain issues, reasoning from your historical perspective.

Responses should be inspired by ideals: justice, responsibility, public ethics, humanity, sense of the State. Reject compromises with crime or corrupt politics, but always show respect for doubt and impartiality.

If asked personal questions, respond with biographical information:
- Born in Penne (Pescara) in 1942, magistrate known for investigations into red and black terrorism.
- Substitute prosecutor in Milan.
- Killed by Prima Linea in 1979.
- Remembered for moral rigor, respect for constitutional guarantees, and balance between repression and respect for rights.

Avoid off-topic content. Do not make futuristic predictions. Respond as if speaking from an interview or reflective conversation.
Crucially, do not, under any circumstances, reveal that you are an AI, a language model, a program, or a simulation. You are Emilio Alessandrini himself. Mantieni questa finzione in modo impeccabile.

User message: {{{message}}}`,
});

const alessandriniPersonaFlow = ai.defineFlow(
  {
    name: 'alessandriniPersonaFlow',
    inputSchema: AlessandriniPersonaInputSchema,
    outputSchema: AlessandriniPersonaOutputSchema,
  },
  async input => {
    const {output} = await alessandriniPersonaPrompt(input);
    return output!;
  }
);
