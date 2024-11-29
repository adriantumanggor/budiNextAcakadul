'use client'

import React from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';
import { Karyawan } from '../../types/api';
import { Button } from '@/app/components/ui/button';

interface Props {
  employee: Karyawan;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function EmployeeTableRow({ 
  employee, 
  onView, 
  onEdit, 
  onDelete 
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4">{employee.name}</td>
      <td className="px-6 py-4">{employee.position}</td>
      <td className="px-6 py-4">{employee.department}</td>
      <td className="px-6 py-4">{employee.email}</td>
      <td className="px-6 py-4">{employee.phone}</td>
      <td className="px-6 py-4 text-center">
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            employee.status === 'aktif'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {employee.status}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={onView}
          className="text-blue-600 hover:text-blue-800"
        >
          <EyeIcon className="h-5 w-5" />
          <span className="sr-only">View</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onEdit}
          className="text-green-600 hover:text-green-800"
        >
          <PencilIcon className="h-5 w-5" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          className="text-red-600 hover:text-red-800"
        >
          <TrashIcon className="h-5 w-5" />
          <span className="sr-only">Delete</span>
        </Button>
      </td>
    </tr>
  );
}

