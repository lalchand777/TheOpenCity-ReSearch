
import React from 'react';

interface IconListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const IconListItem: React.FC<IconListItemProps> = ({ icon, children }) => {
  return (
    <li className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 mt-1 text-amber-700">{icon}</div>
      <div>{children}</div>
    </li>
  );
};

export default IconListItem;
