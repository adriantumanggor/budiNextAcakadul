import React from 'react';
import { Position } from '../../types/position';

interface Props {
  filters: Position[];
  activeFilter: Position;
  onFilterChange: (position: Position) => void;
}

export default function PositionFilter({ filters, activeFilter, onFilterChange }: Props) {
  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="flex -mb-px">
        {filters.map((position) => (
          <button
            key={position}
            onClick={() => onFilterChange(position)}
            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
              activeFilter === position
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {position} 
          </button>
        ))}
      </nav>
    </div>
  );
}
