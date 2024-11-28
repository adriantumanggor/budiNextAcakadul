import React from "react";

export default function ManageDepartmentsPage() {
    const openModal = (modalId: string) => {
        console.log(`Open modal: ${modalId}`);
        // Logic to open the modal
    };

    const filterByPosition = (position: string) => {
        console.log(`Filter by position: ${position}`);
        // Logic to filter the employee list
    };

    const confirmDelete = () => {
        console.log("Confirm delete");
        // Logic to handle delete confirmation
    };

    return (
        <div className="p-8">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-6">Manage Departments</h1>

            {/* Employee List Header */}
            <div className="mb-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-700">Employee List</h3>
                <button
                    onClick={() => openModal("addEmployeeModal")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    <i className="fas fa-plus mr-2"></i>Add Employee
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="mb-6 border-b border-gray-200">
                <nav className="flex -mb-px">
                    {["All Employees", "Managers", "Staff", "Assistants", "Coordinators"].map((position, index) => (
                        <button
                            key={index}
                            onClick={() => filterByPosition(position.toLowerCase())}
                            className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                                index === 0
                                    ? "text-blue-600 border-blue-500"
                                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                            }`}
                        >
                            {position}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Employee Table */}
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
                        <tr className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">John Doe</td>
                            <td className="px-6 py-4">Manager</td>
                            <td className="px-6 py-4">Human Resources</td>
                            <td className="px-6 py-4">john.doe@company.com</td>
                            <td className="px-6 py-4">08123456789</td>
                            <td className="px-6 py-4 text-center">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button
                                    onClick={() => openModal("viewEmployeeModal")}
                                    className="text-blue-600 hover:text-blue-800 mx-1"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button
                                    onClick={() => openModal("editEmployeeModal")}
                                    className="text-green-600 hover:text-green-800 mx-1"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="text-red-600 hover:text-red-800 mx-1"
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
