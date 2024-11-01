import React from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface ModelShareCardProps {
  title: string;
  author: string;
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  date: string;
  avatar: string;
}

const ModelShareCard: React.FC<ModelShareCardProps> = ({
  title,
  author,
  description,
  tags,
  likes,
  comments,
  shares,
  date,
  avatar,
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
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
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
        <div className="flex justify-between text-sm text-gray-500">
          <button className="flex items-center space-x-2 hover:text-gray-700">
            <ThumbsUp className="h-4 w-4" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-700">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-700">
            <Share2 className="h-4 w-4" />
            <span>{shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelShareCard;