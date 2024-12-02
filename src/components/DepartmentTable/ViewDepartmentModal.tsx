import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Department } from '../../app/types/api';

interface ViewDepartmentModalProps {
  department: Department;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewDepartmentModal({ department, isOpen, onClose }: ViewDepartmentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Department Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Department Name:</span>
            <span>{department.name}</span>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <span className="font-semibold">Manager Name:</span>
            <span>{department.manager_name}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

