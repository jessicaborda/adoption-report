import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export const SectionHeader = ({ title, description, action }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};
