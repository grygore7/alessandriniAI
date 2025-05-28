
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function EmilioAlessandriniPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader title="Chi era Emilio Alessandrini">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Torna alla Chat
          </Link>
        </Button>
      </PageHeader>
      <main className="flex-grow container mx-auto p-4 md:p-8 space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Biografia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Emilio Alessandrini (Penne, 30 agosto 1942 – Milano, 29 gennaio 1979) è stato un magistrato italiano, noto per il suo impegno durante gli anni di piombo. Fu assassinato da un commando del gruppo terroristico Prima Linea.
            </p>
            <p>
              Entrato in magistratura nel 1968, divenne sostituto procuratore della Repubblica presso il tribunale di Milano. Si distinse per la sua preparazione tecnica, la sua indipendenza e il suo rigore morale. Si occupò di importanti inchieste sul terrorismo di destra e di sinistra, nonché sulla criminalità organizzata e sulla corruzione.
            </p>
             <img src="https://cloud.rtl.it/RTLFM/News/Article/1000x1000/emilio-alessandrini-40-anni-fa-l-omicidio-del-magistrato-dmka3.jpg" alt="Emilio Alessandrini Portrait" className="rounded-md my-4" />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contesto Storico: Gli Anni di Piombo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Gli anni di piombo rappresentano un periodo della storia d'Italia, compreso approssimativamente tra la fine degli anni '60 e gli inizi degli anni '80, caratterizzato da una forte radicalizzazione politica e da un'ondata di violenza di matrice terroristica. In questo clima di tensione, magistrati come Emilio Alessandrini si trovarono in prima linea nella difesa dello Stato democratico.
            </p>
             <img src="https://www.repstatic.it/content/localirep/img/rep-milano/2018/05/10/140745044-876b8554-e571-44be-9740-59e44b672b10.jpg" alt="Historical Context Italy" className="rounded-md my-4" />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Perché è Ricordato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Emilio Alessandrini è ricordato per il suo coraggio, la sua integrità e la sua profonda dedizione alla giustizia. Nonostante le minacce e il clima di intimidazione, portò avanti il suo lavoro con determinazione, cercando sempre un equilibrio tra la necessità di reprimere il terrorismo e il rispetto delle garanzie costituzionali e dei diritti individuali. La sua figura è diventata un simbolo della lotta dello Stato contro la violenza politica e della difesa dei valori democratici.
            </p>
            <p>
              "La giustizia non è solo repressione, ma anche comprensione e rispetto per la dignità umana." - Questa frase, sebbene non attribuita direttamente, riflette il suo approccio.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Curiosità e Riconoscimenti</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <ul className="list-disc pl-6 space-y-2">
              <li>Numerose scuole, aule di tribunale e vie in Italia sono intitolate a Emilio Alessandrini.</li>
              <li>Ogni anno si tengono commemorazioni e convegni per ricordarne la figura e l'impegno.</li>
              <li>La sua storia è stata raccontata in libri, documentari e articoli, contribuendo a mantenerne viva la memoria.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Fonti e Approfondimenti</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-foreground/90">
            <p>Per saperne di più, puoi consultare:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://it.wikipedia.org/wiki/Emilio_Alessandrini" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wikipedia: Emilio Alessandrini</a></li>
              <li><a href="https://www.raiplay.it/ricerca.html?q=Emilio%20Alessandrini" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Rai Storia (cerca "Emilio Alessandrini")</a></li>
               <li><a href="https://www.associazionemagistrati.it/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Associazione Nazionale Magistrati (ANM)</a></li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <footer className="text-center py-4 text-muted-foreground text-sm">
        AlessandriniAI &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
