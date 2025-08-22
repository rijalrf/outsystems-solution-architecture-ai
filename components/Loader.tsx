import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const messages = [
        t('loader.message1'),
        t('loader.message2'),
        t('loader.message3'),
        t('loader.message4'),
        t('loader.message5'),
    ];
    
    setMessage(messages[0]);

    const progressInterval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress >= 99) {
          clearInterval(progressInterval);
          return 99; // Stop just before 100 to feel more authentic
        }
        const newProgress = oldProgress + 1;
        const messageIndex = Math.min(Math.floor(newProgress / (100 / messages.length)), messages.length - 1);
        setMessage(messages[messageIndex]);
        return newProgress;
      });
    }, 80); // Simulate an 8-second process

    return () => {
      clearInterval(progressInterval);
    };
  }, [t]);

  return (
    <div className="flex flex-col items-center justify-center text-center my-12">
        <div className="w-full max-w-md bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-4">
            <div 
            className="bg-red-500 h-2.5 rounded-full transition-all duration-300 ease-linear" 
            style={{ width: `${progress}%` }}
            ></div>
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-300 font-semibold">{message || 'Starting analysis...'}</p>
        <p className="text-sm text-slate-400 dark:text-slate-500">{t('loader.subtitle')}</p>
    </div>
  );
};