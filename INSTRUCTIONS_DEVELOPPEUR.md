# Instructions Développeur & IA — ComparateurPro

Ce document contient toutes les informations nécessaires pour comprendre, exécuter, maintenir et continuer à développer le projet **ComparateurPro**.

---

## 📋 Présentation du Projet

**ComparateurPro** est un site de comparaison de produits d'affiliation Amazon. Il est spécialisé dans deux grands univers :
1. **Électroménager** (Aspirateurs robots, machines à café, friteuses sans huile, lave-vaisselle, purificateurs d'air, robots de cuisine, etc.)
2. **Produits pour chiens & chats** (Croquettes, fontaines à eau, litières automatiques, jouets, arbres à chat, paniers, caméras, distributeurs, etc.)

### Stack Technique
- **Framework** : Next.js 14 (App Router) en mode **Static HTML Export** (compilation 100% statique dans le dossier `out`).
- **Styling** : Tailwind CSS avec des polices de caractères Google (Plus Jakarta Sans) et des icônes SVG.
- **Hébergement** : Cloudflare Pages (déploiement statique ultra-performant et gratuit).

---

## 🏷️ Règle d'Affiliation Amazon (Obligatoire)

Tous les liens vers Amazon générés sur le site doivent obligatoirement utiliser l'identifiant partenaire d'affiliation suivant :
👉 **`sababou2026-21`**

### Fonctionnement technique :
Pour garantir le respect de cette règle sur l'ensemble des pages présentes et futures, tous les liens Amazon sont centralisés dans [components/data/products.ts](file:///c:/Users/VAKARAMOKO%20DOUMBIA/Documents/Codex/2026-06-15/dans-le-projet-situ-dans-c/outputs/amazon-comparateur/components/data/products.ts).

Les liens doivent être générés exclusivement à l'aide de la fonction utilitaire :
```typescript
const amazonTag = 'sababou2026-21';

function amazonSearchUrl(query: string) {
  return `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
}
```
Ne jamais écrire d'identifiant d'affiliation en dur dans les pages de composants. Toute nouvelle fiche produit doit utiliser `amazonSearchUrl("Nom du produit")`.

---

## 🤖 Génération Automatique d'Articles (Script IA)

Nous avons intégré un outil de création automatique d'articles de comparaison SEO à l'aide de l'API de Google Gemini (2.5 Flash).

### 1. Prérequis
### Méthode 1 : Demander à l'assistant IA (Recommandée & Sans clé API)
Si vous n'avez pas de clé API Gemini personnelle, demandez simplement à votre assistant IA (moi-même) dans le chat :
> *"Génère un comparatif complet pour le mot-clé : [mot-clé]"*
*(Exemple : "Génère un comparatif pour litière automatique").*

L'assistant effectuera les recherches sur le web, choisira les 6 meilleurs produits réels, formatera les liens avec votre ID d'affiliation `sababou2026-21`, injectera les données dans [products.ts](file:///c:/Users/VAKARAMOKO%20DOUMBIA/Documents/Codex/2026-06-15/dans-le-projet-situ-dans-c/outputs/amazon-comparateur/components/data/products.ts), et pourra même lancer le déploiement sur Cloudflare pour vous !

---

### Méthode 2 : Lancer le script en local (Nécessite une clé API Gemini)
Si vous possédez une clé API Gemini personnelle :
1. Créez un fichier `.env.local` à la racine du projet et ajoutez-y votre clé d'API :
   ```env
   GEMINI_API_KEY=votre_cle_api_ici
   ```
2. Ouvrez votre terminal et exécutez la commande suivante :
   ```bash
   node scripts/generate-comparison.js "votre mot-clé"
   ```
   *(Exemple : `node scripts/generate-comparison.js "friteuse sans huile"`).*

### Ce que fait l'outil automatiquement (méthode 1 ou 2) :
1. Interroge l'IA pour chercher et identifier **6 modèles réels et pertinents** actuellement sur le marché.
2. Structure la fiche produit complète pour chaque modèle (caractéristiques, avantages, inconvénients, note sur 10, résumé, profil d'acheteur idéal).
3. Génère les textes d'introduction optimisés SEO, le guide d'achat et la FAQ.
4. Génère les liens Amazon d'affiliation avec votre tag permanent (`sababou2026-21`).
5. Injecte dynamiquement les données dans [products.ts](file:///c:/Users/VAKARAMOKO%20DOUMBIA/Documents/Codex/2026-06-15/dans-le-projet-situ-dans-c/outputs/amazon-comparateur/components/data/products.ts) afin que la nouvelle page soit immédiatement accessible à l'adresse `/[slug]` (ex: `/friteuse-sans-huile`).

---

## 🚀 Compilation & Déploiement

Le site est hébergé sur Cloudflare Pages. Pour mettre en ligne une modification ou un nouvel article généré :

1. **Compiler le site statique** :
   ```bash
   npm run build
   ```
   *(Cette commande génère ou met à jour le dossier `out` qui contient tous les fichiers HTML statiques du site).*

2. **Déployer sur Cloudflare Pages** :
   ```bash
   npx wrangler@3 pages deploy out --project-name=comparateurpro
   ```
   *(Les fichiers du dossier `out` sont envoyés sur Cloudflare et mis en ligne instantanément).*
