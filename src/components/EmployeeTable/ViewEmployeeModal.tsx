'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Karyawan } from '../../app/types/api'

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
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-sm">
            <span className="font-semibold">Name:</span> {employee.name}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Position:</span> {employee.position}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Department:</span> {employee.department}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Email:</span> {employee.email}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Phone:</span> {employee.phone}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Status:</span> {employee.status}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

