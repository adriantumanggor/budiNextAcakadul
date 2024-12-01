import DepartmentTable from '../../components/DepartmentTable/DepartmentTable';
import { getDepartemen } from '@/app/services/departmen';

export default async function ManageUsersPage() {
  // Commented out the actual API call for now
  const departemen = await getDepartemen();
    
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Departments</h1>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-700">Department List</h3>
      </div>
      <DepartmentTable departments={departemen} />
    </div>
  );
}