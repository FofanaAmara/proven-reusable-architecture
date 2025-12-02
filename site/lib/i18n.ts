export const languages = ['en', 'fr'] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'fr';

export function isValidLanguage(lang: unknown): lang is Language {
  return languages.includes(lang as Language);
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.catalogue': 'Browse',
    'nav.registry': 'Registry',
    'nav.library': 'Registry',
    'footer.copyright': '© 2024 Banque Nationale du Canada. All rights reserved.',

    // Hero section
    'home.title': 'PRA Registry',
    'home.subtitle': 'Banque Nationale du Canada',
    'home.tagline': 'Proven Reusable Architecture',
    'home.description':
      'Library of production-validated architectures to accelerate your projects with quality and consistency',
    'home.browse': 'Browse PRAs',
    'home.browse.desc': 'Quick search and filtering',
    'home.registry': 'Explore Registry',
    'home.registry.desc': 'Complete documentation and guides',
    'home.getStarted': 'Getting Started Guide',

    // Stats section
    'stats.approved': 'Approved PRAs',
    'stats.approved.desc': 'Validated in production (3+ implementations)',
    'stats.candidates': 'Candidate PRAs',
    'stats.candidates.desc': 'Under validation (1+ implementation)',

    // Problem → Solution section
    'problemSolution.title': 'Enterprise Architecture Challenges',
    'problemSolution.subtitle': 'Inconsistent patterns slow down your projects. PRAs provide the solution.',
    'problemSolution.problem1.title': 'Effort Duplication',
    'problemSolution.problem1.desc': 'Each team reinvents the same architectural solutions',
    'problemSolution.problem1.solution': 'Validated and immediately reusable patterns',
    'problemSolution.problem2.title': 'Variable Quality',
    'problemSolution.problem2.desc': 'Lack of standards leads to heterogeneous architectures',
    'problemSolution.problem2.solution': 'Production-validated solutions with documented ADRs',
    'problemSolution.problem3.title': 'Lack of Consistency',
    'problemSolution.problem3.desc': 'Difficult to align architectural choices across domains',
    'problemSolution.problem3.solution': 'Two-tier governance (Domain + Bank-Wide)',

    // Benefits section
    'benefits.title': 'Concrete Benefits of PRAs',
    'benefits.subtitle': 'Accelerate your projects with measurable gains',
    'benefits.benefit1.metric': '30-60%',
    'benefits.benefit1.title': 'time saved',
    'benefits.benefit1.desc': 'Avoid reinventing the wheel, implement proven solutions',
    'benefits.benefit2.metric': '3+',
    'benefits.benefit2.title': 'proven-in-use',
    'benefits.benefit2.desc': 'Adopt patterns validated in production with documented feedback',
    'benefits.benefit3.metric': '2 levels',
    'benefits.benefit3.title': 'of governance',
    'benefits.benefit3.desc': 'Align your architectural choices with Bank-Wide standards',
    'benefits.benefit4.metric': 'Documented',
    'benefits.benefit4.title': 'learnings',
    'benefits.benefit4.desc': 'Learn from mistakes avoided by other teams (ADRs)',

    // Personas section
    'personas.title': 'Who Are PRAs For?',
    'personas.subtitle': 'Whether you are an architect, tech lead, or developer, PRAs help you',
    'personas.persona1.title': 'Solution Architect',
    'personas.persona1.usecase': 'Find validated patterns for your projects',
    'personas.persona1.benefit': 'Access proven solutions with complete documentation',
    'personas.persona1.cta': 'Browse Bank-Wide PRAs',
    'personas.persona2.title': 'Tech Lead',
    'personas.persona2.usecase': 'Standardize your team\'s approach',
    'personas.persona2.benefit': 'Align your team on consistent and maintained patterns',
    'personas.persona2.cta': 'Explore PRAs by Domain',
    'personas.persona3.title': 'Developer',
    'personas.persona3.usecase': 'Implement solutions quickly',
    'personas.persona3.benefit': 'Ready-to-use code examples and implementation guides',
    'personas.persona3.cta': 'Search Technical PRAs',
    'personas.persona4.title': 'Contributor',
    'personas.persona4.usecase': 'Share your patterns with the community',
    'personas.persona4.benefit': 'Evolve enterprise architecture with your feedback',
    'personas.persona4.cta': 'Contributing Guide',

    // Features section
    'features.title': 'What You\'ll Find in the Registry',
    'features.feature1.title': 'Smart Search',
    'features.feature1.desc': 'Fuzzy search with typo tolerance to quickly find your PRAs',
    'features.feature1.example': 'Type \'api\' to find \'API Gateway\'',
    'features.feature2.title': 'Advanced Filters',
    'features.feature2.desc': 'Filter by scope, category, status, and domain to refine your results',
    'features.feature2.example': 'Bank-Wide + Security + Approved',
    'features.feature3.title': 'Documented Proven-in-Use',
    'features.feature3.desc': 'Each PRA contains real implementations with feedback',
    'features.feature3.example': '3+ projects validated in production',
    'features.feature4.title': 'Architecture Decision Records',
    'features.feature4.desc': 'Understand the \'why\' behind each architectural decision',
    'features.feature4.example': 'ADRs for every technical choice',
    'features.feature5.title': 'Code Examples',
    'features.feature5.desc': 'Ready-to-use code and configuration examples',
    'features.feature5.example': 'Production-tested snippets',
    'features.feature6.title': 'Implementation Guides',
    'features.feature6.desc': 'Detailed documentation to implement each PRA',
    'features.feature6.example': 'Clear steps from setup to production',

    // Process section
    'process.title': 'How to Use a PRA?',
    'process.subtitle': 'A simple 4-step process',
    'process.step1.title': 'Search',
    'process.step1.desc': 'Use search and filters to find a PRA suited to your need',
    'process.step2.title': 'Understand',
    'process.step2.desc': 'Read the context, ADRs, and proven-in-use to validate applicability',
    'process.step3.title': 'Implement',
    'process.step3.desc': 'Follow the implementation guide and use code examples',
    'process.step4.title': 'Share',
    'process.step4.desc': 'Document your implementation and share your feedback',

    // FAQ section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1.question': 'What is the difference between Candidate, Approved, and Deprecated statuses?',
    'faq.q1.answer': 'Candidate = 1+ proven-in-use, under validation by governance committee. Approved = criteria met and validated by governance committee. Deprecated = obsolete, do not use for new projects.',
    'faq.q2.question': 'How long does it take to implement a PRA?',
    'faq.q2.answer': 'Depends on the PRA: Simple patterns (logging): 1-2 days. Medium patterns (CI/CD): 1-2 weeks. Complex patterns (authentication): 2-4 weeks. Time saved compared to starting from scratch: 30-60%.',
    'faq.q3.question': 'Are PRAs mandatory?',
    'faq.q3.answer': 'No, but Bank-Wide Approved PRAs are strongly recommended. Justification needed if applicable PRA not used. May be discussed in architecture reviews.',
    'faq.q4.question': 'Who can contribute a PRA?',
    'faq.q4.answer': 'Any domain solution architect or expert can propose a PRA. Domain PRAs: validated by Domain Governance Committee. Bank-Wide PRAs: validated by Expert Architects Governance Committee.',
    'faq.q5.question': 'How does a Domain PRA become Bank-Wide?',
    'faq.q5.answer': 'Via Flow 1 (promotion): 1) Domain identifies multi-domain applicability. 2) Submission to Expert Architects Committee. 3) Review and validation (2-4 weeks). 4) Migration to Bank-Wide if approved.',
    'faq.q6.question': 'Where can I get help?',
    'faq.q6.answer': 'Teams Channel: #pra-registry | Email: pra-support@company.com | GitHub Issues: for PRA-specific questions.',

    // CTA Final section
    'ctaFinal.title': 'Ready to Get Started?',
    'ctaFinal.subtitle': 'Explore the registry, find your PRA, and accelerate your project.',
    'ctaFinal.stats': '45+ contributing architects | 100+ documented PRAs',
    'ctaFinal.browsePRAs': 'Browse PRAs',
    'ctaFinal.getStartedGuide': 'Getting Started Guide',
    'ctaFinal.joinTeams': 'Join #pra-registry on Teams',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.catalogue': 'Parcourir',
    'nav.registry': 'Registre',
    'nav.library': 'Registre',
    'footer.copyright': '© 2024 Banque Nationale du Canada. Tous droits réservés.',

    // Hero section
    'home.title': 'Registre PRA',
    'home.subtitle': 'Banque Nationale du Canada',
    'home.tagline': 'Proven Reusable Architecture',
    'home.description':
      "Bibliothèque d'architectures validées en production pour accélérer vos projets avec qualité et cohérence",
    'home.browse': 'Parcourir les PRAs',
    'home.browse.desc': 'Recherche et filtrage rapides',
    'home.registry': 'Explorer le Registre',
    'home.registry.desc': 'Documentation complète et guides',
    'home.getStarted': 'Guide de Démarrage',

    // Stats section
    'stats.approved': 'PRAs Approuvés',
    'stats.approved.desc': 'Validés en production (3+ implémentations)',
    'stats.candidates': 'PRAs Candidats',
    'stats.candidates.desc': 'En cours de validation (1+ implémentation)',

    // Problem → Solution section
    'problemSolution.title': 'Les Défis de l\'Architecture d\'Entreprise',
    'problemSolution.subtitle': 'Des patterns incohérents ralentissent vos projets. Les PRAs apportent la solution.',
    'problemSolution.problem1.title': 'Duplication d\'efforts',
    'problemSolution.problem1.desc': 'Chaque équipe réinvente les mêmes solutions architecturales',
    'problemSolution.problem1.solution': 'Patterns validés et réutilisables immédiatement',
    'problemSolution.problem2.title': 'Qualité variable',
    'problemSolution.problem2.desc': 'Absence de standards conduit à des architectures hétérogènes',
    'problemSolution.problem2.solution': 'Solutions validées en production avec ADRs documentés',
    'problemSolution.problem3.title': 'Manque de cohérence',
    'problemSolution.problem3.desc': 'Difficile d\'aligner les choix architecturaux entre domaines',
    'problemSolution.problem3.solution': 'Gouvernance à deux niveaux (Domaine + Bank-Wide)',

    // Benefits section
    'benefits.title': 'Les Bénéfices Concrets des PRAs',
    'benefits.subtitle': 'Accélérez vos projets avec des gains mesurables',
    'benefits.benefit1.metric': '30-60%',
    'benefits.benefit1.title': 'de temps économisé',
    'benefits.benefit1.desc': 'Évitez de réinventer la roue, implémentez des solutions éprouvées',
    'benefits.benefit2.metric': '3+',
    'benefits.benefit2.title': 'proven-in-use',
    'benefits.benefit2.desc': 'Adoptez des patterns validés en production avec retours documentés',
    'benefits.benefit3.metric': '2 niveaux',
    'benefits.benefit3.title': 'de gouvernance',
    'benefits.benefit3.desc': 'Alignez vos choix architecturaux avec les standards Bank-Wide',
    'benefits.benefit4.metric': 'Documentés',
    'benefits.benefit4.title': 'learnings',
    'benefits.benefit4.desc': 'Apprenez des erreurs évitées par d\'autres équipes (ADRs)',

    // Personas section
    'personas.title': 'Pour Qui Sont les PRAs ?',
    'personas.subtitle': 'Que vous soyez architecte, lead technique ou développeur, les PRAs vous aident',
    'personas.persona1.title': 'Architecte de Solutions',
    'personas.persona1.usecase': 'Trouvez des patterns validés pour vos projets',
    'personas.persona1.benefit': 'Accédez à des solutions éprouvées avec documentation complète',
    'personas.persona1.cta': 'Parcourir les PRAs Bank-Wide',
    'personas.persona2.title': 'Tech Lead',
    'personas.persona2.usecase': 'Standardisez l\'approche de votre équipe',
    'personas.persona2.benefit': 'Alignez votre équipe sur des patterns cohérents et maintenus',
    'personas.persona2.cta': 'Explorer les PRAs par Domaine',
    'personas.persona3.title': 'Développeur',
    'personas.persona3.usecase': 'Implémentez des solutions rapidement',
    'personas.persona3.benefit': 'Code examples et guides d\'implémentation prêts à l\'emploi',
    'personas.persona3.cta': 'Rechercher des PRAs techniques',
    'personas.persona4.title': 'Contributeur',
    'personas.persona4.usecase': 'Partagez vos patterns avec la communauté',
    'personas.persona4.benefit': 'Faites évoluer l\'architecture d\'entreprise avec vos retours',
    'personas.persona4.cta': 'Guide de Contribution',

    // Features section
    'features.title': 'Ce Que Vous Trouverez dans le Registre',
    'features.feature1.title': 'Recherche Intelligente',
    'features.feature1.desc': 'Recherche fuzzy avec tolérance aux typos pour trouver rapidement vos PRAs',
    'features.feature1.example': 'Tapez \'api\' pour trouver \'API Gateway\'',
    'features.feature2.title': 'Filtres Avancés',
    'features.feature2.desc': 'Filtrez par scope, catégorie, statut, et domaine pour affiner vos résultats',
    'features.feature2.example': 'Bank-Wide + Security + Approved',
    'features.feature3.title': 'Proven-in-Use Documenté',
    'features.feature3.desc': 'Chaque PRA contient des implémentations réelles avec retours d\'expérience',
    'features.feature3.example': '3+ projets validés en production',
    'features.feature4.title': 'Architecture Decision Records',
    'features.feature4.desc': 'Comprenez le \'pourquoi\' derrière chaque décision architecturale',
    'features.feature4.example': 'ADRs pour chaque choix technique',
    'features.feature5.title': 'Code Examples',
    'features.feature5.desc': 'Exemples de code et configurations prêts à l\'emploi',
    'features.feature5.example': 'Snippets testés en production',
    'features.feature6.title': 'Guides d\'Implémentation',
    'features.feature6.desc': 'Documentation détaillée pour implémenter chaque PRA',
    'features.feature6.example': 'Étapes claires du setup à la prod',

    // Process section
    'process.title': 'Comment Utiliser un PRA ?',
    'process.subtitle': 'Un processus simple en 4 étapes',
    'process.step1.title': 'Rechercher',
    'process.step1.desc': 'Utilisez la recherche et filtres pour trouver un PRA adapté à votre besoin',
    'process.step2.title': 'Comprendre',
    'process.step2.desc': 'Lisez le contexte, les ADRs et les proven-in-use pour valider l\'applicabilité',
    'process.step3.title': 'Implémenter',
    'process.step3.desc': 'Suivez le guide d\'implémentation et utilisez les code examples',
    'process.step4.title': 'Partager',
    'process.step4.desc': 'Documentez votre implémentation et partagez vos retours d\'expérience',

    // FAQ section
    'faq.title': 'Questions Fréquentes',
    'faq.q1.question': 'Quelle est la différence entre les statuts Candidate, Approved et Deprecated ?',
    'faq.q1.answer': 'Candidate = 1+ proven-in-use, en validation par comité de gouvernance. Approved = critères remplis et validé par comité de gouvernance. Deprecated = obsolète, ne plus utiliser pour nouveaux projets.',
    'faq.q2.question': 'Combien de temps prend l\'implémentation d\'un PRA ?',
    'faq.q2.answer': 'Dépend du PRA : Patterns simples (logging) : 1-2 jours. Patterns moyens (CI/CD) : 1-2 semaines. Patterns complexes (authentication) : 2-4 semaines. Gain de temps par rapport à zéro : 30-60%.',
    'faq.q3.question': 'Les PRAs sont-ils obligatoires ?',
    'faq.q3.answer': 'Non, mais les PRAs Bank-Wide Approved sont fortement recommandés. Justification nécessaire si PRA applicable non utilisé. Discussion possible en architecture review.',
    'faq.q4.question': 'Qui peut contribuer un PRA ?',
    'faq.q4.answer': 'Tout architecte de solutions du domaine ou expert peut proposer un PRA. PRAs Domaine : validés par Comité de Gouvernance du Domaine. PRAs Bank-Wide : validés par Comité de Gouvernance Architectes Experts.',
    'faq.q5.question': 'Comment un PRA Domaine devient-il Bank-Wide ?',
    'faq.q5.answer': 'Via le Flow 1 (promotion) : 1) Domaine identifie applicabilité multi-domaine. 2) Soumission au Comité Architectes Experts. 3) Review et validation (2-4 semaines). 4) Migration vers Bank-Wide si approuvé.',
    'faq.q6.question': 'Où puis-je obtenir de l\'aide ?',
    'faq.q6.answer': 'Canal Teams : #pra-registry | Email : pra-support@company.com | GitHub Issues : pour questions spécifiques aux PRAs.',

    // CTA Final section
    'ctaFinal.title': 'Prêt à Démarrer ?',
    'ctaFinal.subtitle': 'Explorez le registre, trouvez votre PRA, et accélérez votre projet.',
    'ctaFinal.stats': '45+ architectes contributeurs | 100+ PRAs documentés',
    'ctaFinal.browsePRAs': 'Parcourir les PRAs',
    'ctaFinal.getStartedGuide': 'Guide de Démarrage',
    'ctaFinal.joinTeams': 'Rejoindre #pra-registry sur Teams',
  },
};

export function t(lang: Language, key: string): string {
  return translations[lang]?.[key] || key;
}
