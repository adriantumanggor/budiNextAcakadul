import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Department } from '../../app/types/api';

interface DeleteDepartmentModalProps {
  department: Department;
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteDepartmentModal({ department, isOpen, onClose, onDelete }: DeleteDepartmentModalProps) {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Department</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          Are you sure you want to delete the department "{department.name}"? This action cannot be undone.
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="destructive" onClick={handleDelete}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

