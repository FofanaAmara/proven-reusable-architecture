---
title: Bienvenue
description: Bibliothèque d'architectures éprouvées pour accélérer vos projets avec qualité et cohérence
---

# Bienvenue dans le Registre PRA 

## Ne réinventez pas la roue, réutilisez ce qui fonctionne

Vous démarrez un nouveau projet ? Vous cherchez la meilleure façon d'implémenter l'authentification, le CI/CD, ou l'intégration avec Salesforce ? **Le Registre PRA est votre bibliothèque d'architectures validées en production.**

##  C'est quoi un PRA ?

Un **PRA (Proven Reusable Architecture)** est une **solution éprouvée** qui a déjà fait ses preuves dans de vrais projets de la Banque Nationale.

### Vue d'ensemble de l'écosystème PRA

```mermaid
%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'18px'}}}%%
graph TB
    ARCH["🏗️<br/>ARCHITECTES<br/>dans les Domaines"]
    TRANS["⚡<br/>ÉQUIPES TRANSVERSALES<br/>(Software Engineering, etc.)"]
    BOOT["🚀<br/>BOOTSTRAP<br/>(Identification PRAs prioritaires)"]

    GOV_DOM["🔵 Comités Gouvernance<br/>Domaine"]
    GOV_BW["🟣 Comité Gouvernance<br/>Architectes Experts"]

    DOM["🔵<br/>PRAs DOMAINE"]
    BW["🟢<br/>PRAs BANK-WIDE"]

    ARCH -->|"Architectures"| GOV_DOM
    GOV_DOM -->|"Flux 1:<br/>Évalué réutilisable"| DOM
    DOM -->|"Si réutilisable<br/>hors domaine"| GOV_BW

    TRANS -->|"Flux 2:<br/>Nouveaux standards"| GOV_BW

    BOOT -.->|"Flux 3:<br/>Candidats existants<br/>dans domaines"| GOV_BW

    GOV_BW -->|"Approuvé"| BW

    style BW fill:#10b981,stroke:#059669,stroke-width:5px,color:#fff
    style DOM fill:#3b82f6,stroke:#2563eb,stroke-width:5px,color:#fff
    style GOV_BW fill:#8b5cf6,stroke:#7c3aed,stroke-width:4px,color:#fff
    style GOV_DOM fill:#60a5fa,stroke:#2563eb,stroke-width:4px,color:#fff
    style ARCH fill:#fbbf24,stroke:#d97706,stroke-width:4px,color:#000
    style TRANS fill:#f59e0b,stroke:#d97706,stroke-width:4px,color:#000
    style BOOT fill:#ef4444,stroke:#dc2626,stroke-width:4px,color:#fff
```

**Trois flux de création de PRAs :**

**🔵 Flux 1 : Domaine → Bank-Wide (Émergence organique)**
1. Architectes dans domaines définissent des **architectures**
2. Certaines architectures évaluées **réutilisables** → deviennent **PRAs Domaine**
3. Validation par **Comité de Gouvernance local** du domaine
4. PRAs Domaine réutilisables **hors du domaine** → promotion **Bank-Wide**
5. Review par **Comité Gouvernance Architectes Experts** → approuvés Bank-Wide

**🟠 Flux 2 : Standards Transversaux → Bank-Wide (Top-down)**
1. Équipes transversales (Software Engineering, Sécurité, Infra Cloud) définissent **nouveaux standards** pour la banque
2. Standards se traduisent en **PRAs Bank-Wide**
3. Review par **Comité Gouvernance Architectes Experts** → approuvés Bank-Wide
4. Exemples : CI/CD, observabilité, sécurité réseau, gestion des secrets

**🔴 Flux 3 : Bootstrapping (Situation actuelle - Transitoire)**
1. **Réalité** : Pas de registre de patrons existant actuellement
2. **Stratégie de démarrage rapide** :
   - Identifier **sujets prioritaires** à couvrir Bank-Wide
   - Chercher **architectures existantes** dans les domaines (bons candidats)
   - Les rendre **directement disponibles Bank-Wide** (sans passer par Flux 1)
3. Permet de peupler rapidement le registre initial
4. Exemple : File transfer de Gestion Patrimoine identifié comme prioritaire → directement Bank-Wide

### Comment un PRA naît et évolue

```mermaid
graph LR
    A[Problème récurrent] --> B[Solution documentée]
    B --> C[Validée en prod]
    C --> D[Réutilisable]
    D --> E[PRA]
```

