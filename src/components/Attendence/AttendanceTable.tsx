import React from 'react';
import { Clock, Edit, Trash2 } from 'lucide-react';

interface Employee {
    id: number;
    name: string;
    tanggal: string; // date
    status: 'presence' | 'absence' | 'leave';
    department: string;
    clockIn: string | null;
    clockOut: string | null;
}

const employees: Employee[] = [
    {
        id: 1,
        name: 'John Doe',
        tanggal: '2023-05-15',
        status: 'presence',
        department: 'Human Resources',
        clockIn: '08:55 AM',
        clockOut: '05:05 PM',
    },
    {
        id: 2,
        name: 'Jane Smith',
        tanggal: '2023-05-15',
        status: 'presence',
        department: 'Finance',
        clockIn: '09:15 AM',
        clockOut: null,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        tanggal: '2023-05-15',
        status: 'absence',
        department: 'Information Technology',
        clockIn: null,
        clockOut: null,
    },
    {
        id: 4,
        name: 'Bob Williams',
        tanggal: '2023-05-15',
        status: 'leave',
        department: 'Marketing',
        clockIn: null,
        clockOut: null,
    },
    {
        id: 5,
        name: 'Charlie Brown',
        tanggal: '2023-05-15',
        status: 'presence',
        department: 'Information Technology',
        clockIn: '08:30 AM',
        clockOut: '04:45 PM',
    },
];

const getDepartmentColor = (department: string) => {
    switch (department) {
        case 'Human Resources':
            return 'bg-blue-50 text-blue-600';
        case 'Finance':
            return 'bg-purple-50 text-purple-600';
        case 'Information Technology':
            return 'bg-green-50 text-green-600';
        case 'Marketing':
            return 'bg-yellow-50 text-yellow-600';
        default:
            return 'bg-gray-50 text-gray-600';
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'presence':
            return 'bg-green-50 text-green-600';
        case 'absence':
            return 'bg-red-50 text-red-600';
        case 'leave':
            return 'bg-yellow-50 text-yellow-600';
        default:
            return 'bg-gray-50 text-gray-600';
    }
};

export default function AttendanceTable() {
    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead>
                    <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Employee</th>
                        <th className="py-3 px-6 text-left">Department</th>
                        <th className="py-3 px-6 text-left">Clock In</th>
                        <th className="py-3 px-6 text-left">Clock Out</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-50 transition-all">
                            <td className="py-3 px-6">{employee.tanggal}</td>

                            <td className="py-3 px-6">
                                <div className="flex items-center">
                                    <p className="font-medium">{employee.name}</p>
                                </div>
                            </td>

                            <td className="py-3 px-6">
                                <span
                                    className={`px-3 py-1 rounded-lg text-sm ${getDepartmentColor(employee.department)}`}
                                >
                                    {employee.department}
                                </span>
                            </td>

                            <td className="py-3 px-6">
                                <div className="flex items-center">
                                    {employee.clockIn ? (
                                        <>
                                            <Clock className="text-green-500 mr-2 h-4 w-4" />
                                            {employee.clockIn}
                                        </>
                                    ) : (
                                        <span className="text-gray-400">--:-- --</span>
                                    )}
                                </div>
                            </td>

                            <td className="py-3 px-6">
                                <div className="flex items-center">
                                    {employee.clockOut ? (
                                        <>
                                            <Clock className="text-red-500 mr-2 h-4 w-4" />
                                            {employee.clockOut}
                                        </>
                                    ) : (
                                        <span className="text-gray-400">--:-- --</span>
                                    )}
                                </div>
                            </td>

                            <td className="py-3 px-6">
                                <span
                                    className={`px-1 py-1 rounded-lg text-sm ${getStatusColor(employee.status)}`}
                                >
                                    {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                                </span>
                            </td>

                            <td className="py-3 px-6">
                                <div className="flex space-x-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                                        <Edit className="text-gray-400 hover:text-gray-600 h-4 w-4" />
                                    </button>
                                    <button className="p-2 hover:bg-red-50 rounded-lg transition-all">
                                        <Trash2 className="text-gray-400 hover:text-red-600 h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

