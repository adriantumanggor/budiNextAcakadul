'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { LeaveRequestData } from '@/app/types/api'
import { getLeaveRequests, approve, reject } from '@/app/services/leave'

interface LeaveRequestsContextType {
  leaveRequests: LeaveRequestData[]
  handleApprove: (id: number) => void
  handleReject: (id: number) => void
}

const LeaveRequestsContext = createContext<LeaveRequestsContextType | undefined>(undefined)

export function LeaveRequestsProvider({ children }: { children: React.ReactNode }) {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequestData[]>([])

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      const requests = await getLeaveRequests()
      setLeaveRequests(requests)
    }
    fetchLeaveRequests()
  }, [])

  const handleApprove = async (id: number) => {
    await approve(id)
    setLeaveRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    )
  }

  const handleReject = async (id: number) => {
    await reject(id)
    setLeaveRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Rejected' } : request
      )
    )
  }

  return (
    <LeaveRequestsContext.Provider value={{ leaveRequests, handleApprove, handleReject }}>
      {children}
    </LeaveRequestsContext.Provider>
  )
}

export function useLeaveRequests() {
  const context = useContext(LeaveRequestsContext)
  if (context === undefined) {
    throw new Error('useLeaveRequests must be used within a LeaveRequestsProvider')
  }
  return context
}