### En 4 points clés

 **Prouvée en production** : Validée dans au moins 1 implémentation réelle (Domaine) ou 3+ implémentations (Bank-Wide)
 **Réutilisable** : Généralisable à différents contextes et projets
 **Documentée** : Avec contexte, décisions architecturales (ADR), exemples de code et retours d'expérience par les architectes
 **Maintenue** : Versionnée et supportée par la communauté d'architectes BNC (experts et de solutions)

### Analogie simple

Pensez aux PRA comme des **recettes de cuisine éprouvées** :

- La recette (le PRA) a été testée plusieurs fois 
- Elle fonctionne dans différentes cuisines (contextes) 
- Elle documente les ingrédients (stack tech), les étapes (implémentation) et les pièges à éviter 
- Vous pouvez l'adapter à vos goûts (votre contexte) 

##  Démarrage rapide

### Vous êtes architecte de solutions ?

**Besoin : "Je cherche un pattern pour mon projet"**

1.  Explorez le [Catalogue](/catalogue) ou parcourez les [PRAs Bank-Wide](/registre/transversal)
2.  Consultez les [PRAs de votre Domaine](/registre/secteurs) (tous types : fonctionnels ET techniques)
3.  Si aucun pattern n'existe, créez-le et documentez-le pour votre domaine
4.  Vérifiez si le contexte correspond à votre projet
5.  Suivez le guide d'implémentation et les ADRs
6.  Documentez votre retour d'expérience avec votre comité de gouvernance

### Vous êtes dans une équipe transversale ?

**Besoin : "Je veux contribuer un pattern infrastructure/fondation"**

1.  Consultez les [Standards de Qualité](/guides/05-standards)
2.  Préparez votre documentation (ADR, exemples de code, proven-in-use)
3.  Suivez le [Guide de Contribution](/guides/06-contributing)
4.  Soumettez directement à la Communauté d'Architectes Experts pour validation Bank-Wide

### Vous découvrez les PRA ?

**Besoin : "Je veux comprendre le système PRA"**

Suivez notre **parcours guidé en 8 étapes** :

1. [Démarrer avec les PRA](/guides/01-getting-started) - Introduction et premiers pas
2. [Comprendre les PRA](/guides/02-understanding-pra) - Anatomie détaillée
3. [Rôles et Responsabilités](/guides/03-roles-responsibilities) - Qui fait quoi
4. [Cycle de Vie](/guides/04-lifecycle) - De Candidate à Approved
5. [Standards de Qualité](/guides/05-standards) - Critères d'excellence
6. [Contribuer un PRA](/guides/06-contributing) - Processus de soumission
7. [Processus de Promotion](/guides/07-promotion-process) - Sectoriel  Transversal
8. [Gouvernance](/guides/08-governance) - Structure et décisions

##  Organisation du Registre

Le registre est organisé en **3 scopes** selon leur portée :

###  Bank-Wide

**Pour qui ?** Tous les domaines de la Banque Nationale
**Maturité** : Validés par la Communauté d'Architectes Experts (3+ proven-in-use)
**Exemples** :
- Infrastructure : Authentication SSO, CI/CD GitOps, Observabilité
- Techniques : File Transfer (ex: promu depuis GP), APIs asynchrones
- Fonctionnels : Customer Onboarding, Payment Processing (patterns répétés)

 [Explorer les PRAs Bank-Wide](/registre/transversal)

###  Domaines

