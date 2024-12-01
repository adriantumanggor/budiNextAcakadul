'use client'

import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"
import { Label } from "@/app/components/ui/label"
import { Department, Manager } from '@/app/types/api'
import { patchDepartemen } from '@/app/services/departmen'
import { getManagers } from '@/app/services/karyawan'


interface UpdateDepartmentModalProps {
  department: Department
  isOpen: boolean
  onClose: () => void
  onUpdate: (department: Department) => void
}

export default function UpdateDepartmentModal({ department, isOpen, onClose, onUpdate }: UpdateDepartmentModalProps) {
  const [formData, setFormData] = useState<Department>(department)
  const [managers, setManagers] = useState<Manager[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setFormData(department)
    fetchManagers()
  }, [department])

  const fetchManagers = async () => {
    try {
      const managersData = await getManagers()
      setManagers(managersData)
    } catch (error) {
      console.error('Failed to fetch managers:', error)
    }
  }

  const handleManagerChange = (value: string) => {
    setFormData(prev => ({ ...prev, manager_id: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const updatedDepartment = await patchDepartemen(String(department.id), { manager_id: formData.manager_id })
      onUpdate(updatedDepartment)
      onClose()
    } catch (error) {
      console.error('Failed to update department:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Department {formData.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="manager_id" className="text-right">
                Manager
              </Label>
              <Select
                onValueChange={handleManagerChange}
                defaultValue={formData.manager_id}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a manager" />
                </SelectTrigger>
                <SelectContent>
                  {managers.map((manager) => (
                    <SelectItem key={manager.id} value={manager.id} >
                      {manager.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

