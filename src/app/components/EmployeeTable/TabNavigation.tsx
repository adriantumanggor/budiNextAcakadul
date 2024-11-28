// src/components/TabNavigation.tsx
import React from "react";

interface PositionTabsProps {
  onFilter: (position: string) => void;
}

const TabNavigation: React.FC<PositionTabsProps> = ({ onFilter }) => {
  const positions = ["All Employees", "Managers", "Staff", "Assistants", "Coordinators"];

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="flex -mb-px">
        {positions.map((pos) => (
          <button
            key={pos}
            onClick={() => onFilter(pos === "All Employees" ? "all" : pos)}
            className="mr-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            {pos}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
