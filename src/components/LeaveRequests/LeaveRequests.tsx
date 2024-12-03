import React from 'react';
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

interface LeaveRequestProps {
  employee: string;
  type: string;
  duration: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  onApprove: () => void;
  onReject: () => void;
}

export function LeaveRequest({ employee, type, duration, status, onApprove, onReject }: LeaveRequestProps) {
  const getStatusStyles = () => {
    switch (status) {
      case 'Approved':
        return 'bg-green-50 border-green-200';
      case 'Rejected':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-orange-50 border-orange-200';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'Approved':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <div className={`border rounded-lg p-4 transition-all duration-300 ${getStatusStyles()}`}>
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">Leave Request</p>
          <p className="text-sm text-muted-foreground">{employee}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className={`text-sm ${
            status === 'Pending' ? 'text-orange-500' :
            status === 'Approved' ? 'text-green-500' :
            'text-red-500'
          }`}>
            {status}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{type}: {duration}</p>
      {status === 'Pending' && (
        <div className="flex space-x-2">
          <Button 
            onClick={onApprove} 
            variant="secondary" 
            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm transition-colors duration-300"
          >
            Approve
          </Button>
          <Button 
            onClick={onReject} 
            variant="secondary" 
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm transition-colors duration-300"
          >
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}

