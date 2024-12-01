import React from 'react';
import { Department } from '../../types/api';
import { Button } from '@/app/components/ui/button';
import { Eye, PencilIcon, TrashIcon } from 'lucide-react';

interface Props {
  department: Department;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function DepartmentTableRow({ department, onView, onEdit, onDelete }: Props) {
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="py-3 px-6 text-left text-black whitespace-nowrap">{department.name}</td>
      <td className="py-3 px-6 text-left text-black">{department.manager_name}</td>
      <td className="py-3 px-6 text-center">
        <div className="flex justify-center space-x-2">
          <Button variant="ghost" size="sm" onClick={onView}>
            <Eye className="h-4 w-4" />
            <span className="sr-only">View</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onEdit}>
            <PencilIcon className="h-4 w-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button variant="ghost" size="sm" onClick={onDelete}>
            <TrashIcon className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </td>
    </tr>
  );
}

