import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ebookMockup from "@/assets/ebook-mockup.jpg";
import { MessageCircle, Clock, DollarSign, Utensils } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no eBook '30 Receitas Veganas Rápidas' por R$27. Como posso adquirir?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                30 Receitas
                <span className="block text-warning drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]"> Veganas Rápidas</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Transforme sua alimentação com receitas práticas, saudáveis e deliciosas. 
                Perfeitas para quem quer emagrecer, ter mais energia e cuidar da saúde!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-white">
                <Clock className="w-6 h-6 text-white drop-shadow-lg" />
                <span>Pronto em 30 minutos</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <DollarSign className="w-6 h-6 text-white drop-shadow-lg" />
                <span>Ingredientes baratos</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Utensils className="w-6 h-6 text-white drop-shadow-lg" />
                <span>Sabor incrível</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <MessageCircle className="w-6 h-6 text-white drop-shadow-lg" />
                <span>Suporte via WhatsApp</span>
              </div>
            </div>

            {/* Price and CTA */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-strong">
              <div className="text-center space-y-4">
                <div>
                  <p className="text-muted-foreground text-sm">Por apenas</p>
                  <p className="text-4xl font-bold text-primary">R$ 27</p>
                  <p className="text-muted-foreground text-sm">via Pix ou Cartão</p>
                </div>
                
                <Button 
                  variant="whatsapp" 
                  size="xl" 
                  className="w-full"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="w-6 h-6" />
                  COMPRAR VIA WHATSAPP
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  📩 Receba o eBook imediatamente após o pagamento
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column - eBook Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={ebookMockup} 
                alt="eBook 30 Receitas Veganas Rápidas" 
                className="w-full max-w-lg animate-float shadow-strong rounded-lg"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-medium animate-glow">
                🔥 BEST SELLER
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-bold shadow-medium">
                ✅ ENTREGA IMEDIATA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;