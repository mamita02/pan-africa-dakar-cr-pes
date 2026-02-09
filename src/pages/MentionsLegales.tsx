import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground mb-8">
          Mentions Légales & Politique de Confidentialité
        </h1>

        <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">1. Mentions Légales</h2>
            <p>
              <strong className="text-foreground">Raison sociale :</strong> Pan'Africa Dakar<br />
              <strong className="text-foreground">Adresse :</strong> Dakar, Sénégal<br />
              <strong className="text-foreground">Téléphone :</strong> +221 78 660 62 15<br />
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">2. Politique de Confidentialité</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont destinées uniquement au traitement de votre demande. Elles ne sont en aucun cas cédées à des tiers.
            </p>
            <p>
              Conformément à la loi sénégalaise sur la protection des données personnelles, vous disposez d'un droit d'accès, de modification et de suppression de vos données. Pour exercer ce droit, contactez-nous au 78 660 62 15.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground">3. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de suivi ou publicitaires. Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être utilisés.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
