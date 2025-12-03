## 🔄 Update PRA Existant

### Informations

- **PRA concerné** : <!-- Lien vers le PRA -->
- **Nature du changement** :
  - [ ] Contenu (documentation, exemples)
  - [ ] Status (candidate → approved, approved → deprecated, etc.)
  - [ ] Metadata (tags, catégorie, etc.)
  - [ ] Exemples (code, configurations)
  - [ ] Proven-in-use (ajout d'implémentations)
  - [ ] Autre : _______________

---

### Checklist

**Validation Générale** :
- [ ] Nature du changement clairement documentée ci-dessous
- [ ] Impact évalué (breaking change ?)
- [ ] Backward compatibility vérifiée
- [ ] `updated_at` mis à jour dans les métadonnées
- [ ] Preview local effectué (`pnpm dev`)

**Si ajout de Proven-in-use** :
- [ ] Nouveau proven-in-use inclut : projet, équipe, date, feedback
- [ ] Feedback est concret et détaillé
- [ ] Date est correcte (format ISO : YYYY-MM-DD)

**Si changement de Status** :
- [ ] Transition de status respecte le lifecycle
- [ ] Critères de transition sont satisfaits :
  - [ ] Candidate → Approved (Domaine) : 1+ proven-in-use
  - [ ] Candidate → Approved (Bank-Wide) : 3+ proven-in-use multi-domaines
  - [ ] → Deprecated : Alternative mentionnée, plan de migration fourni

**Si modification de Contenu** :
- [ ] Changements améliorent la clarté
- [ ] Exemples mis à jour si nécessaire
- [ ] Liens validés (pas de 404)
- [ ] ADRs mis à jour si décisions changent

---

### Description des Changements

**Quoi ?**
<!-- Décrivez précisément ce qui a été modifié -->

**Pourquoi ?**
<!-- Expliquez la raison de ces modifications -->

**Comment ?**
<!-- Décrivez comment les modifications ont été faites -->

---

### Impact

**Breaking changes ?**
- [ ] Oui
- [ ] Non

**Si oui, décrivez l'impact** :
<!-- Quelles équipes/projets sont affectés ? -->

**Migration nécessaire ?**
- [ ] Oui
- [ ] Non

**Si oui, décrivez le plan de migration** :
<!-- Comment les équipes doivent-elles migrer ? -->

---

### Proven-in-use (si ajout)

**Nouveau(x) proven-in-use** :

1. **Projet** :
   - **Équipe** :
   - **Date** : YYYY-MM-DD
   - **Feedback** :

<!-- Ajoutez d'autres proven-in-use si applicable -->

---

### Deprecation (si applicable)

**Alternative recommandée** :
<!-- Lien vers le PRA alternatif -->

**Raison de la deprecation** :
<!-- Pourquoi ce PRA est-il déprécié ? -->

**Plan de migration** :
<!-- Comment les équipes doivent-elles migrer vers l'alternative ? -->

**Période de transition** :
- **Domaine** : 3 mois
- **Bank-Wide** : 6 mois

**Date de fin de support** : YYYY-MM-DD

---

### Équipes Impactées

**Équipes utilisant actuellement ce PRA** :
<!-- Listez les équipes connues qui utilisent ce PRA -->

**Notification** :
- [ ] Les équipes impactées ont été notifiées
- [ ] Support disponible pour migration (si applicable)

---

### Validation

**Tests effectués** :
<!-- Décrivez les tests effectués pour valider ces changements -->

**Review** :
- [ ] Auto-review effectué
- [ ] Changements validés localement

---

### Liens Utiles

- [Lifecycle](/site/content/en/guides/04-lifecycle.md)
- [Standards de Qualité](/site/content/en/guides/05-standards.md)
- [Contribution Guide](/site/content/en/guides/06-contributing.md)

---

### Notes pour les Reviewers

<!-- Informations additionnelles pour faciliter la review -->
