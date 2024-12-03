import { LeaveRequestData } from '@/app/types/api';

export async function getLeaveRequests(): Promise<LeaveRequestData[]> {
  // In a real application, this would be an API call
  // For now, we'll simulate an API call with a delay
  
  return [
    { id: 1, employee: "Sarah Johnson", type: "Annual Leave", duration: "3 days", status: "Pending" },
    { id: 2, employee: "Mike Thompson", type: "Sick Leave", duration: "1 day", status: "Pending" },
    { id: 3, employee: "Emily Davis", type: "Personal Leave", duration: "2 days", status: "Pending" },
    { id: 4, employee: "Alex Wilson", type: "Annual Leave", duration: "5 days", status: "Pending" },
  ];
}

export async function approve(id: number): Promise<void> {
  // In a real application, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Approved leave request with id: ${id}`);
}

export async function reject(id: number): Promise<void> {
  // In a real application, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Rejected leave request with id: ${id}`);
}

