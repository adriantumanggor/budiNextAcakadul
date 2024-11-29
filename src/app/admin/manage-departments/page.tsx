'use client';

import React, { useState } from 'react';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import { Karyawan } from '../../types/api';

export default function ManageDepartmentsPage() {
  const [employees, setEmployees] = useState<Karyawan[]>([
    {
      id: '1',
      name: 'John Doe',
      position: 'Manager',
      department: 'Human Resources',
      email: 'john.doe@company.com',
      phone: '08123456789',
      status: 'Active',
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Departments</h1>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Employee List</h3>
      </div>
      <EmployeeTable
        onView={(emp) => console.log('View:', emp)}
        onEdit={(emp) => console.log('Edit:', emp)}
        onDelete={(id) => console.log('Delete:', id)} 
        employees={[]} />
    </div>
  );
}
