import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CheckCircle, XCircle, Clock } from 'lucide-react'

interface LeaveRequestProps {
  employee: string
  type: string
  duration: string
  start_date: string
  end_date: string
  status: 'Pending' | 'Approved' | 'Rejected'
  onApprove: () => void
  onReject: () => void
}

export function LeaveRequest({
  employee,
  type,
  duration,
  start_date,
  end_date,
  status,
  onApprove,
  onReject
}: LeaveRequestProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 border-green-300'
      case 'Rejected':
        return 'bg-red-100 border-red-300'
      default:
        return 'bg-yellow-50 border-yellow-200'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case 'Rejected':
        return <XCircle className="w-6 h-6 text-red-600" />
      default:
        return <Clock className="w-6 h-6 text-yellow-600" />
    }
  }

  return (
    <Card className={`border-2 ${getStatusColor()} transition-colors duration-300`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold">{employee}</h2>
          <div className="flex items-center">
            {getStatusIcon()}
            <span className="ml-2 font-medium">{status}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p><span className="font-medium">Type:</span> {type}</p>
          <p><span className="font-medium">Duration:</span> {duration}</p>
          <p><span className="font-medium">Start Date:</span> {start_date}</p>
          <p><span className="font-medium">End Date:</span> {end_date}</p>
        </div>
      </CardContent>
      <CardFooter className={`p-4 ${status === 'Pending' ? 'bg-gray-50' : ''}`}>
        {status === 'Pending' && (
          <>
            <Button onClick={onApprove} className="mr-2 bg-green-600 hover:bg-green-700">Approve</Button>
            <Button onClick={onReject} variant="destructive">Reject</Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}

