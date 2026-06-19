import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Mentions legales - ComparateurPro',
  description: 'Mentions legales, informations editeur et transparence affiliation de ComparateurPro.',
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions legales"
      intro="Cette page presente les informations legales du site ComparateurPro. Les champs editeur et hebergeur doivent etre completes avec vos informations exactes avant publication."
      sections={[
        {
          title: 'Editeur du site',
          body: [
            'Nom du site : ComparateurPro.',
            'Editeur : SABABOU.',
            'Adresse : France (Adresse postale complète disponible sur simple demande par e-mail).',
            'Email de contact : fahdoumbia2026@gmail.com.',
            'Statut : Éditeur particulier (Sans numéro SIRET).',
          ],
        },
        {
          title: 'Responsable de publication',
          body: [
            'Le responsable de publication est : VAKARAMOKO DOUMBIA.',
            'Pour toute question concernant le contenu publie sur le site, vous pouvez utiliser l adresse de contact indiquee ci-dessus.',
          ],
        },
        {
          title: 'Hebergement',
          body: [
            'Hebergeur : Cloudflare Inc.',
            'Adresse de l hebergeur : 101 Townsend St, San Francisco, CA 94107, USA.',
            'Site web de l hebergeur : https://www.cloudflare.com.',
          ],
        },
        {
          title: 'Affiliation Amazon',
          body: [
            'ComparateurPro participe au Programme Partenaires d Amazon EU, un programme d affiliation permettant a des sites de percevoir une remuneration grace a la creation de liens vers Amazon.fr.',
            'En tant que Partenaire Amazon, nous realisons un benefice sur les achats remplissant les conditions requises.',
            'Les liens vers Amazon peuvent etre des liens affilies. Cela ne modifie pas le prix paye par l utilisateur.',
          ],
        },
        {
          title: 'Independance editoriale',
          body: [
            'Les comparatifs sont rediges dans un objectif d information et d aide a l achat.',
            'Les notes affichees correspondent a un score de comparaison interne. Elles ne constituent pas des avis clients Amazon.',
            'Les caracteristiques, disponibilites et prix des produits peuvent evoluer. Les utilisateurs doivent verifier les informations finales sur le site marchand avant achat.',
          ],
        },
        {
          title: 'Propriete intellectuelle',
          body: [
            'Les textes, la structure des pages, le design et les elements originaux du site sont proteges par le droit de la propriete intellectuelle.',
            'Les marques, noms de produits et visuels de produits restent la propriete de leurs titulaires respectifs.',
          ],
        },
      ]}
    />
  );
}
