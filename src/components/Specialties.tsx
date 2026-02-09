import { UtensilsCrossed } from "lucide-react";

const specialties = [
  {
    name: "Crêpe Poulet Mayo",
    description: "Poulet tendre, sauce mayo maison, crudités fraîches",
    price: "2 500 FCFA",
    tag: "Populaire",
  },
  {
    name: "Crêpe Yassa Poulet",
    description: "Le classique sénégalais revisité en crêpe, oignons caramélisés et citron",
    price: "3 000 FCFA",
    tag: "Best-seller",
  },
  {
    name: "Crêpe Dibi",
    description: "Viande grillée à la sénégalaise, sauce épicée et oignons",
    price: "3 500 FCFA",
    tag: null,
  },
  {
    name: "Kher Touba Nutella",
    description: "Crêpe sucrée au Kher Touba parfumé, nappage Nutella généreux",
    price: "2 000 FCFA",
    tag: "Sucré",
  },
];

const Specialties = () => {
  return (
    <section id="specialites" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
            La Carte
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos Spécialités
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Des crêpes uniques qui célèbrent les saveurs de l'Afrique de l'Ouest
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {specialties.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-primary" />
                </div>
                {item.tag && (
                  <span className="text-xs font-semibold bg-accent/15 text-accent px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="font-semibold text-secondary text-lg">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/221786606215?text=Bonjour%2C%20je%20souhaite%20voir%20le%20menu%20complet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Voir le menu complet →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
