
import React from 'react';

interface VerdictCardProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  variant: 'success' | 'warning';
}

const VerdictCard: React.FC<VerdictCardProps> = ({ title, children, icon, variant }) => {
  const baseClasses = "flex items-start space-x-4 p-6 rounded-lg shadow-md border";
  const variantClasses = {
    success: "bg-green-50/70 border-green-200 text-green-900",
    warning: "bg-amber-50/70 border-amber-200 text-amber-900",
  };
  const iconClasses = {
      success: "text-green-500",
      warning: "text-amber-500",
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className={`flex-shrink-0 w-8 h-8 ${iconClasses[variant]}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="mt-1 leading-relaxed text-stone-700">{children}</div>
      </div>
    </div>
  );
};

export default VerdictCard;
