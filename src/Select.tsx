import React from 'react';
import { useTranslation } from 'react-i18next';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, options, className = '', ...props }: SelectProps) {
  const { t } = useTranslation();
  return (
    <div>
      {label && <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1.5">{label}</label>}
      <select 
        className={`w-full rounded-lg px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 border shadow-sm transition-colors focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:outline-none border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 ${className}`} 
        {...props}
      >
        <option value="">{t('common.select')}</option>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  );
}
