import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Users, ChefHat } from "lucide-react";

const RecipePreview = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Quero conhecer mais receitas! Me envie o eBook completo 📚");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const sampleRecipes = [
    {
      name: "Bowl de Quinoa Colorido",
      time: "15 min",
      serves: "2 pessoas",
      difficulty: "Fácil",
      preview: "Uma explosão de cores e sabores com quinoa, abacate, tomate cereja, pepino e molho tahine caseiro..."
    },
    {
      name: "Curry de Grão-de-Bico Cremoso",
      time: "25 min", 
      serves: "4 pessoas",
      difficulty: "Fácil",
      preview: "Curry aromático com leite de coco, grão-de-bico, espinafre e especiarias que aquecem o coração..."
    },
    {
      name: "Smoothie Verde Energético",
      time: "5 min",
      serves: "1 pessoa", 
      difficulty: "Super Fácil",
      preview: "Mistura refrescante de banana, espinafre, manga e água de coco. Energia pura para começar o dia..."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Prévia das Receitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns exemplos do que você vai encontrar no eBook completo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {sampleRecipes.map((recipe, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {recipe.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {recipe.serves}
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="w-4 h-4" />
                    {recipe.difficulty}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {recipe.preview}
                </p>
                
                <div className="text-center pt-4">
                  <span className="text-primary font-medium text-sm">
                    ✨ Continue lendo no eBook completo...
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-primary text-white text-center max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Estas são apenas 3 das 30 receitas incríveis!
            </h3>
            <p className="text-lg opacity-90">
              No eBook completo você encontra receitas para café da manhã, almoço, jantar, 
              lanches e sobremesas. Tudo organizadinho e fácil de seguir.
            </p>
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="w-6 h-6" />
              QUERO VER TODAS AS RECEITAS
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RecipePreview;