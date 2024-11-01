import React from 'react';
import { MessageSquare, Eye } from 'lucide-react';

interface DiscussionCardProps {
  title: string;
  author: string;
  content: string;
  tags: string[];
  replies: number;
  views: number;
  date: string;
  avatar: string;
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({
  title,
  author,
  content,
  tags,
  replies,
  views,
  date,
  avatar,
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt={author}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{author}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{replies}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{views}</span>
            </div>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{content}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionCard;