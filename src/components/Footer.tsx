import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-3">Pan'Africa Dakar</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              La crêperie aux saveurs africaines. Recettes originales, ingrédients frais, préparées avec amour à Dakar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "Nos Spécialités", "À Propos", "Contact"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label === "Accueil" ? "accueil" : label === "Nos Spécialités" ? "specialites" : label === "À Propos" ? "apropos" : "contact"}`}
                    className="text-background/50 hover:text-background text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li>📞 +221 78 660 62 15</li>
              <li>📍 Dakar, Sénégal</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors text-sm"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Pan'Africa Dakar. Tous droits réservés.
          </p>
          <Link to="/mentions-legales" className="text-background/40 hover:text-background text-xs transition-colors">
            Mentions légales & Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
