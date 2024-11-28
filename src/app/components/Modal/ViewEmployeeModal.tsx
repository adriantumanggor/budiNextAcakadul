'use client';

import React from 'react';
import Modal from './Modal';
import { Karyawan } from '@/app/types/api'; // Assume you define `Karyawan` type in `types.ts`.

interface ViewEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Karyawan | null;
}

export default function ViewEmployeeModal({
  isOpen,
  onClose,
  employee,
}: ViewEmployeeModalProps) {
  if (!employee) return null;

  return (
    <Modal isOpen={isOpen} title="Karyawan Details" onClose={onClose}>
      <div>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Status:</strong> {employee.status}</p>
      </div>
    </Modal>
  );
}
