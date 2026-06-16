import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Politique cookies - ComparateurPro',
  description: 'Informations sur les cookies, traceurs et liens affilies utilises sur ComparateurPro.',
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      intro="Cette page explique l utilisation des cookies et traceurs sur ComparateurPro, notamment dans le cadre des liens d affiliation."
      sections={[
        {
          title: 'Qu est-ce qu un cookie ?',
          body: [
            'Un cookie est un petit fichier depose sur le navigateur ou le terminal de l utilisateur. Il peut servir au fonctionnement du site, a la mesure d audience, a la personnalisation ou au suivi d une redirection vers un partenaire.',
          ],
        },
        {
          title: 'Cookies strictement necessaires',
          body: [
            'Le site peut utiliser des cookies ou donnees techniques necessaires au fonctionnement, a la securite, au routage ou a l affichage des pages.',
            'Ces cookies ne necessitent pas toujours de consentement lorsqu ils sont strictement indispensables au service demande par l utilisateur.',
          ],
        },
        {
          title: 'Cookies de mesure d audience',
          body: [
            'Si un outil d analyse d audience est active, il peut mesurer les pages consultees, la duree de visite et les interactions principales.',
            'Lorsque l outil utilise des cookies non exemptes de consentement, un bandeau de consentement doit etre mis en place avant le depot de ces cookies.',
          ],
        },
        {
          title: 'Liens affilies Amazon',
          body: [
            'Les liens vers Amazon.fr peuvent contenir un identifiant partenaire dans l URL. Cet identifiant permet a Amazon d attribuer une commission au site lorsque l achat remplit les conditions du programme.',
            'Lorsque vous cliquez sur un lien Amazon, vous quittez ComparateurPro et Amazon peut deposer ses propres cookies ou traceurs selon sa politique de confidentialite et ses conditions.',
            'ComparateurPro ne controle pas les cookies deposes par Amazon apres la redirection vers Amazon.fr.',
          ],
        },
        {
          title: 'Gestion du consentement',
          body: [
            'Si des cookies non essentiels sont ajoutes au site, l utilisateur doit pouvoir accepter, refuser et modifier son choix aussi facilement.',
            'A ce stade, si aucun outil publicitaire, statistique ou reseau social tiers n est active directement sur le site, seuls les liens sortants vers Amazon declenchent un traitement par Amazon apres clic.',
          ],
        },
        {
          title: 'Parametrage du navigateur',
          body: [
            'Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Le blocage de certains cookies peut modifier le fonctionnement de certains sites.',
            'Pour toute question sur les cookies utilises par ComparateurPro, contactez : A COMPLETER.',
          ],
        },
      ]}
    />
  );
}
