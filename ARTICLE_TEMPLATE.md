# OBJECTIF DU TEMPLATE

Ce template doit être utilisé par tous les agents IA pour générer des articles SEO parfaits, structurés et optimisés pour la conversion Amazon.

---

# STRUCTURE OBLIGATOIRE D’UN ARTICLE

## 1. FRONT MATTER (obligatoire)

Chaque article doit commencer par :

---
title: "Titre SEO optimisé"
description: "Meta description optimisée SEO"
category: "chiens-chats" | "electromenager"
slug: "url-de-l-article"
products: []
---

---

## 2. TITRE H1

Un titre SEO clair contenant le mot-clé principal.

---

## 3. INTRODUCTION

- Présenter le problème utilisateur
- Inclure le mot-clé principal
- Expliquer la solution apportée par l’article

---

## 4. VERDICT RAPIDE

Section avec :
- Meilleur produit
- Meilleur rapport qualité/prix
- Meilleur budget

---

## 5. TABLEAU COMPARATIF

Inclure un tableau avec :
- Nom produit
- Prix (ou "voir sur Amazon")
- Note (/10)
- Points forts principaux

---

## 6. GUIDE D’ACHAT

Expliquer :
- comment choisir le produit
- critères importants
- erreurs à éviter
- conseils pratiques

---

## 7. SECTION PRODUITS (OBLIGATOIRE)

Chaque produit doit être présenté avec un composant ProductCard.

---

## 8. SECTION TEST PRODUIT (OBLIGATOIRE POUR CHAQUE PRODUIT)

Chaque produit doit inclure :

- Présentation du produit
- Analyse réelle
- Qualité de fabrication
- Utilisation quotidienne
- Performances
- Entretien
- Avantages
- Inconvénients
- Pour quel utilisateur / animal
- Note (/10)
- Bouton Amazon

---

## 9. FAQ SEO

- Questions fréquentes Google
- Réponses courtes optimisées SEO

---

## 10. CONCLUSION

- Résumé
- Recommandation finale
- Appel à l’action Amazon

---

# RÈGLES IMPORTANTES

- Lire et respecter `ARTICLE_AI_RULES.md` avant de créer un nouvel article.
- Aucun lien Amazon ne doit être écrit directement dans le Markdown
- Tous les produits doivent venir de products.ts
- Les images doivent correspondre EXACTEMENT au produit
- Si l'ASIN est connu, le lien doit être direct : `https://www.amazon.fr/dp/ASIN/?tag=sababou2026-21`
- Si l'ASIN est connu, l'image doit être liée au même ASIN : `https://images-na.ssl-images-amazon.com/images/P/ASIN.01._SL500_.jpg`
- Ne jamais afficher dans l'article les consignes internes, le StoreID ou la phrase technique sur les images Amazon et liens `/dp/ASIN`.
- Utiliser uniquement ProductCard pour l’affichage produit
- Respecter la catégorie (chiens-chats ou electromenager)

---

# OBJECTIF FINAL

Chaque article créé avec ce template doit :
- être SEO optimisé
- être structuré pour Google
- être optimisé pour la conversion Amazon
- être meilleur que les concurrents
