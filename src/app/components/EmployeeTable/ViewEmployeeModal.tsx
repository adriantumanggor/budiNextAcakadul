'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/app/components/ui/dialog"
import { Karyawan } from '../../types/api'

interface ViewEmployeeModalProps {
  employee: Karyawan
  isOpen: boolean
  onClose: () => void
}

export default function ViewEmployeeModal({ employee, isOpen, onClose }: ViewEmployeeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Employee Details</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {employee.name}
            </div>
            <div>
              <strong>Position:</strong> {employee.position}
            </div>
            <div>
              <strong>Department:</strong> {employee.department}
            </div>
            <div>
              <strong>Email:</strong> {employee.email}
            </div>
            <div>
              <strong>Phone:</strong> {employee.phone}
            </div>
            <div>
              <strong>Status:</strong> {employee.status}
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

