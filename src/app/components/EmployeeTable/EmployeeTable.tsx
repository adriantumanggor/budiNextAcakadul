// src/components/EmployeeTable.tsx
import React from "react";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  status: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <table className="min-w-full">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-6 py-3 text-left">Name</th>
          <th className="px-6 py-3 text-left">Position</th>
          <th className="px-6 py-3 text-left">Department</th>
          <th className="px-6 py-3 text-left">Email</th>
          <th className="px-6 py-3 text-left">Phone</th>
          <th className="px-6 py-3 text-center">Status</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id} className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">{employee.name}</td>
            <td className="px-6 py-4">{employee.position}</td>
            <td className="px-6 py-4">{employee.department}</td>
            <td className="px-6 py-4">{employee.email}</td>
            <td className="px-6 py-4">{employee.phone}</td>
            <td className="px-6 py-4 text-center">
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  employee.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {employee.status}
              </span>
            </td>
            <td className="px-6 py-4 text-center">
              <button className="text-blue-600 hover:text-blue-800 mx-1">
                <i className="fas fa-eye"></i>
              </button>
              <button className="text-green-600 hover:text-green-800 mx-1">
                <i className="fas fa-edit"></i>
              </button>
              <button className="text-red-600 hover:text-red-800 mx-1">
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeTable;
