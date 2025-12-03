# Plan: Architecture Complète GitHub Workflows pour PRA Registry

## 🎯 Objectif

Mettre en place une infrastructure complète de workflows GitHub pour automatiser et sécuriser le processus de gouvernance du registre PRA, couvrant tous les use cases identifiés dans la documentation.

## 📋 Vue d'Ensemble

**Architecture proposée** : 13 workflows organisés en 4 phases d'implémentation progressives

**Principes directeurs** :
- Automatisation maximale des validations techniques
- Respect strict de la gouvernance à 2 niveaux (Domaines + Bank-Wide)
- Traçabilité complète de toutes les actions
- Communication proactive aux parties prenantes

---

## 🔧 Workflows Proposés

### 📦 PHASE 1 - Workflows Core (MVP - Priorité HAUTE)

#### 1. `validate-pra.yml` - Validation Technique
**Trigger** : `pull_request` (opened, synchronize)
**Responsabilités** :
- Valider format MDX et frontmatter YAML
- Vérifier métadonnées complètes (name, category, status, tags, proven_in_use, etc.)
- Valider sections obligatoires (Overview, Context, Architecture, ADR, Examples, Proven-in-use)
- Vérifier liens internes/externes (pas de 404)
- Valider cohérence scope/path (secteurs/* vs transversal/*)
- Vérifier images/diagrammes référencés existent
- Valider cohérence status/proven-in-use count

**Scripts utilisés** :
- `scripts/validate-pra-metadata.js`
- `scripts/validate-pra-structure.js`

---

#### 2. `auto-label.yml` - Labeling Automatique
**Trigger** : `pull_request` (opened)
**Responsabilités** :
- Détecter scope automatiquement :
  * `secteurs/particuliers/` → labels: `scope:domaine`, `domaine:particuliers`
  * `secteurs/entreprises/` → labels: `scope:domaine`, `domaine:entreprises`
  * `secteurs/gestion-patrimoine/` → labels: `scope:domaine`, `domaine:gestion-patrimoine`
  * `transversal/` → label: `scope:bank-wide`
- Détecter catégorie : `category:tech`, `category:integration`, `category:security`, `category:business`
- Détecter type de changement :
  * Nouveau fichier → `type:nouveau-pra`
  * Modification status → `type:status-change`
  * Déplacement secteurs→transversal → `type:promotion`
  * Status→deprecated → `type:deprecation`

**Scripts utilisés** :
- `scripts/detect-pra-changes.js`

---

#### 3. `check-approvals.yml` - Vérification Approbations
**Trigger** : `pull_request_review` (submitted)
**Responsabilités** :
- Compter les approbations valides selon scope :
  * PRA Domaine : minimum 2 approvals de `@bnc/comite-gov-[domaine]`
  * PRA Bank-Wide : minimum 2 approvals de `@bnc/comite-architectes-experts`
  * Promotion : minimum 2 approvals de `@bnc/comite-architectes-experts`
- Bloquer merge si approbations insuffisantes
- Afficher status check avec count actuel

**Scripts utilisés** :
- `scripts/check-approval-authority.js`

---

#### 4. `deploy.yml` - Déploiement Automatique
**Trigger** : `push` to `main`
**Responsabilités** :
- Build du site Fumadocs (Next.js)
- Exécuter tests (si présents)
- Déployer sur Vercel
- Notifier succès/échec

---

### 🏛️ PHASE 2 - Workflows Gouvernance (Priorité HAUTE)

#### 5. `assign-reviewers.yml` - Assignation Reviewers
**Trigger** : `pull_request` (labeled)
**Responsabilités** :
- Assigner reviewers selon scope détecté :
  * `scope:domaine` + `domaine:particuliers` → assign `@bnc/comite-gov-particuliers`
  * `scope:domaine` + `domaine:entreprises` → assign `@bnc/comite-gov-entreprises`
  * `scope:domaine` + `domaine:gestion-patrimoine` → assign `@bnc/comite-gov-patrimoine`
  * `scope:bank-wide` → assign `@bnc/comite-architectes-experts`
  * `type:promotion` → assign `@bnc/comite-architectes-experts`
- Ajouter commentaire avec guidelines de review

---

#### 6. `status-transition.yml` - Gestion Transitions Status
**Trigger** : `pull_request` (opened, synchronize) when status changes detected
**Responsabilités** :
- **Candidate → Approved (Domaine)** :
  * Vérifier 1+ proven-in-use dans le domaine
  * Check documentation enrichie
  * Vérifier feedback positif (si présent)
- **Candidate → Approved (Bank-Wide)** :
  * Vérifier 3+ proven-in-use de différents domaines/équipes
  * Check documentation enrichie multi-contexte
  * Vérifier applicabilité multi-domaine
- Bloquer si critères non satisfaits avec message explicatif

**Scripts utilisés** :
- `scripts/validate-pra-metadata.js` (count proven-in-use)

---

#### 7. `promotion-check.yml` - Validation Promotions
**Trigger** : `pull_request` when files moved from `secteurs/*` to `transversal/*`
**Responsabilités** :
- Appliquer label `type:promotion`
- Vérifier 3+ proven-in-use multi-domaines
- Ajouter template de PR promotion avec checklist
- Ajouter commentaire timeline : "⏱️ Timeline attendue : 4-8 semaines"
- Assigner `@bnc/comite-architectes-experts`

---

### 📢 PHASE 3 - Workflows Communication (Priorité MOYENNE)

#### 8. `notify-stakeholders.yml` - Notifications
**Trigger** : `push` to `main` (après merge)
**Responsabilités** :
- Détecter scope du PRA mergé
- **Si PRA Domaine** :
  * Notification canal Teams du domaine (#pra-particuliers, etc.)
  * Email aux abonnés du domaine
- **Si PRA Bank-Wide** :
  * Notification canal général #pra-registry
  * Notification tous canaux domaines
  * Email global
- **Si Promotion** :
  * Notification amplifiée tous domaines
  * Highlights spéciaux
- Publication sur Confluence (optionnel)

**Secrets requis** :
- `TEAMS_WEBHOOK_URL`
- `EMAIL_API_KEY`
- `CONFLUENCE_API_TOKEN` (optionnel)

---

#### 9. `reminder-review.yml` - Rappels Reviews
**Trigger** : `schedule` (cron: daily at 9am)
**Responsabilités** :
- Identifier PRs ouvertes depuis > 3 jours sans review
- Mentionner reviewers assignés
- Escalader si :
  * PRA Domaine : > 7 jours (timeline : 5-10 jours)
  * PRA Bank-Wide : > 14 jours (timeline : 2-4 semaines)
  * Promotion : > 21 jours (timeline : 4-8 semaines)

---

### 🔧 PHASE 4 - Workflows Maintenance (Priorité BASSE)

#### 10. `stale-check.yml` - Maintenance Automatique
**Trigger** : `schedule` (cron: weekly)
**Responsabilités** :
- Trouver PRAs sans update depuis 6+ mois
- Commenter sur les PRAs avec suggestion de review
- Créer issues de maintenance si 12+ mois sans update

---

#### 11. `metrics-report.yml` - Rapports et Métriques
**Trigger** : `schedule` (cron: monthly)
**Responsabilités** :
- Compter PRAs par scope/status/catégorie
- Calculer délai moyen de review par scope
- Générer dashboard markdown
- Mettre à jour badges README.md
- Générer rapport pour comités de gouvernance

**Scripts utilisés** :
- `scripts/generate-metrics.js`

---

#### 12. `deprecation-check.yml` - Gestion Deprecation
**Trigger** : `pull_request` when `status: deprecated` detected
**Responsabilités** :
- Appliquer label `type:deprecation`
- Vérifier qu'une alternative est mentionnée
- Check présence d'un plan de migration
- Créer automatiquement une issue de suivi période de transition
- Notification large tous utilisateurs

---

#### 13. `duplicate-detection.yml` - Détection Duplications
**Trigger** : `pull_request` (opened)
**Responsabilités** :
- Rechercher PRAs similaires (nom, tags)
- Suggérer PRAs existants connexes
- Warning si conflit potentiel
- Commentaire automatique avec liens

---

## 📁 Infrastructure Nécessaire

### 1. Fichier `.github/CODEOWNERS`
```plaintext
# PRAs Domaine Particuliers
/site/content/registre/secteurs/particuliers/ @bnc/comite-gov-particuliers

# PRAs Domaine Entreprises
/site/content/registre/secteurs/entreprises/ @bnc/comite-gov-entreprises

# PRAs Domaine Gestion de Patrimoine
/site/content/registre/secteurs/gestion-patrimoine/ @bnc/comite-gov-patrimoine

# PRAs Bank-Wide
/site/content/registre/transversal/ @bnc/comite-architectes-experts

# Templates et guides (tous peuvent contribuer)
/templates/ @bnc/comite-architectes-experts
/site/content/registre/guides/ @bnc/comite-architectes-experts
```

### 2. GitHub Teams à Créer
- `@bnc/comite-gov-particuliers` (3-5 architectes Particuliers)
- `@bnc/comite-gov-entreprises` (3-5 architectes Entreprises)
- `@bnc/comite-gov-patrimoine` (3-5 architectes Gestion de Patrimoine)
- `@bnc/comite-architectes-experts` (5-7 architectes experts)

### 3. Branch Protection Rules (`main` branch)
- ✅ Require pull request reviews (2 approvals minimum)
- ✅ Require status checks to pass (tous les workflows)
- ✅ Require conversation resolution
- ✅ Require linear history
- ❌ No force push
- ❌ No deletion

### 4. GitHub Secrets
```yaml
TEAMS_WEBHOOK_URL: <webhook URL pour notifications Teams>
CONFLUENCE_API_TOKEN: <token API Confluence> (optionnel)
VERCEL_TOKEN: <token Vercel pour déploiement>
EMAIL_API_KEY: <clé API service email> (optionnel)
```

---

## 🛠️ Scripts de Validation à Créer

Tous les scripts dans `/scripts/` ou `/.github/scripts/`

### 1. `validate-pra-metadata.js`
**Fonction** : Validation des métadonnées YAML frontmatter
**Validations** :
- Champs obligatoires : name, category, status, tags, proven_in_use, created_at, updated_at
- Types valides : status in ['candidate', 'approved', 'deprecated']
- Structure proven_in_use : {project, team, date, feedback}
- Count proven-in-use entries
- Validation dates (format ISO)

### 2. `validate-pra-structure.js`
**Fonction** : Validation structure Markdown
**Validations** :
- Sections obligatoires présentes (## Overview, ## Context, ## Architecture, ## ADR, ## Examples, ## Proven-in-use)
- Format headings correct
- Présence de au moins 1 exemple concret
- ADRs numérotés correctement

### 3. `detect-pra-changes.js`
**Fonction** : Détection type de changement
**Outputs** :
- Type : nouveau / update / promotion / deprecation
- Scope : domaine / bank-wide
- Domaine : particuliers / entreprises / gestion-patrimoine (si applicable)
- Catégorie : tech / integration / security / business

### 4. `check-approval-authority.js`
**Fonction** : Vérifier autorité des approbateurs
**Validations** :
- Récupérer reviewers de la PR (via GitHub API)
- Vérifier appartenance aux bons teams
- Compter approbations valides selon scope
- Retourner status : ✅ sufficient / ❌ insufficient

### 5. `generate-metrics.js`
**Fonction** : Génération métriques et rapports
**Outputs** :
- Count PRAs par scope/status/catégorie
- Délai moyen review par scope
- PRAs sans update depuis 6+ mois
- Badges README (shields.io format)
- Rapport markdown pour comités

---

## 📝 Templates à Créer

### Pull Request Templates

#### 1. `.github/PULL_REQUEST_TEMPLATE/pra-nouveau.md`
```markdown
## 📋 Nouveau PRA

### Informations de Base
- **Nom du PRA** :
- **Scope** : [ ] Domaine | [ ] Bank-Wide
- **Domaine** (si applicable) : [ ] Particuliers | [ ] Entreprises | [ ] Gestion de Patrimoine
- **Catégorie** : [ ] Tech | [ ] Integration | [ ] Security | [ ] Business

### Checklist
- [ ] Documentation complète (toutes les sections du template)
- [ ] Au moins 1 proven-in-use documenté avec feedback concret
- [ ] ADRs inclus avec justifications
- [ ] Exemples de code/configuration fournis
- [ ] Diagrammes d'architecture inclus
- [ ] Liens validés (pas de 404)
- [ ] Preview local effectué (`pnpm dev`)

### Contexte
[Décrivez brièvement le contexte et la problématique que ce PRA résout]

### Liens Utiles
- [Guide de Contribution](/site/content/registre/guides/06-contributing.md)
- [Standards de Qualité](/site/content/registre/guides/05-standards.md)
```

#### 2. `.github/PULL_REQUEST_TEMPLATE/pra-promotion.md`
```markdown
## 🚀 Promotion PRA Domaine → Bank-Wide

### Informations
- **PRA actuel** : [lien vers PRA domaine]
- **Domaine d'origine** :
- **Nouveau path** : `transversal/[category]/`

### Checklist Promotion
- [ ] 3+ proven-in-use documentés de **différents domaines/équipes**
- [ ] Justification applicabilité multi-domaine fournie
- [ ] Documentation enrichie avec learnings multi-contextes
- [ ] Validation par Comité de Gouvernance du Domaine d'origine
- [ ] Retours positifs des équipes (satisfaction > 7/10)

### Justification Multi-Domaine
[Expliquez pourquoi ce PRA est applicable à tous les domaines]

### Proven-in-use Multi-Domaines
1. **Domaine 1** : [projet, équipe, date]
2. **Domaine 2** : [projet, équipe, date]
3. **Domaine 3** : [projet, équipe, date]

### ⏱️ Timeline Attendue
**4-8 semaines** pour review par Comité Architectes Experts

### Liens Utiles
- [Processus de Promotion](/site/content/registre/guides/07-promotion-process.md)
```

#### 3. `.github/PULL_REQUEST_TEMPLATE/pra-update.md`
```markdown
## 🔄 Update PRA Existant

### Informations
- **PRA concerné** : [lien]
- **Nature du changement** : [ ] Contenu | [ ] Status | [ ] Metadata | [ ] Exemples

### Checklist
- [ ] Nature du changement clairement documentée
- [ ] Impact évalué (breaking change?)
- [ ] Backward compatibility vérifiée
- [ ] Nouveau proven-in-use ajouté (si applicable)
- [ ] `updated_at` mis à jour

### Description des Changements
[Décrivez les modifications apportées]

### Impact
[Y a-t-il un impact sur les utilisateurs existants?]
```

### Issue Templates

#### 4. `.github/ISSUE_TEMPLATE/deprecation-tracking.md`
```markdown
---
name: Suivi Deprecation PRA
about: Tracker la période de transition d'un PRA déprécié
labels: type:deprecation, tracking
---

## 📛 PRA Déprécié

**PRA** : [lien]
**Date de deprecation** : YYYY-MM-DD
**Fin de support** : YYYY-MM-DD (6 mois pour Bank-Wide, 3 mois pour Domaine)

### Alternative Recommandée
[Lien vers PRA alternatif]

### Plan de Migration
- [ ] Documentation de migration créée
- [ ] Équipes utilisatrices notifiées
- [ ] Support disponible pour migration
- [ ] Timeline de transition communiquée

### Équipes Impactées
- [ ] Équipe 1
- [ ] Équipe 2

### Checklist Fin de Support
- [ ] Toutes les équipes migrées
- [ ] PRA déplacé vers `deprecated/`
- [ ] Documentation archivée
```

#### 5. `.github/ISSUE_TEMPLATE/pra-question.md`
```markdown
---
name: Question sur un PRA
about: Poser une question sur l'utilisation d'un PRA
labels: question
---

## ❓ Question sur PRA

**PRA concerné** : [lien]
**Domaine/Équipe** :

### Question
[Votre question]

### Contexte d'Utilisation
[Décrivez votre contexte]

### Informations Complémentaires
[Tout autre détail pertinent]
```

---

## 🎯 Plan d'Implémentation par Phases

### Phase 1 - MVP (2-3 semaines)
**Objectif** : Processus de base fonctionnel

**Workflows à implémenter** :
1. ✅ validate-pra.yml
2. ✅ auto-label.yml
3. ✅ check-approvals.yml
4. ✅ deploy.yml

**Infrastructure** :
- Créer `.github/CODEOWNERS`
- Créer 4 GitHub Teams
- Configurer Branch Protection
- Créer secrets de base (VERCEL_TOKEN)

**Scripts** :
- validate-pra-metadata.js
- validate-pra-structure.js
- detect-pra-changes.js
- check-approval-authority.js

**Templates** :
- pra-nouveau.md

**Livrables** :
- ✅ PRs de nouveaux PRAs validées automatiquement
- ✅ Approbations vérifiées selon gouvernance
- ✅ Déploiement automatique

---

### Phase 2 - Gouvernance Complète (2 semaines)
**Objectif** : Processus de gouvernance avancés

**Workflows à implémenter** :
5. ✅ assign-reviewers.yml
6. ✅ status-transition.yml
7. ✅ promotion-check.yml

**Templates** :
- pra-promotion.md
- pra-update.md

**Livrables** :
- ✅ Transitions de status automatiques
- ✅ Promotions validées correctement
- ✅ Reviewers assignés automatiquement

---

### Phase 3 - Communication (1-2 semaines)
**Objectif** : Notifications et rappels

**Workflows à implémenter** :
8. ✅ notify-stakeholders.yml
9. ✅ reminder-review.yml

**Infrastructure** :
- Configurer TEAMS_WEBHOOK_URL
- Configurer EMAIL_API_KEY (optionnel)

**Livrables** :
- ✅ Notifications Teams automatiques
- ✅ Rappels de review pour PRs en attente

---

### Phase 4 - Maintenance et Optimisation (1-2 semaines)
**Objectif** : Qualité et amélioration continue

**Workflows à implémenter** :
10. ✅ stale-check.yml
11. ✅ metrics-report.yml
12. ✅ deprecation-check.yml
13. ✅ duplicate-detection.yml

**Scripts** :
- generate-metrics.js

**Templates** :
- deprecation-tracking.md
- pra-question.md

**Livrables** :
- ✅ Dashboard de métriques
- ✅ Détection PRAs obsolètes
- ✅ Gestion deprecation complète

---

## ✅ Critères de Succès

### Phase 1 (MVP)
- [ ] 100% des PRs validées automatiquement (format, métadonnées, structure)
- [ ] 0 merge sans approbations suffisantes
- [ ] Déploiement automatique fonctionnel

### Phase 2 (Gouvernance)
- [ ] Transitions de status bloquées si critères non remplis
- [ ] Promotions validées avec 3+ proven-in-use multi-domaines
- [ ] Reviewers corrects assignés dans 100% des cas

### Phase 3 (Communication)
- [ ] Notifications envoyées dans < 5 min après merge
- [ ] 90% des PRs reviewées dans les délais (grâce aux rappels)

### Phase 4 (Maintenance)
- [ ] Dashboard métriques à jour mensuellement
- [ ] 0 PRAs obsolètes non détectés (> 12 mois)
- [ ] Deprecations gérées avec plan de migration

---

## 🔍 Points d'Attention

### Sécurité
- ⚠️ Ne jamais exposer de secrets dans les logs
- ⚠️ Valider tous les inputs utilisateur (prevent injection)
- ⚠️ Limiter les permissions GitHub Actions au strict nécessaire

### Performance
- ⚠️ Workflows longs (> 2 min) : paralléliser les jobs
- ⚠️ Cache dependencies (pnpm, node_modules) pour accélérer builds
- ⚠️ Limiter fréquence des scheduled workflows

### Maintenance
- ⚠️ Documenter tous les workflows (commentaires inline)
- ⚠️ Versionner les scripts (changelog)
- ⚠️ Tester workflows en local avec `act` si possible

### Evolution
- ⚠️ Prévoir extensibilité (nouveaux domaines, nouvelles catégories)
- ⚠️ Logger toutes les actions pour audit
- ⚠️ Mesurer et optimiser en continu

---

## 📚 Ressources et Références

### Documentation Projet
- [Guide de Contribution](/site/content/registre/guides/06-contributing.md)
- [Gouvernance](/site/content/registre/guides/08-governance.md)
- [Cycle de Vie](/site/content/registre/guides/04-lifecycle.md)

### Documentation GitHub Actions
- [Workflows Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Events that trigger workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)

---

**Dernière mise à jour** : 2025-12-02
**Prochaine review** : Après implémentation Phase 1
