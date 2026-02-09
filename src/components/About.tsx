import aboutImage from "@/assets/about-restaurant.jpg";

const About = () => {
  return (
    <section id="apropos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={aboutImage}
              alt="Intérieur du restaurant Pan'Africa Dakar"
              className="w-full h-80 md:h-[420px] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
              À Propos
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Pan'Africa Dakar</strong> est née d'une envie simple : revisiter la crêpe traditionnelle avec les saveurs vibrantes de l'Afrique de l'Ouest.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Installée au cœur de Dakar, notre crêperie propose des recettes originales mêlant tradition sénégalaise et gourmandise — du Yassa Poulet au Kher Touba Nutella, chaque bouchée raconte une histoire.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nos ingrédients sont frais, locaux, et nos crêpes préparées avec soin. Venez goûter l'Afrique autrement.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Recettes uniques</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Produits frais</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">⭐</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
