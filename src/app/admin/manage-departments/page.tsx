import DepartmentTable from '../../components/DepartmentTable/DepartmentTable';
// import { getDepartemen } from '../../services/departmen';

export default async function ManageUsersPage() {
  // Commented out the actual API call for now
  // const departemen = await getDepartemen();
  
  // Static data for testing
  const departemen = [
    {
      id: "1",
      name: "Human Resources",
      manager_name: "John Doe"
    },
    {
      id: "2",
      name: "Marketing",
      manager_name: "Jane Smith"
    },
    {
      id: "3",
      name: "Engineering",
      manager_name: "Bob Johnson"
    },
    {
      id: "4",
      name: "Finance",
      manager_name: "Alice Williams"
    },
    {
      id: "5",
      name: "Customer Support",
      manager_name: "Charlie Brown"
    }
  ];
  
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