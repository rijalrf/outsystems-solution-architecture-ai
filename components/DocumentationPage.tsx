
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

interface DocsSectionProps {
    title: string;
    children: React.ReactNode;
}

const DocsSection: React.FC<DocsSectionProps> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-red-500 pb-2 mb-4">{title}</h2>
        <div className="space-y-3 text-slate-600 dark:text-slate-300">
            {children}
        </div>
    </div>
);

const FeatureItem: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
     <li className="ml-4">
        <strong className="text-slate-700 dark:text-slate-200">{title}:</strong> {children}
    </li>
);

export const DocumentationPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const { t } = useTranslation();
    return (
        <main className="flex-grow p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={onBack}
                    className="mb-6 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    {t('docsPage.backButton')}
                </button>
                <h1 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100 mb-8">{t('docsPage.title')}</h1>

                <DocsSection title={t('docsPage.overview.title')}>
                    <p>{t('docsPage.overview.p1')}</p>
                </DocsSection>

                <DocsSection title={t('docsPage.howToUse.title')}>
                    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">{t('docsPage.howToUse.figma.title')}</h3>
                    <p>{t('docsPage.howToUse.figma.p1')}</p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>{t('docsPage.howToUse.figma.step1')}</li>
                        <li>{t('docsPage.howToUse.figma.step2')}</li>
                        <li>{t('docsPage.howToUse.figma.step3')}</li>
                        <li>{t('docsPage.howToUse.figma.step4')}</li>
                    </ol>
                     <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">{t('docsPage.howToUse.apiKey.title')}</h3>
                    <p>{t('docsPage.howToUse.apiKey.p1')}</p>
                    <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-2">{t('docsPage.howToUse.analyze.title')}</h3>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>{t('docsPage.howToUse.analyze.step1')}</li>
                        <li>{t('docsPage.howToUse.analyze.step2')}</li>
                        <li>{t('docsPage.howToUse.analyze.step3')}</li>
                    </ol>
                </DocsSection>
                
                <DocsSection title={t('docsPage.features.title')}>
                    <p>{t('docsPage.features.p1')}</p>
                    <ul className="list-disc space-y-2 mt-2">
                        <FeatureItem title={t('results.bizSummary.title')}>{t('docsPage.features.bizSummary')}</FeatureItem>
                        <FeatureItem title={t('results.architecture.title')}>{t('docsPage.features.architecture')}</FeatureItem>
                        <FeatureItem title={t('results.erd.title')}>{t('docsPage.features.erd')}</FeatureItem>
                        <FeatureItem title={t('results.entities.title')}>{t('docsPage.features.entities')}</FeatureItem>
                        <FeatureItem title={t('results.staticEntities.title')}>{t('docsPage.features.staticEntities')}</FeatureItem>
                        <FeatureItem title={t('results.async.title')}>{t('docsPage.features.async')}</FeatureItem>
                        <FeatureItem title={t('results.thirdParty.title')}>{t('docsPage.features.thirdParty')}</FeatureItem>
                        <FeatureItem title={t('results.api.title')}>{t('docsPage.features.api')}</FeatureItem>
                        <FeatureItem title={t('results.roles.title')}>{t('docsPage.features.roles')}</FeatureItem>
                        <FeatureItem title={t('results.pages.title')}>{t('docsPage.features.pages')}</FeatureItem>
                        <FeatureItem title={t('results.siteProperties.title')}>{t('docsPage.features.siteProperties')}</FeatureItem>
                        <FeatureItem title="Exporting">{t('docsPage.features.export')}</FeatureItem>
                    </ul>
                </DocsSection>
            </div>
        </main>
    )
};
