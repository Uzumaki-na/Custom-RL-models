import React from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface DocCardProps {
  title: string;
  icon: LucideIcon;
  items: Array<{ title: string; link: string }>;
}

const DocCard: React.FC<DocCardProps> = ({ title, icon: Icon, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                className="group flex items-center text-sm text-gray-600 hover:text-indigo-600"
              >
                <ChevronRight className="mr-2 h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DocCard;