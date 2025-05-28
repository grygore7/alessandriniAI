"use client";

import type { NextPage } from 'next';
import Link from 'next/link';
import { FormEvent, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import { alessandriniChatbot, AlessandriniChatbotInput, AlessandriniChatbotOutput } from '@/ai/flows/alessandrini-chatbot';
import { Info, Loader2, MessageSquare, RotateCcw, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const AlessandriniAIChatPage: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    // Autofocus on input
    inputRef.current?.focus();
    // Initial bot message
    setMessages([
      { id: Date.now().toString(), text: "Salve. Sono Emilio Alessandrini. Come posso aiutarla a riflettere oggi?", sender: 'bot' }
    ]);
  }, []);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiInput: AlessandriniChatbotInput = { message: userMessage.text };
      const aiOutput: AlessandriniChatbotOutput = await alessandriniChatbot(aiInput);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiOutput.reply,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
      toast({
        title: "Errore",
        description: "Non è stato possibile ottenere una risposta. Riprova più tardi.",
        variant: "destructive",
      });
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Mi dispiace, ho riscontrato un problema tecnico e non posso rispondere al momento.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleResetChat = () => {
    setMessages([
      { id: Date.now().toString(), text: "Chat resettata. Come posso aiutarla a riflettere?", sender: 'bot' }
    ]);
    setInputValue('');
    inputRef.current?.focus();
     toast({
        title: "Chat resettata",
        description: "La conversazione è stata azzerata.",
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageHeader title="Dialoga con Emilio Alessandrini" />

      <main className="flex-grow container mx-auto p-4 flex flex-col items-center max-w-3xl w-full">
        <Card className="w-full h-[calc(100vh-280px)] md:h-[calc(100vh-250px)] flex flex-col shadow-xl">
          <ScrollArea className="flex-grow p-4 md:p-6" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex message-fade-in ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-xl shadow ${
                      msg.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-muted-foreground rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="max-w-[75%] p-3 rounded-lg shadow bg-muted text-muted-foreground flex items-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sto pensando...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <CardContent className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
              <Input
                ref={inputRef}
                id="input"
                type="text"
                autoFocus
                placeholder="Scrivi un messaggio..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="flex-1 text-base"
                disabled={isLoading}
                aria-label="Messaggio da inviare"
              />
              <Button type="submit" disabled={isLoading || !inputValue.trim()} size="icon" aria-label="Invia messaggio">
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button onClick={handleResetChat} variant="outline" className="w-full sm:w-auto shadow-sm">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset Chat
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto shadow-sm">
            <Link href="/emilio-alessandrini">
              <Info className="mr-2 h-4 w-4" /> Scopri chi era Emilio Alessandrini
            </Link>
          </Button>
        </div>
      </main>
      <footer className="text-center py-6 text-muted-foreground text-sm">
        AlessandriniAI &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default AlessandriniAIChatPage;
