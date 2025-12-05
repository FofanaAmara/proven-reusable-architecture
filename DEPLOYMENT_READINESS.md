# 🚀 Déploiement Banque - État de Préparation

**Date**: 2025-12-05
**Repository Source**: https://github.com/KiyaliHQ/proven-reusable-architecture
**Branch**: main
**Status**: ✅ PRÊT POUR DÉPLOIEMENT

---

## 📦 Contenu du Registre

### Workflows Automatisés ✅
- **`pra-candidate-validate-submission.yml`**: Validation automatique des PRAs Candidate
  - Détection nouveaux PRAs (bank-wide, domain-wide)
  - Validation métadonnées (proven-in-use, tags, dates)
  - Validation structure (sections requises: Overview, Context, Architecture, ADRs, Examples)
  - Validation bilingue (FR + EN)
  - Commentaire détaillé pour contributeurs
  - Identification automatique du comité de gouvernance approprié

### Fichiers de Test ✅
- **PRA Test "API Client Onboarding"** (Gestion de Patrimoine - Candidate)
  - Version FR: `content/pras-fr/domain-wide/gestion-patrimoine/candidate/business/api-client-onboarding.md`
  - Version EN: `content/pras-en/domain-wide/gestion-patrimoine/candidate/business/api-client-onboarding.md`
  - Complet avec 1 proven-in-use, architecture, ADRs, code examples

### Configuration CODEOWNERS ✅
- Protection des fichiers framework (`.github/`, `site/`, `docs/`, `scripts/`, `templates/`)
- Équipe requise: `@BanqueOrg/pra-development-team`
- Contributeurs peuvent modifier `/content/` librement
- Reviewer assignment géré par le workflow

---

## 🔧 Configuration Requise à la Banque

### 1. Créer les Teams GitHub

