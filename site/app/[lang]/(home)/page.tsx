import Link from 'next/link';
import { getPRAStats } from '@/lib/source';
import { type Language, t } from '@/lib/i18n';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const stats = getPRAStats();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
              {t(lang, 'home.title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              {t(lang, 'home.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-3">
              {t(lang, 'home.tagline')}
            </p>
            <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t(lang, 'home.description')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href={`/${lang}/catalogue`}
                className="inline-flex flex-col items-center justify-center rounded border border-gray-900 bg-gray-900 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-gray-800"
              >
                <span className="text-base font-semibold">{t(lang, 'home.browse')}</span>
                <span className="text-xs text-gray-300 mt-1">{t(lang, 'home.browse.desc')}</span>
              </Link>
              <Link
                href={`/${lang}/registre`}
                className="inline-flex flex-col items-center justify-center rounded border border-gray-300 bg-white px-8 py-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
              >
                <span className="text-base font-semibold">{t(lang, 'home.registry')}</span>
                <span className="text-xs text-gray-500 mt-1">{t(lang, 'home.registry.desc')}</span>
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href={`/${lang}/guides/01-getting-started`}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                {t(lang, 'home.getStarted')} →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Problem → Solution Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
              {t(lang, 'problemSolution.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t(lang, 'problemSolution.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="bg-gray-50 rounded border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'problemSolution.problem1.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'problemSolution.problem1.desc')}
                </p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-900 font-medium mb-1">
                    {lang === 'fr' ? 'Solution PRA :' : 'PRA Solution:'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'problemSolution.problem1.solution')}
                  </p>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-gray-50 rounded border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'problemSolution.problem2.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'problemSolution.problem2.desc')}
                </p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-900 font-medium mb-1">
                    {lang === 'fr' ? 'Solution PRA :' : 'PRA Solution:'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'problemSolution.problem2.solution')}
                  </p>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-gray-50 rounded border border-gray-200 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'problemSolution.problem3.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'problemSolution.problem3.desc')}
                </p>
                <div className="pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-900 font-medium mb-1">
                    {lang === 'fr' ? 'Solution PRA :' : 'PRA Solution:'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'problemSolution.problem3.solution')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center max-w-3xl mx-auto">
            <div className="bg-white rounded border border-gray-300 p-6">
              <div className="text-3xl font-semibold mb-2 text-gray-900">{stats.approved}</div>
              <div className="text-gray-700 font-medium text-sm">{t(lang, 'stats.approved')}</div>
              <div className="text-gray-500 text-xs mt-1">{t(lang, 'stats.approved.desc')}</div>
            </div>
            <div className="bg-white rounded border border-gray-300 p-6">
              <div className="text-3xl font-semibold mb-2 text-gray-900">{stats.candidates}</div>
              <div className="text-gray-700 font-medium text-sm">{t(lang, 'stats.candidates')}</div>
              <div className="text-gray-500 text-xs mt-1">{t(lang, 'stats.candidates.desc')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
              {t(lang, 'benefits.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t(lang, 'benefits.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white rounded border border-gray-300 p-6">
                <div className="text-3xl font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit1.metric')}
                </div>
                <div className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit1.title')}
                </div>
                <p className="text-sm text-gray-600">
                  {t(lang, 'benefits.benefit1.desc')}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded border border-gray-300 p-6">
                <div className="text-3xl font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit2.metric')}
                </div>
                <div className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit2.title')}
                </div>
                <p className="text-sm text-gray-600">
                  {t(lang, 'benefits.benefit2.desc')}
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded border border-gray-300 p-6">
                <div className="text-3xl font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit3.metric')}
                </div>
                <div className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit3.title')}
                </div>
                <p className="text-sm text-gray-600">
                  {t(lang, 'benefits.benefit3.desc')}
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded border border-gray-300 p-6">
                <div className="text-3xl font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit4.metric')}
                </div>
                <div className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'benefits.benefit4.title')}
                </div>
                <p className="text-sm text-gray-600">
                  {t(lang, 'benefits.benefit4.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personas Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
              {t(lang, 'personas.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t(lang, 'personas.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Persona 1: Solution Architect */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'personas.persona1.title')}
                </h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {t(lang, 'personas.persona1.usecase')}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'personas.persona1.benefit')}
                </p>
                <Link
                  href={`/${lang}/catalogue`}
                  className="text-sm text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  {t(lang, 'personas.persona1.cta')} →
                </Link>
              </div>

              {/* Persona 2: Tech Lead */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'personas.persona2.title')}
                </h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {t(lang, 'personas.persona2.usecase')}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'personas.persona2.benefit')}
                </p>
                <Link
                  href={`/${lang}/catalogue`}
                  className="text-sm text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  {t(lang, 'personas.persona2.cta')} →
                </Link>
              </div>

              {/* Persona 3: Developer */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'personas.persona3.title')}
                </h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {t(lang, 'personas.persona3.usecase')}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'personas.persona3.benefit')}
                </p>
                <Link
                  href={`/${lang}/catalogue`}
                  className="text-sm text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  {t(lang, 'personas.persona3.cta')} →
                </Link>
              </div>

              {/* Persona 4: Contributor */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {t(lang, 'personas.persona4.title')}
                </h3>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {t(lang, 'personas.persona4.usecase')}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {t(lang, 'personas.persona4.benefit')}
                </p>
                <Link
                  href={`/${lang}/guides/06-contributing`}
                  className="text-sm text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  {t(lang, 'personas.persona4.cta')} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">
              {t(lang, 'features.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature1.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature1.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature1.example')}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature2.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature2.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature2.example')}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature3.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature3.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature3.example')}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature4.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature4.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature4.example')}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature5.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature5.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature5.example')}
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded border border-gray-300 p-5">
                <h3 className="text-base font-semibold mb-2 text-gray-900">
                  {t(lang, 'features.feature6.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(lang, 'features.feature6.desc')}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {t(lang, 'features.feature6.example')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
              {t(lang, 'process.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t(lang, 'process.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6 relative">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div className="mt-10">
                  <h3 className="text-base font-semibold mb-2 text-gray-900">
                    {t(lang, 'process.step1.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'process.step1.desc')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6 relative">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div className="mt-10">
                  <h3 className="text-base font-semibold mb-2 text-gray-900">
                    {t(lang, 'process.step2.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'process.step2.desc')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6 relative">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div className="mt-10">
                  <h3 className="text-base font-semibold mb-2 text-gray-900">
                    {t(lang, 'process.step3.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'process.step3.desc')}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6 relative">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  4
                </div>
                <div className="mt-10">
                  <h3 className="text-base font-semibold mb-2 text-gray-900">
                    {t(lang, 'process.step4.title')}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(lang, 'process.step4.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How PRAs Are Created Section */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-3 text-center text-gray-900">
              {lang === 'fr' ? 'Comment les PRAs sont-ils créés ?' : 'How Are PRAs Created?'}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {lang === 'fr'
                ? 'Les PRAs émergent de trois sources complémentaires, tous validés par une gouvernance à deux niveaux'
                : 'PRAs emerge from three complementary sources, all validated by a two-tier governance structure'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Flow 1 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <div className="text-2xl font-semibold mb-2 text-gray-900">Flow 1</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {lang === 'fr' ? 'Bottom-Up (Domaine → Bank-Wide)' : 'Bottom-Up (Domain → Bank-Wide)'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {lang === 'fr'
                    ? 'Les architectes de solutions du domaine identifient des patterns réutilisables dans leurs projets. Les meilleurs sont promus au niveau Bank-Wide.'
                    : 'Domain solution architects identify reusable patterns in their projects. The best ones are promoted to Bank-Wide level.'}
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>
                    {lang === 'fr' ? '• Émergence depuis le terrain' : '• Emergence from the field'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Validé par Comité Domaine' : '• Validated by Domain Committee'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Promotion au niveau Bank-Wide' : '• Promotion to Bank-Wide level'}
                  </div>
                </div>
              </div>

              {/* Flow 2 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <div className="text-2xl font-semibold mb-2 text-gray-900">Flow 2</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {lang === 'fr' ? 'Top-Down (Équipes Transversales)' : 'Top-Down (Cross-cutting Teams)'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {lang === 'fr'
                    ? "Les équipes transversales (Software Engineering, Sécurité) créent des standards d'entreprise directement au niveau Bank-Wide."
                    : 'Cross-cutting teams (Software Engineering, Security) create enterprise standards directly at Bank-Wide level.'}
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>
                    {lang === 'fr' ? '• Standards d\'entreprise' : '• Enterprise standards'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Créés directement Bank-Wide' : '• Created directly Bank-Wide'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Gouvernance centralisée' : '• Centralized governance'}
                  </div>
                </div>
              </div>

              {/* Flow 3 */}
              <div className="bg-gray-50 rounded border border-gray-300 p-6">
                <div className="text-2xl font-semibold mb-2 text-gray-900">Flow 3</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {lang === 'fr' ? 'Bootstrap (Transitoire)' : 'Bootstrap (Transitional)'}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {lang === 'fr'
                    ? "Identification et documentation des patterns existants critiques pour démarrer rapidement le registre."
                    : 'Identification and documentation of existing critical patterns to quickly bootstrap the registry.'}
                </p>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>
                    {lang === 'fr' ? '• Démarrage rapide' : '• Quick start'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Patterns existants critiques' : '• Existing critical patterns'}
                  </div>
                  <div>
                    {lang === 'fr' ? '• Phase transitoire' : '• Transitional phase'}
                  </div>
                </div>
              </div>
            </div>

            {/* Governance */}
            <div className="bg-gray-50 rounded border border-gray-300 p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 text-center">
                {lang === 'fr' ? 'Gouvernance à Deux Niveaux' : 'Two-Tier Governance'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {lang === 'fr' ? 'Comités de Gouvernance par Domaine' : 'Domain Governance Committees'}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {lang === 'fr'
                      ? '3-5 architectes de solutions par domaine (Particuliers, Entreprises, Gestion de Patrimoine)'
                      : '3-5 solution architects per domain (Retail, Corporate, Wealth Management)'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {lang === 'fr'
                      ? 'Valident les PRAs Domaine avec 1+ proven-in-use'
                      : 'Validate Domain PRAs with 1+ proven-in-use'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {lang === 'fr' ? 'Comité de Gouvernance Architectes Experts' : 'Expert Architects Governance Committee'}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {lang === 'fr' ? '5-7 architectes experts' : '5-7 expert architects'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {lang === 'fr'
                      ? 'Valident les PRAs Bank-Wide avec 3+ proven-in-use multi-domaines'
                      : 'Validate Bank-Wide PRAs with 3+ multi-domain proven-in-use'}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href={`/${lang}/guides/08-governance`}
                  className="text-sm text-gray-700 hover:text-gray-900 font-medium underline"
                >
                  {lang === 'fr' ? 'En savoir plus sur la gouvernance →' : 'Learn more about governance →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">
              {t(lang, 'faq.title')}
            </h2>

            <div className="space-y-8">
              {/* Q1 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q1.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q1.answer')}
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q2.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q2.answer')}
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q3.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q3.answer')}
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q4.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q4.answer')}
                </p>
              </div>

              {/* Q5 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q5.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q5.answer')}
                </p>
              </div>

              {/* Q6 */}
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {t(lang, 'faq.q6.question')}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(lang, 'faq.q6.answer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            {t(lang, 'ctaFinal.title')}
          </h2>
          <p className="text-base text-gray-300 mb-2 max-w-2xl mx-auto">
            {t(lang, 'ctaFinal.subtitle')}
          </p>
          <p className="text-sm text-gray-400 mb-8 max-w-xl mx-auto">
            {t(lang, 'ctaFinal.stats')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <Link
              href={`/${lang}/catalogue`}
              className="inline-flex items-center justify-center rounded border border-white bg-white px-8 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              {t(lang, 'ctaFinal.browsePRAs')}
            </Link>
            <Link
              href={`/${lang}/guides/01-getting-started`}
              className="inline-flex items-center justify-center rounded border border-gray-400 bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              {t(lang, 'ctaFinal.getStartedGuide')}
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://teams.microsoft.com/l/channel/19%3a..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-200 underline"
            >
              {t(lang, 'ctaFinal.joinTeams')}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
