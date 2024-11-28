'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { Karyawan } from '@/app/types/api';

interface EditEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Karyawan | null;
  onEdit: (updatedEmployee: Karyawan) => void;
}

export default function EditEmployeeModal({
  isOpen,
  onClose,
  employee,
  onEdit,
}: EditEmployeeModalProps) {
  const [name, setName] = useState(employee?.name || '');
  const [position, setPosition] = useState(employee?.position || '');
  const [department, setDepartment] = useState(employee?.department || '');
  const [email, setEmail] = useState(employee?.email || '');
  const [phone, setPhone] = useState(employee?.phone || '');
  const [status, setStatus] = useState<'Active' | 'Inactive'>(employee?.status || 'Active');

  const handleEdit = () => {
    if (employee) {
      const updatedEmployee = { ...employee, name, position, department, email, phone, status };
      onEdit(updatedEmployee);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} title="Edit Karyawan" onClose={onClose}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* Repeat for position, department, email, phone, and status */}
        <button
          onClick={handleEdit}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>
    </Modal>
  );
}
