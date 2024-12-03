'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { LeaveRequestData } from '@/app/types/api'
import * as leaveService from '@/app/services/leave'

interface LeaveRequestsContextType {
  leaveRequests: LeaveRequestData[]
  isLoading: boolean
  handleApprove: (id: number) => Promise<void>
  handleReject: (id: number) => Promise<void>
}

const LeaveRequestsContext = createContext<LeaveRequestsContextType | undefined>(undefined)

export const LeaveRequestsProvider = ({ children }: { children: ReactNode }) => {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequestData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchLeaveRequests()
  }, [])

  const fetchLeaveRequests = async () => {
    setIsLoading(true)
    try {
      const requests = await leaveService.getLeaveRequests()
      setLeaveRequests(requests)
    } catch (error) {
      console.error('Failed to fetch leave requests:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleApprove = async (id: number) => {
    try {
      await leaveService.approve(id)
      setLeaveRequests(requests =>
        requests.map(request =>
          request.id === id ? { ...request, status: 'Approved' } : request
        )
      )
    } catch (error) {
      console.error('Failed to approve leave request:', error)
    }
  }

  const handleReject = async (id: number) => {
    try {
      await leaveService.reject(id)
      setLeaveRequests(requests =>
        requests.map(request =>
          request.id === id ? { ...request, status: 'Rejected' } : request
        )
      )
    } catch (error) {
      console.error('Failed to reject leave request:', error)
    }
  }

  return (
    <LeaveRequestsContext.Provider value={{ leaveRequests, isLoading, handleApprove, handleReject }}>
      {children}
    </LeaveRequestsContext.Provider>
  )
}

export const useLeaveRequests = () => {
  const context = useContext(LeaveRequestsContext)
  if (context === undefined) {
    throw new Error('useLeaveRequests must be used within a LeaveRequestsProvider')
  }
  return context
}

