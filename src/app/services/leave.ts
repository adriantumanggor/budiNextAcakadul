import { LeaveRequestData } from '@/app/types/api';

export async function getLeaveRequests(): Promise<LeaveRequestData[]> {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    { id: 1, employee: "Sarah Johnson", type: "Annual Leave", duration: "3 days", start_date: "2023-07-01", end_date: "2023-07-03", status: "Pending" },
    { id: 2, employee: "Mike Thompson", type: "Sick Leave", duration: "1 day", start_date: "2023-07-05", end_date: "2023-07-05", status: "Pending" },
    { id: 3, employee: "Emily Davis", type: "Personal Leave", duration: "2 days", start_date: "2023-07-10", end_date: "2023-07-11", status: "Pending" },
    { id: 4, employee: "Alex Wilson", type: "Annual Leave", duration: "5 days", start_date: "2023-07-15", end_date: "2023-07-19", status: "Pending" },
  ];
}

export async function approve(id: number): Promise<void> {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Approved leave request with id: ${id}`);
}

export async function reject(id: number): Promise<void> {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Rejected leave request with id: ${id}`);
}

