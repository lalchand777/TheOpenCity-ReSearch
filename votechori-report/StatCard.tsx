
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-900 p-6 rounded-r-lg my-6 text-center">
      <p className="text-4xl md:text-5xl font-bold">{value}</p>
      <p className="mt-2 text-lg">{label}</p>
    </div>
  );
};

export default StatCard;
