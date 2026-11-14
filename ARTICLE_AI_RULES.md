# Règles IA pour créer un article Amazon

Ce fichier est la consigne permanente à donner à toute IA qui doit créer un nouvel article comparatif à partir d'un mot-clé.

## Entrée utilisateur

L'utilisateur peut donner uniquement un mot-clé, par exemple :

`Meilleur robot de cuisine 2026 : Moulinex, Kenwood, Bosch et alternatives`

L'IA doit ensuite chercher elle-même les produits à comparer, les ASIN Amazon France, les images liées aux ASIN et les informations utiles pour l'article.

## Règles obligatoires

- StoreID Amazon obligatoire : `sababou2026-21`
- Produits : uniquement des produits réels, disponibles ou identifiables sur Amazon France.
- ASIN : rechercher l'ASIN exact du produit comparé.
- Lien produit : utiliser uniquement le format direct `https://www.amazon.fr/dp/ASIN/?tag=sababou2026-21` quand l'ASIN est connu.
- Image produit : utiliser l'image Amazon liée au même ASIN, au format `https://images-na.ssl-images-amazon.com/images/P/ASIN.01._SL500_.jpg`.
- Cohérence : l'image doit correspondre au produit et au lien ASIN du même produit.
- Interdit : utiliser une image générique, une image IA, une image qui ne correspond pas au produit, ou un lien de recherche Amazon `amazon.fr/s?k=...` quand l'ASIN est identifiable.
- Texte visible : ne jamais afficher dans l'article les consignes internes, le StoreID, ni la phrase technique sur les images Amazon et les liens `/dp/ASIN`.
- Déploiement : ne jamais déployer un nouvel article sans autorisation explicite de l'utilisateur.

## Format attendu dans `products.ts`

Pour chaque produit :

```ts
{
  id: 'marque-modele',
  name: 'Marque Modèle exact',
  image: 'https://images-na.ssl-images-amazon.com/images/P/ASIN.01._SL500_.jpg',
  amazonUrl: amazonProductUrl('ASIN'),
  // autres champs...
}
```

## Vérification avant livraison

Avant de dire que l'article est prêt :

- lancer `npm run build`
- vérifier que l'article généré contient les liens `/dp/ASIN/?tag=sababou2026-21`
- vérifier que l'article ne contient pas `amazon.fr/s?k=`
- vérifier que la phrase technique interne n'est pas visible dans le HTML
