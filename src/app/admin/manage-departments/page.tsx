'use client';

import React, { useState } from 'react';
import PositionFilter from '../../components/EmployeeTable/PositionFilter';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import { Position } from '../../types/position';
import { Karyawan } from '../../types/api';
// import

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

  const [activeFilter, setActiveFilter] = useState<Position>('All');
  const filteredEmployees =
    activeFilter === 'All'
      ? employees
      : employees.filter((emp) => emp.position === activeFilter);

  const positionFilters: Position[] = ['All', 'Manager', 'Staff', 'Assistant', 'Coordinator'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Departments</h1>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Employee List</h3>
      </div>
      <PositionFilter
        filters={positionFilters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <EmployeeTable
        employees={filteredEmployees}
        onView={(emp) => console.log('View:', emp)}
        onEdit={(emp) => console.log('Edit:', emp)}
        onDelete={(id) => console.log('Delete:', id)}
      />
    </div>
  );
}
