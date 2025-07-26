import { Card } from "@/components/ui/card";
import { Heart, Zap, Leaf, Clock, Users, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Saúde em Primeiro Lugar",
      description: "Receitas nutritivas que fortalecem seu sistema imunológico e melhoram sua disposição diária."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mais Energia Natural",
      description: "Sinta-se revigorado(a) com alimentos que realmente nutrem seu corpo e mente."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Plant-Based",
      description: "Ingredientes naturais, sem crueldade animal e que respeitam o meio ambiente."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Preparo Rápido",
      description: "Todas as receitas ficam prontas em até 30 minutos. Perfeito para a correria do dia a dia."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Para Toda Família",
      description: "Sabores que agradam até quem não é vegano. Conquiste todos na mesa!"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Resultados Garantidos",
      description: "Mais de 500 pessoas já transformaram sua alimentação com nossas receitas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher nossas receitas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como pequenas mudanças na alimentação podem transformar completamente sua vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <div className="text-primary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;