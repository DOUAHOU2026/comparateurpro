import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Politique cookies - ComparateurPro',
  description: 'Informations sur les cookies, traceurs et liens affiliés utilisés sur ComparateurPro.',
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      intro="Cette page explique l'utilisation des cookies et traceurs sur ComparateurPro, notamment dans le cadre des liens d'affiliation."
      sections={[
        {
          title: "Qu'est-ce qu'un cookie ?",
          body: [
            "Un cookie est un petit fichier déposé sur le navigateur ou le terminal de l'utilisateur. Il peut servir au fonctionnement du site, à la mesure d'audience, à la personnalisation ou au suivi d'une redirection vers un partenaire.",
          ],
        },
        {
          title: 'Cookies strictement nécessaires',
          body: [
            "Le site peut utiliser des cookies ou données techniques nécessaires au fonctionnement, à la sécurité, au routage ou à l'affichage des pages.",
            "Ces cookies ne nécessitent pas toujours de consentement lorsqu'ils sont strictement indispensables au service demandé par l'utilisateur.",
          ],
        },
        {
          title: "Cookies de mesure d'audience",
          body: [
            "Si un outil d'analyse d'audience est activé, il peut mesurer les pages consultées, la durée de visite et les interactions principales.",
            "Lorsque l'outil utilise des cookies non exemptés de consentement, un bandeau de consentement doit être affiché avant le dépôt de ces cookies.",
          ],
        },
        {
          title: 'Liens affiliés Amazon',
          body: [
            "Les liens vers Amazon.fr peuvent contenir un identifiant partenaire dans l'URL. Cet identifiant permet à Amazon d'attribuer une commission au site lorsque l'achat remplit les conditions du programme.",
            'Lorsque vous cliquez sur un lien Amazon, vous quittez ComparateurPro et Amazon peut déposer ses propres cookies ou traceurs selon sa politique de confidentialité et ses conditions.',
            'ComparateurPro ne contrôle pas les cookies déposés par Amazon après la redirection vers Amazon.fr.',
          ],
        },
        {
          title: 'Gestion du consentement',
          body: [
            "Le bandeau cookies permet d'accepter, de refuser ou de personnaliser les cookies non essentiels.",
            "Le choix est mémorisé dans le navigateur et peut être modifié à tout moment avec le bouton Cookies affiché en bas de page.",
          ],
        },
        {
          title: 'Paramétrage du navigateur',
          body: [
            'Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Le blocage de certains cookies peut modifier le fonctionnement de certains sites.',
            'Pour toute question sur les cookies utilisés par ComparateurPro, contactez : fahdoumbia2026@gmail.com.',
          ],
        },
      ]}
    />
  );
}
