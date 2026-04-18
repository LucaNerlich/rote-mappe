import fs from 'fs';

const filePath = 'src/components/WizardSteps.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  ['bg-white', 'bg-white dark:bg-slate-800'],
  ['bg-slate-50', 'bg-slate-50 dark:bg-slate-900'],
  ['text-slate-900', 'text-slate-900 dark:text-slate-100'],
  ['text-slate-800', 'text-slate-800 dark:text-slate-200'],
  ['text-slate-700', 'text-slate-700 dark:text-slate-300'],
  ['text-slate-600', 'text-slate-600 dark:text-slate-400'],
  ['text-slate-500', 'text-slate-500 dark:text-slate-400'],
  ['text-slate-400', 'text-slate-400 dark:text-slate-500'],
  ['text-slate-300', 'text-slate-300 dark:text-slate-500'],
  ['border-slate-100', 'border-slate-100 dark:border-slate-800'],
  ['border-slate-200', 'border-slate-200 dark:border-slate-700'],
  ['border-slate-300', 'border-slate-300 dark:border-slate-600'],
  ['hover:bg-slate-50', 'hover:bg-slate-50 dark:hover:bg-slate-800/50'],
  ['text-indigo-900', 'text-indigo-900 dark:text-indigo-200'],
  ['text-indigo-800', 'text-indigo-800 dark:text-indigo-300'],
  ['text-indigo-600', 'text-indigo-600 dark:text-indigo-400'],
  ['border-indigo-100', 'border-indigo-100 dark:border-indigo-900/50'],
  ['border-indigo-200', 'border-indigo-200 dark:border-indigo-800/50'],
  ['bg-indigo-50/50', 'bg-indigo-50/50 dark:bg-indigo-900/20'],
  ['bg-indigo-50', 'bg-indigo-50 dark:bg-indigo-900/20'],
  ['bg-red-50', 'bg-red-50 dark:bg-red-900/20'],
  ['border-red-100', 'border-red-100 dark:border-red-900/50'],
  ['border-red-200', 'border-red-200 dark:border-red-900/50'],
  ['border-red-300', 'border-red-300 dark:border-red-700'],
  ['text-red-800', 'text-red-800 dark:text-red-300'],
  ['text-red-600', 'text-red-600 dark:text-red-400'],
  ['bg-rose-50', 'bg-rose-50 dark:bg-rose-900/20']
];

for (const [oldClass, newClass] of replacements) {
  // Use word boundaries or exact matches where appropriate to avoid partial replacements
  // However, simple split/join on space helps us parse className properly
}

// Better approach:
// Replace by Regex that captures the exact word boundary for tailwind classes.
for (const [oldClass, newClass] of replacements) {
  const regex = new RegExp(`\\b${oldClass.replace('/', '\\/')}\\b(?! dark:)`, 'g');
  content = content.replace(regex, newClass);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated WizardSteps.tsx');
