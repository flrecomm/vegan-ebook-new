import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Como recebo o eBook após a compra?",
      answer: "Após confirmar o pagamento, você receberá o eBook diretamente no seu WhatsApp em até 10 minutos. É enviado em formato PDF para você baixar e guardar para sempre."
    },
    {
      question: "As receitas são mesmo rápidas de fazer?",
      answer: "Sim! Todas as 30 receitas foram testadas e ficam prontas em até 30 minutos. A maioria leva entre 10-20 minutos. Perfeitas para quem tem uma rotina corrida."
    },
    {
      question: "Eu não sei cozinhar nada. Vai dar certo para mim?",
      answer: "Com certeza! As receitas foram pensadas para iniciantes. Cada passo é explicado de forma simples e clara, com dicas especiais para quem está começando na cozinha."
    },
    {
      question: "Os ingredientes são caros ou difíceis de encontrar?",
      answer: "Não! Priorizamos ingredientes acessíveis que você encontra em qualquer mercado. A ideia é que seja prático e econômico para o seu dia a dia."
    },
    {
      question: "Posso fazer as receitas para minha família toda?",
      answer: "Sim! As receitas são deliciosas e agradam até quem não é vegano. Você pode adaptar as porções conforme necessário. Muitas famílias já adotaram essas receitas no cardápio semanal."
    },
    {
      question: "Tem garantia? E se eu não gostar?",
      answer: "Sim! Oferecemos garantia de 7 dias. Se por qualquer motivo você não ficar satisfeito(a), devolvemos 100% do seu dinheiro sem questionamentos."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "Aceitamos pagamento via Pix (desconto especial) ou cartão de crédito. Todo o processo é seguro e você recebe o comprovante na hora."
    },
    {
      question: "Posso imprimir o eBook?",
      answer: "Claro! O PDF pode ser impresso quantas vezes quiser. Muitas pessoas gostam de ter a versão física na cozinha para consultar enquanto cozinham."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais dúvidas sobre o eBook
          </p>
        </div>

        <Card className="p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="text-center mt-12">
          <Card className="p-6 bg-muted/50 inline-block">
            <p className="text-foreground font-medium mb-2">
              Ainda tem dúvidas?
            </p>
            <p className="text-muted-foreground">
              📱 Envie uma mensagem no WhatsApp e responderemos rapidamente!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;