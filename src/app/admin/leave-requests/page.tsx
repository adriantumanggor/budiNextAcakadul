'use client'

import React from 'react'
import { LeaveRequest } from '@/components/LeaveRequests/LeaveRequests'
import { useLeaveRequests, LeaveRequestsProvider } from '@/context/LeaveRequestsContext'

function LeaveRequestsContent() {
  const { leaveRequests, handleApprove, handleReject } = useLeaveRequests()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
      <div className="space-y-4">
        {leaveRequests.map(request => (
          <LeaveRequest
            key={request.id}
            employee={request.employee}
            type={request.type}
            duration={request.duration}
            start_date={request.start_date}
            end_date={request.end_date}
            status={request.status}
            onApprove={() => handleApprove(request.id)}
            onReject={() => handleReject(request.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function LeaveRequestsPage() {
  return (
    <LeaveRequestsProvider>
      <LeaveRequestsContent />
    </LeaveRequestsProvider>
  )
}

