'use client'

import React, { useState } from 'react';
import { Karyawan } from '../../app/types/api';
import EmployeeTableRow from './EmployeeTableRow';
import ViewEmployeeModal from './ViewEmployeeModal';
import UpdateEmployeeModal from './UpdateEmployeeModal';
import DeleteEmployeeModal from './DeleteEmployeeModal';

interface Props {
  employees: Karyawan[];
}

export default function EmployeeTable({ employees: initialEmployees }: Props) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState<Karyawan | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleView = (employee: Karyawan) => {
    setSelectedEmployee(employee);
    setIsViewModalOpen(true);
  };

  const handleEdit = (employee: Karyawan) => {
    setSelectedEmployee(employee);
    setIsEditModalOpen(true);
  };

  const handleDelete = (employee: Karyawan) => {
    setSelectedEmployee(employee);
    setIsDeleteModalOpen(true);
  };

  const handleUpdate = (updatedEmployee: Karyawan) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    setIsEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedEmployee) {
      setEmployees(employees.filter(emp => emp.id !== selectedEmployee.id));
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Position</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <EmployeeTableRow
                key={employee.id}
                employee={employee}
                onView={() => handleView(employee)}
                onEdit={() => handleEdit(employee)}
                onDelete={() => handleDelete(employee)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <>
          <ViewEmployeeModal
            employee={selectedEmployee}
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
          />
          <UpdateEmployeeModal
            employee={selectedEmployee}
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onUpdate={handleUpdate}
          />
          <DeleteEmployeeModal
            employee={selectedEmployee}
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDeleteConfirm}
          />
        </>
      )}
    </>
  );
}

