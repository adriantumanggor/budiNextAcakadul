import React from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react';
import { Karyawan } from '../../types/api';

interface Props {
  employee: Karyawan;
  onView: (employee: Karyawan) => void;
  onEdit: (employee: Karyawan) => void;
  onDelete: (employeeId: string) => void;
}

export default function EmployeeTableRow({ employee, onView, onEdit, onDelete }: Props) {
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
            employee.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {employee.status}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={() => onView(employee)}
          className="text-blue-600 hover:text-blue-800 mx-1"
          title="View"
        >
          <EyeIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onEdit(employee)}
          className="text-green-600 hover:text-green-800 mx-1"
          title="Edit"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(employee.id)}
          className="text-red-600 hover:text-red-800 mx-1"
          title="Delete"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
}
