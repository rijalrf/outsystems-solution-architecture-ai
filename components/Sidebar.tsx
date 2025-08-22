import React from 'react';
import type { AnalysisResult } from '../types';
import { useTranslation } from '../context/LanguageContext';

interface SidebarProps {
    result: AnalysisResult | null;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 rounded-md hover:bg-red-100 dark:hover:bg-red-500/20 hover:text-red-700 dark:hover:text-red-400 transition-colors">
            {children}
        </a>
    </li>
)

export const Sidebar: React.FC<SidebarProps> = ({ result }) => {
    const { t } = useTranslation();
    const hasAsyncProcesses = result?.asynchronousProcesses && 
    ((result.asynchronousProcesses.timers && result.asynchronousProcesses.timers.length > 0) || 
     (result.asynchronousProcesses.bptProcesses && result.asynchronousProcesses.bptProcesses.length > 0));

    return (
        <aside className="sticky top-0 h-screen w-64 bg-slate-100/50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 p-4 hidden lg:block">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-4">{t('sidebar.title')}</h3>
            <nav>
                <ul className="space-y-1">
                   {result ? (
                        <>
                            {result.businessSummary && <NavLink href="#business-summary">{t('results.bizSummary.title')}</NavLink>}
                            {result.architecture && <NavLink href="#architecture">{t('results.architecture.title')}</NavLink>}
                            {result.entities?.length > 0 && <NavLink href="#erd-diagram">{t('results.erd.title')}</NavLink>}
                            {result.entities?.length > 0 && <NavLink href="#entities">{t('results.entities.title')}</NavLink>}
                            {result.staticEntities?.length > 0 && <NavLink href="#static-entities">{t('results.staticEntities.title')}</NavLink>}
                            {hasAsyncProcesses && <NavLink href="#asynchronous-processes">{t('results.async.title')}</NavLink>}
                            {result.thirdPartyRecommendations?.length > 0 && <NavLink href="#third-party-recommendations">{t('results.thirdParty.title')}</NavLink>}
                            {result.endpoints?.length > 0 && <NavLink href="#api-endpoints">{t('results.api.title')}</NavLink>}
                            {result.roles?.length > 0 && <NavLink href="#roles">{t('results.roles.title')}</NavLink>}
                            {result.pages?.length > 0 && <NavLink href="#pages">{t('results.pages.title')}</NavLink>}
                            {result.siteProperties?.length > 0 && <NavLink href="#site-properties">{t('results.siteProperties.title')}</NavLink>}
                        </>
                   ) : (
                        <li className="px-4 py-2 text-sm text-slate-400 dark:text-slate-500 italic">
                            {t('sidebar.placeholder')}
                        </li>
                   )}
                </ul>
            </nav>
        </aside>
    );
};
