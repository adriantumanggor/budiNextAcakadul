'use client'
import React, { useState } from 'react';
import { Department } from '../../app/types/api';
import DepartmentTableRow from './DepartmentTableRow';
import ViewDepartmentModal from './ViewDepartmentModal';
import UpdateDepartmentModal from './UpdateDepartmentModal';
import DeleteDepartmentModal from './DeleteDepartmentModal';

interface Props {
  departments: Department[];
}

export default function DepartmentTable({ departments: initialDepartments }: Props) {
  const [departments, setDepartments] = useState(initialDepartments);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleView = (department: Department) => {
    setSelectedDepartment(department);
    setIsViewModalOpen(true);
  };

  const handleEdit = (department: Department) => {
    setSelectedDepartment(department);
    setIsEditModalOpen(true);
  };

  const handleDelete = (department: Department) => {
    setSelectedDepartment(department);
    setIsDeleteModalOpen(true);
  };

  const handleUpdate = (updatedDepartment: Department) => {
    console.log('Updating department:', updatedDepartment); // Debug log
    
    if (!updatedDepartment || !updatedDepartment.id) {
      console.error('Invalid department update:', updatedDepartment);
      return;
    }

    setDepartments(prevDepartments => 
      prevDepartments.map(dept => 
        dept.id === updatedDepartment.id ? updatedDepartment : dept
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedDepartment) {
      setDepartments(departments.filter(dept => dept.id !== selectedDepartment.id));
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Department Name</th>
              <th className="py-3 px-6 text-left">Manager Name</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {departments.map((department) => (
              <DepartmentTableRow
                key={department.id}
                department={department}
                onView={() => handleView(department)}
                onEdit={() => handleEdit(department)}
                onDelete={() => handleDelete(department)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedDepartment && (
        <>
          <ViewDepartmentModal
            department={selectedDepartment}
            isOpen={isViewModalOpen}
            onClose={() => setIsViewModalOpen(false)}
          />
          <UpdateDepartmentModal
            department={selectedDepartment}
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onUpdate={handleUpdate}
          />
          <DeleteDepartmentModal
            department={selectedDepartment}
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDeleteConfirm}
          />
        </>
      )}
    </>
  );
}