---
title: Registre PRA
description: Bibliothèque des Proven Reusable Architectures de la Banque Nationale
---

# Registre PRA

Bienvenue dans le registre des **Proven Reusable Architectures (PRAs)** de la Banque Nationale du Canada.

## Qu'est-ce qu'un PRA ?

Un PRA est une solution architecturale validée en production qui peut être réutilisée dans différents contextes. Chaque PRA contient :

- **Contexte** : Problème résolu et cas d'usage
- **Architecture** : Diagrammes et documentation technique
- **ADRs** : Décisions architecturales documentées
- **Proven-in-use** : Implémentations réelles en production
- **Code Examples** : Exemples de code et configurations

## Organisation du Registre

Le registre est organisé en trois niveaux de scope :

### Bank-Wide (Transversal)
PRAs validés pour l'ensemble de la banque (3+ proven-in-use multi-domaines).

### Domain-Wide (Sectoriels)
PRAs spécifiques à un domaine d'affaires :
- **Particuliers** : Solutions pour la clientèle retail
- **Entreprises** : Solutions pour les PME et grandes entreprises
- **Gestion de Patrimoine** : Solutions pour la clientèle fortunée

### Catégories

- **Tech** : Infrastructure, déploiement, observabilité
- **Integration** : APIs, messaging, data sync
- **Security** : Authentification, autorisation, encryption
- **Business** : Processus métiers, workflows

## Comment Utiliser ce Registre ?

1. **Parcourir** : Utilisez le [catalogue](/fr/catalogue) pour rechercher et filtrer les PRAs
2. **Explorer** : Naviguez dans les sections ci-dessous par scope et catégorie
3. **Implémenter** : Suivez la documentation et exemples de code
4. **Contribuer** : Partagez vos retours et nouveaux PRAs

## Statuts des PRAs

- **Candidate** : 1+ proven-in-use, en validation
- **Approved** : 3+ proven-in-use, validé par gouvernance
- **Deprecated** : Obsolète, ne plus utiliser

## Prochaines Étapes

- [Parcourir tous les PRAs](/fr/catalogue)
- [Guide de démarrage](/fr/guides/01-getting-started)
- [Comment contribuer](/fr/guides/06-contributing)