**Pour qui ?** Équipes d'un domaine spécifique (Particuliers, Entreprises, Gestion de Patrimoine)
**Maturité** : Validés localement par Comité de Gouvernance du Domaine (1+ proven-in-use)
**Contenu** : Tous types de patterns (fonctionnels ET techniques)
**Exemples** :
- Fonctionnels : Onboarding Digital (Particuliers), Intégration ERP SAP (Entreprises)
- Techniques : Serverless AWS, file transfer, data pipelines (en l'absence de pattern Bank-Wide)
**Note** : Peuvent être promus en Bank-Wide si répétés ou particulièrement robustes

 [Explorer les PRAs par Domaine](/registre/secteurs)

###  En Promotion

**Pour qui ?** Tous (en observation)
**Statut** : Patrons sectoriels proposés pour devenir transversaux
**Utilité** : Voir les patterns émergents avant leur généralisation

 [Explorer les PRAs en Promotion](/registre/en-promotion)

##  Catégories de PRAs

Quel que soit le scope, les PRAs sont organisés en 4 catégories :

###  Tech

Patterns d'infrastructure et plateformes

**Exemples** : CI/CD, Observabilité (Prometheus/Grafana), Infrastructure as Code (Terraform), Orchestration (Kubernetes)

###  Integration

Patterns d'intégration inter-systèmes

**Exemples** : API Gateway, Message Broker (Kafka/RabbitMQ), Event-Driven Architecture, Data Synchronization

###  Security

Patterns de sécurité et conformité

**Exemples** : RBAC/ABAC, Secrets Management (Vault), Network Security (Zero Trust), Audit & Compliance

###  Business

Patterns métier réutilisables

**Exemples** : Customer Onboarding, Payment Processing, Notification System, Workflow Orchestration

##  Pourquoi utiliser les PRAs ?

###  Gain de Temps

- Pas besoin de réinventer la roue
- Solutions prêtes à l'emploi avec exemples de code
- Retours d'expérience documentés = moins d'essais-erreurs

**Exemple concret** : Implémenter un CI/CD GitOps avec ArgoCD prend 2 jours au lieu de 2 semaines de recherche et POC.

###  Qualité

- Solutions validées en production réelle
- Best practices intégrées
- Pièges courants documentés et évités

**Exemple concret** : Le PRA "RBAC avec CASL" inclut les cas limites de gestion des permissions que vous auriez découverts après plusieurs bugs.

###  Cohérence

- Alignement architectural entre équipes
- Vocabulaire commun (moins de malentendus)
- Standards partagés (plus facile à maintenir)

**Exemple concret** : Tous les projets utilisent la même stack d'observabilité  un nouvel architecte peut rapidement comprendre n'importe quel projet.

###  ROI Mesurable

- **Réduction 40-60%** du temps de conception architecture
- **+30%** de réutilisation de code et composants
- **-50%** des incidents de production (grâce aux learnings documentés)

##  Questions Fréquentes

### Dois-je obligatoirement utiliser un PRA ?

**Non.** Les PRAs sont des **recommandations**, pas des obligations.

**Mais** : Si un PRA applicable existe et que vous ne l'utilisez pas, vous devrez justifier pourquoi lors des revues d'architecture (pour éviter la duplication d'efforts).

### Puis-je adapter un PRA à mon contexte ?

**Oui, absolument !** Les PRAs sont des **patrons**, pas du code figé.

**Important** : Documentez vos adaptations et partagez vos learnings pour enrichir le PRA.

### Combien de PRAs y a-t-il actuellement ?

Le registre contient actuellement :
- **~15 PRAs Transversaux** (validés pour tous)
- **~20 PRAs Sectoriels** (spécifiques à un secteur)
- **~5 PRAs en Promotion** (en cours de validation transversale)

### Comment sont validés les PRAs ?

Deux processus selon le type :

**PRAs Domaine (fonctionnels):**
1. **Soumission** → Review par le Comité de Gouvernance du Domaine
2. **Candidate** → Validé avec 1+ proven-in-use dans le domaine
3. **Approved** → Validé localement, peut être proposé pour promotion Bank-Wide

**PRAs Bank-Wide (infrastructure/patterns communs):**
1. **Soumission** → Review par la Communauté d'Architectes Experts
2. **Approved** → Validé avec 3+ proven-in-use de différentes équipes/domaines

[En savoir plus sur le Cycle de Vie](/guides/04-lifecycle)

### Qui décide si un PRA domaine devient Bank-Wide ?

La **Communauté d'Architectes Experts** (architectes proches de la pratique, représentant différents domaines).

Les **Comités de Gouvernance par Domaine** valident les PRAs fonctionnels localement avant de les proposer pour promotion.

[En savoir plus sur la Gouvernance](/guides/08-governance)

##  Prochaines Étapes

### Vous êtes pressé ?

 [Explorez le catalogue Transversal](/registre/transversal) et trouvez un PRA pour votre besoin

### Vous avez 15 minutes ?

 Suivez le [Guide de Démarrage](/guides/01-getting-started) pour une introduction complète

### Vous voulez tout comprendre ?

 Parcourez les [8 guides numérotés](/guides/01-getting-started) dans l'ordre

##  Besoin d'Aide ?

- **Canal Teams** : `#pra-registry`
- **Email** : pra-support@company.com
- **Issues GitHub** : [Ouvrir une issue](https://github.com/org/pra-registry/issues)
- **Table de Gouvernance** : pra-governance@company.com

---

**Dernière mise à jour** : 2025-12-02
**Contributeurs actifs** : 45+ architectes BNC (solutions et experts)
**PRAs validés** : 40+ patterns éprouvés (infrastructure et fonctionnels)
**Gouvernance** : Comités par domaine + Communauté d'Architectes Experts
