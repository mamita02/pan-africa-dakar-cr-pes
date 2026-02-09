import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aminata D.",
    text: "Les crêpes Yassa sont incroyables ! On sent vraiment les saveurs authentiques. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Moussa S.",
    text: "Première fois que je goûte du Dibi en crêpe, c'est un délice. Service rapide et super accueil.",
    rating: 5,
  },
  {
    name: "Fatou N.",
    text: "Le Kher Touba Nutella est devenu mon péché mignon. Ambiance chaleureuse et prix abordables.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
            Avis Clients
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/15"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/90 leading-relaxed mb-4 text-sm">
                "{t.text}"
              </p>
              <p className="font-semibold text-primary-foreground text-sm">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
