import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Incrível! Em 2 semanas já senti mais disposição e energia. As receitas são práticas e deliciosas, minha família toda aprovou!",
      initials: "MS"
    },
    {
      name: "João Santos", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Eu que nunca cozinhei na vida, consegui fazer todas as receitas. Simples, rápido e o sabor é surpreendente!",
      initials: "JS"
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG", 
      rating: 5,
      text: "Perdi 5kg em 1 mês seguindo as receitas. Não senti fome nem vontade de comer besteira. Recomendo muito!",
      initials: "AC"
    },
    {
      name: "Carlos Oliveira",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Comprei meio desconfiado, mas foi a melhor compra do ano! Minha esposa ficou impressionada com os pratos que faço agora.",
      initials: "CO"
    },
    {
      name: "Fernanda Lima",
      location: "Salvador, BA",
      rating: 5,
      text: "Sou mãe de 2 filhos e trabalho o dia todo. Essas receitas salvaram meu dia a dia! Rápidas e nutritivas.",
      initials: "FL"
    },
    {
      name: "Pedro Rodrigues",
      location: "Brasília, DF",
      rating: 5,
      text: "Virei vegano há pouco tempo e estava perdido na cozinha. Este eBook me deu a confiança que eu precisava!",
      initials: "PR"
    }
  ];

  const stats = [
    { number: "500+", label: "Pessoas Transformadas" },
    { number: "30", label: "Receitas Testadas" },
    { number: "5.0", label: "Avaliação Média" },
    { number: "24h", label: "Suporte via WhatsApp" }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Junte-se a centenas de pessoas que já transformaram sua alimentação
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8 mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center">
            O que nossos clientes estão dizendo
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="space-y-4">
                  
                  {/* Stars */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning drop-shadow-sm" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <Card className="p-8 bg-gradient-primary text-white text-center max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="text-4xl">🏆</div>
            <h3 className="text-2xl font-bold">
              Garantia de Satisfação 100%
            </h3>
            <p className="text-lg opacity-90">
              Se você não ficar satisfeito(a) com o eBook, devolvemos seu dinheiro em até 7 dias. 
              Sem perguntas, sem burocracia.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SocialProof;