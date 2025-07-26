const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          
          <div>
            <h3 className="text-2xl font-bold mb-2">30 Receitas Veganas Rápidas</h3>
            <p className="opacity-80">Transformando vidas através da alimentação saudável</p>
          </div>

          <div className="space-y-2 text-sm opacity-70">
            <p>📱 Entrega 100% digital via WhatsApp</p>
            <p>🔒 Pagamento seguro via Pix ou cartão</p>
            <p>✅ Garantia de 7 dias ou seu dinheiro de volta</p>
            <p>💬 Suporte completo via WhatsApp</p>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-xs opacity-60">
              © 2024 30 Receitas Veganas Rápidas. Todos os direitos reservados.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Este produto é comercializado com garantia de satisfação de 7 dias.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;