import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Clock, Gift, Shield } from "lucide-react";

const FinalCTA = () => {
  const whatsappNumber = "5511999999999"; // Substituir pelo número real
  const whatsappMessage = encodeURIComponent("🌱 Quero transformar minha alimentação! Me envie o eBook '30 Receitas Veganas Rápidas' por R$27");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Urgency Header */}
          <Card className="p-6 bg-warning text-warning-foreground mb-12 animate-glow">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <p className="text-lg font-bold">
                ⚡ OFERTA ESPECIAL: Por tempo limitado por apenas R$27!
              </p>
            </div>
          </Card>

          {/* Main CTA Content */}
          <div className="space-y-8 text-white">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Comece sua transformação
              <span className="block text-warning">HOJE MESMO!</span>
            </h2>
            
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Não espere mais para ter uma alimentação que realmente nutre seu corpo e sua alma. 
              Suas 30 receitas veganas estão a um clique de distância!
            </p>

            {/* Benefits Recap */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
              <div className="space-y-2">
                <Gift className="w-8 h-8 text-warning mx-auto" />
                <p className="font-medium">eBook Completo</p>
                <p className="text-sm opacity-80">30 receitas testadas</p>
              </div>
              <div className="space-y-2">
                <MessageCircle className="w-8 h-8 text-warning mx-auto" />
                <p className="font-medium">Entrega Imediata</p>
                <p className="text-sm opacity-80">Direto no WhatsApp</p>
              </div>
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-warning mx-auto" />
                <p className="font-medium">Garantia Total</p>
                <p className="text-sm opacity-80">7 dias para testar</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-warning mx-auto" />
                <p className="font-medium">Suporte 24h</p>
                <p className="text-sm opacity-80">Tire todas suas dúvidas</p>
              </div>
            </div>

            {/* Price and CTA */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground">Valor normal: <span className="line-through">R$ 47</span></p>
                  <p className="text-5xl font-bold text-primary">R$ 27</p>
                  <p className="text-muted-foreground">via Pix ou cartão em até 12x</p>
                </div>
                
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="w-full text-xl py-6"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="w-8 h-8" />
                  SIM! QUERO TRANSFORMAR MINHA ALIMENTAÇÃO
                </Button>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    ✅ Acesso imediato após pagamento
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🔒 Compra 100% segura e protegida
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📱 Suporte via WhatsApp incluído
                  </p>
                </div>
              </div>
            </Card>

            {/* Final Message */}
            <div className="mt-12">
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                <strong>Você está a apenas um passo</strong> de ter acesso às receitas que vão revolucionar 
                sua cozinha e sua saúde. Clique agora e comece sua jornada para uma vida mais saudável!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;