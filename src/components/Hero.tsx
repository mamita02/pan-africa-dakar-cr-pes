import heroImage from "@/assets/hero-crepe.jpg";
import { MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crêpe africaine délicieuse chez Pan'Africa Dakar"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Crêperie à Dakar
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Les saveurs de l'Afrique dans une crêpe
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Yassa Poulet, Dibi, Kher Touba Nutella… Découvrez nos crêpes aux saveurs africaines revisitées, préparées avec amour à Dakar.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/221786606215?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Commander sur WhatsApp
            </a>
            <a
              href="tel:+221786606215"
              className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/25 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              78 660 62 15
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
