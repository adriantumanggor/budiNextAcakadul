'use client';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import { getKaryawan } from '../../services/api'; 

export default async function ManageUsersPage() {
  const employees = await getKaryawan();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Departments</h1>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Employee List</h3>
      </div>
      <EmployeeTable
        onView={(emp) => console.log('View:', emp)}
        onEdit={(emp) => console.log('Edit:', emp)}
        onDelete={(id) => console.log('Delete:', id)}
        employees={employees} 
      />
    </div>
  );
}