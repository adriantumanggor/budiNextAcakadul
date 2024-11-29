'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"
import { Karyawan } from '../../types/api'

interface DeleteEmployeeModalProps {
    employee: Karyawan
    isOpen: boolean
    onClose: () => void
    onDelete: () => void
}

export default function DeleteEmployeeModal({ employee, isOpen, onClose, onDelete }: DeleteEmployeeModalProps) {
    const handleDelete = () => {
        onDelete()
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Employee</DialogTitle>
                </DialogHeader>
                <div>
                    Are you sure you want to delete {employee.name}? This action cannot be undone.
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

