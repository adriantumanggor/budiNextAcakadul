import React from 'react';
import { Karyawan } from '../../types/api';
import EmployeeTableRow from './EmployeeTableRow';

interface Props {
  employees: Karyawan[];
  onView: (employee: Karyawan) => void;
  onEdit: (employee: Karyawan) => void;
  onDelete: (employeeId: string) => void;
}

export default function EmployeeTable({ employees, onView, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Position</th>
            <th className="px-6 py-3 text-left">Department</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Phone</th>
            <th className="px-6 py-3 text-center">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeTableRow
              key={employee.id}
              employee={employee}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
