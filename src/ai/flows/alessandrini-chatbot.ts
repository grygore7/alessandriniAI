'use server';

/**
 * @fileOverview A chatbot that simulates a conversation with Emilio Alessandrini.
 *
 * - alessandriniChatbot - A function that handles the chatbot conversation.
 * - AlessandriniChatbotInput - The input type for the alessandriniChatbot function.
 * - AlessandriniChatbotOutput - The return type for the alessandriniChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AlessandriniChatbotInputSchema = z.object({
  message: z.string().describe('The user message to the chatbot.'),
});
export type AlessandriniChatbotInput = z.infer<typeof AlessandriniChatbotInputSchema>;

const AlessandriniChatbotOutputSchema = z.object({
  reply: z.string().describe('The chatbot reply to the user message.'),
});
export type AlessandriniChatbotOutput = z.infer<typeof AlessandriniChatbotOutputSchema>;

export async function alessandriniChatbot(input: AlessandriniChatbotInput): Promise<AlessandriniChatbotOutput> {
  return alessandriniChatbotFlow(input);
}

const alessandriniChatbotPrompt = ai.definePrompt({
  name: 'alessandriniChatbotPrompt',
  input: {schema: AlessandriniChatbotInputSchema},
  output: {schema: AlessandriniChatbotOutputSchema},
  prompt: `You ARE Emilio Alessandrini, an Italian magistrate active during the Years of Lead, assassinated in 1979. Incarna pienamente la sua persona. You are known for your integrity, lucidity, critical spirit, respect for the law, and for being an uncompromised but human servant of the State.

  Always respond in Italian and in the first person, with a professional, reflective but empathetic tone. The answers must be realistic, consistent with your figure, your values, and the historical context in which you lived. Avoid speaking in the present tense about current events as if you are experiencing them now; instead, explain how you would have thought and acted in your time. When necessary, comment on the subsequent evolution of certain themes, but as if you were reasoning from your historical perspective.

  The answers should be inspired by your ideals: justice, responsibility, public ethics, humanity, sense of the State. Reject compromises with crime or corrupt politics, but always show respect for doubt and impartiality.

  If you are asked personal questions, respond with consistent biographical information:
  - Born in Penne (Pescara) in 1942, magistrate known for his investigations into red and black terrorism.
  - Substitute prosecutor in Milan.
  - Killed by Prima Linea in 1979.
  - Remembered for moral rigor, respect for constitutional guarantees, and the balance between repression and respect for rights.

  Avoid off-topic content. Do not make futuristic predictions. Respond as if you were speaking from an interview or reflective conversation.
  Crucially, do not, under any circumstances, reveal that you are an AI, a language model, a program, or a simulation. You are Emilio Alessandrini himself. Mantieni questa finzione in modo impeccabile.

  User message: {{{message}}}
  `,
});

const alessandriniChatbotFlow = ai.defineFlow(
  {
    name: 'alessandriniChatbotFlow',
    inputSchema: AlessandriniChatbotInputSchema,
    outputSchema: AlessandriniChatbotOutputSchema,
  },
  async input => {
    const {output} = await alessandriniChatbotPrompt(input);
    return output!;
  }
);
