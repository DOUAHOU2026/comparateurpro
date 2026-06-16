import type { Metadata } from 'next';
import { LegalPage } from '@/components/ui/LegalPage';

export const metadata: Metadata = {
  title: 'Politique de confidentialite - ComparateurPro',
  description: 'Politique de confidentialite et traitement des donnees personnelles sur ComparateurPro.',
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialite"
      intro="Cette politique explique quelles donnees peuvent etre traitees lors de l utilisation de ComparateurPro, dans quel but, et quels sont vos droits."
      sections={[
        {
          title: 'Responsable du traitement',
          body: [
            'Responsable du traitement : A COMPLETER avec votre nom, societe ou micro-entreprise.',
            'Contact pour les demandes relatives aux donnees personnelles : A COMPLETER avec votre email.',
          ],
        },
        {
          title: 'Donnees collectees',
          body: [
            'Le site peut traiter des donnees techniques liees a la navigation : adresse IP tronquee ou complete selon l hebergeur, type de navigateur, pages consultees, date et heure de visite, et donnees de securite serveur.',
            'Si un formulaire de contact ou une newsletter est active, les donnees volontairement transmises peuvent inclure le nom, l adresse email et le contenu du message.',
            'Le site ne demande pas de donnees sensibles et ne collecte pas de donnees de paiement.',
          ],
        },
        {
          title: 'Finalites',
          body: [
            'Les donnees techniques sont utilisees pour assurer le bon fonctionnement, la securite et la mesure d audience du site lorsque des outils de statistiques sont actives.',
            'Les donnees transmises par formulaire sont utilisees uniquement pour repondre a la demande de l utilisateur ou envoyer une communication demandee.',
            'Les liens affilies permettent de mesurer les achats eligibles effectues apres un clic vers Amazon.',
          ],
        },
        {
          title: 'Base legale',
          body: [
            'Les traitements necessaires au fonctionnement et a la securite du site reposent sur l interet legitime.',
            'Les traitements lies a une newsletter ou a certains cookies non essentiels reposent sur le consentement.',
            'Les obligations comptables, administratives ou legales reposent sur l obligation legale lorsque cela s applique.',
          ],
        },
        {
          title: 'Destinataires',
          body: [
            'Les donnees peuvent etre traitees par l hebergeur du site, les prestataires techniques necessaires au fonctionnement du site et, le cas echeant, les outils de mesure d audience ou d emailing actives.',
            'Lorsqu un utilisateur clique sur un lien Amazon, il est redirige vers Amazon.fr. Amazon peut alors traiter des donnees selon sa propre politique de confidentialite.',
          ],
        },
        {
          title: 'Duree de conservation',
          body: [
            'Les journaux techniques sont conserves pendant une duree limitee definie par l hebergeur ou par les besoins de securite.',
            'Les messages envoyes via formulaire sont conserves le temps necessaire au traitement de la demande.',
            'Les donnees de newsletter sont conservees jusqu au retrait du consentement ou a la desinscription.',
          ],
        },
        {
          title: 'Vos droits',
          body: [
            'Conformement au RGPD, vous pouvez demander l acces, la rectification, l effacement, la limitation, l opposition au traitement et, lorsque applicable, la portabilite de vos donnees.',
            'Vous pouvez exercer ces droits en contactant : A COMPLETER.',
            'Vous pouvez egalement introduire une reclamation aupres de la CNIL si vous estimez que vos droits ne sont pas respectes.',
          ],
        },
      ]}
    />
  );
}