**Teams de Gouvernance** (à créer dans l'organisation GitHub de la banque):
```
@BanqueOrg/pra-development-team         # Équipe dev framework
@BanqueOrg/comite-architectes-experts   # Bank-Wide PRAs
@BanqueOrg/comite-gov-particuliers      # Domain: Retail Banking
@BanqueOrg/comite-gov-entreprises       # Domain: Corporate Banking
@BanqueOrg/comite-gov-patrimoine        # Domain: Wealth Management
```

### 2. Ajouter Membres aux Teams

**Minimum requis**:
- `pra-development-team`: Au moins 1 membre avec permissions admin sur le repo
- Chaque comité de gouvernance: Au moins 2 membres (pour les 2 approbations requises)

### 3. Configuration GitHub Repository

#### Settings → Branches → Protection Rules (main)
```yaml
Branch name pattern: main
✅ Require a pull request before merging
   ✅ Require approvals: 1
   ✅ Require review from Code Owners
✅ Require status checks to pass before merging
   ✅ Require branches to be up to date
   Status checks: "Detect & Validate PRA Candidate"
✅ Require conversation resolution before merging
✅ Include administrators
```

#### Setup Script Disponible
```bash
# Utiliser le script automatique (ajuster le nom du repo)
./scripts/setup-branch-protection.sh BanqueOrg/pra-registry
```

### 4. Mettre à Jour CODEOWNERS

Remplacer `KiyaliHQ` par le nom de l'organisation de la banque dans `.github/CODEOWNERS`:
```bash
# Exemple: Remplacer KiyaliHQ par BanqueNationale
sed -i 's/@KiyaliHQ/@BanqueNationale/g' .github/CODEOWNERS
```

---

## ⚠️ Limitations Connues

### Assignment Automatique des Reviewers

**Problème**: Le workflow ne peut PAS assigner automatiquement les team reviewers car `GITHUB_TOKEN` par défaut n'a pas la permission `read:org`.

**Comportement Actuel**:
- ✅ Workflow identifie le bon comité (`comite-gov-patrimoine`, `comite-architectes-experts`, etc.)
- ✅ Workflow poste un commentaire détaillé
- ⚠️  Assignment des reviewers doit être **MANUEL**

**Solutions Possibles** (à implémenter à la banque selon les préférences):

#### Option A: Assignment Manuel (Recommandé pour démarrage)
- Après chaque PR, un membre de l'équipe dev assigne manuellement le team
- Le workflow indique quel team assigner dans les logs

#### Option B: Personal Access Token (PAT)
```yaml
# 1. Créer un PAT avec scope 'read:org'
# 2. Ajouter aux secrets du repo: REVIEWER_PAT
# 3. Modifier workflow (ligne 208):
github-token: ${{ secrets.REVIEWER_PAT }}
```
⚠️ Nécessite gestion des secrets, rotation du token

#### Option C: GitHub App (Entreprise-friendly)
- Créer une GitHub App avec permission `members:read`
- Plus complexe mais plus sécurisé pour usage entreprise
- Documentation: https://docs.github.com/en/apps

---

## 📋 Checklist Migration

### Avant le Push vers GitHub Banque

- [ ] Créer les 5 teams dans l'organisation GitHub de la banque
- [ ] Ajouter au moins 2 membres à chaque comité de gouvernance
- [ ] Ajouter au moins 1 membre admin à `pra-development-team`
- [ ] Créer le repository `pra-registry` (ou nom choisi)

### Après le Push Initial

- [ ] Configurer branch protection rules sur `main` (utiliser script `setup-branch-protection.sh`)
- [ ] Mettre à jour `.github/CODEOWNERS` (remplacer `KiyaliHQ` par nom org banque)
- [ ] Tester avec une PR de test (créer un PRA fictif)
- [ ] Vérifier workflow s'exécute correctement
- [ ] Assigner manuellement les reviewers sur la PR test
- [ ] Décider si implémenter auto-assignment (Option B ou C ci-dessus)

### Configuration Optionnelle

- [ ] Configurer notifications Slack/Teams pour nouvelles PRAs
- [ ] Personnaliser les templates de PR (`.github/PULL_REQUEST_TEMPLATE.md`)
- [ ] Ajouter des labels automatiques selon scope/domain
- [ ] Configurer auto-merge une fois 2/2 approvals

---

## 🧪 Test de Validation

Pour tester le système après migration:

1. **Créer une branche de test**:
   ```bash
   git checkout -b test/pra-validation
   ```

2. **Créer un PRA test** (ou utiliser celui existant):
   ```bash
   # Utiliser le PRA test déjà présent
   git checkout main -- content/pras-fr/domain-wide/gestion-patrimoine/
   git checkout main -- content/pras-en/domain-wide/gestion-patrimoine/
   ```

3. **Ouvrir une PR**:
   ```bash
   git push origin test/pra-validation
   gh pr create --title "test: Validation workflow" --body "Test PR pour vérifier workflows"
   ```

4. **Vérifier**:
   - ✅ Workflow "PRA Candidate - Validate Submission" s'exécute
   - ✅ Tous les checks passent (vert)
   - ✅ Commentaire détaillé posté sur la PR
   - ✅ Logs indiquent le bon comité (ex: `comite-gov-patrimoine`)
   - ⚠️  Assigner manuellement le team identifié

5. **Tester l'approbation**:
   - Demander à 2 membres du comité d'approuver
   - Vérifier merge possible après 2/2 approvals

---

## 📞 Support Post-Migration

### Documentation Disponible

- `README.md`: Vue d'ensemble du registre
- `CLAUDE.md`: Guide pour AI assistants (Claude Code)
- `docs/CONTRIBUTING.md`: Guide de contribution
- `docs/GOVERNANCE.md`: Structure de gouvernance
- `scripts/README.md`: Scripts utilitaires
- `templates/pra-template.md`: Template PRA standard

### Contacts

- **Équipe Dev Framework**: `@BanqueOrg/pra-development-team`
- **Support Workflows**: Consulter logs GitHub Actions
- **Questions Architecture**: Comité Architectes Experts

---

## ✅ Validation Finale

**Prêt pour migration**: ✅ OUI

**Tous les éléments critiques sont en place**:
- ✅ Workflows fonctionnels et testés
- ✅ CODEOWNERS configuré
- ✅ Documentation complète
- ✅ PRA test disponible pour validation
- ✅ Scripts de setup automatiques

**Prochaine étape**: Push vers `github.com/BanqueNationale/pra-registry` (ou nom choisi)

---

**Dernière mise à jour**: 2025-12-05
**Validé par**: Équipe Architecture BNC
