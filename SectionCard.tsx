
import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200/80">
      <h3 className="text-xl font-bold text-amber-700 mb-3">{title}</h3>
      <div className="space-y-4 text-stone-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
