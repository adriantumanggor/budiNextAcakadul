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

export default function UpdateDepartmentModal({
  department,
  isOpen,
  onClose,
  onUpdate
}: UpdateDepartmentModalProps) {
  const [formData, setFormData] = useState<Department>(department)
  const [managers, setManagers] = useState<Manager[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null)

  useEffect(() => {
    // Reset form data and fetch managers when department changes
    setFormData(department)
    fetchManagers()
  }, [department])

  useEffect(() => {
    // Find and set the currently selected manager when managers are loaded
    if (managers.length > 0 && formData.manager_id) {
      const currentManager = managers.find(m => m.id === formData.manager_id)
      setSelectedManager(currentManager || null)
    }
  }, [managers, formData.manager_id])

  const fetchManagers = async () => {
    try {
      const managersData = await getManagers()
      setManagers(managersData)
    } catch (error) {
      console.error('Failed to fetch managers:', error)
    }
  }

  const handleManagerChange = (value: string) => {
    // Find the selected manager and update form data
    const manager = managers.find(m => m.id === value)
    if (manager) {
      setFormData(prev => ({ ...prev, manager_id: manager.id }))
      setSelectedManager(manager)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const updatedDepartment = await patchDepartemen(String(department.id), {
        manager_id: formData.manager_id
      })

      // Find the selected manager to get the name
      const selectedManager = managers.find(m => m.id === formData.manager_id)

      onUpdate({
        ...department, // spread the original department
        manager_id: updatedDepartment.manager_id,
        manager_name: selectedManager ? selectedManager.name : ''
      })

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
                value={selectedManager?.id || ''}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a manager">
                    {selectedManager ? selectedManager.name : 'Select a manager'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {managers.map((manager) => (
                    <SelectItem key={manager.id} value={manager.id}>
                      {manager.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Save changes'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}