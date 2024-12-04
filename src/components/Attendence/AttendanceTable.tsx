import React from 'react';
import { Clock, Edit, Trash2 } from 'lucide-react';
import { getAttendance } from '@/app/services/attendance';

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
        case 'hadir':
            return 'bg-green-50 text-green-600';
        case 'alpha':
            return 'bg-red-50 text-red-600';
        case 'izin':
            return 'bg-yellow-50 text-yellow-600';
        default:
            return 'bg-gray-50 text-gray-600';
    }
};

export default async function AttendanceTable() {
    const employees: Employee[] = await getAttendance();

    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead>
                    <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        {/* <th className="py-3 px-6 text-left">Department</th> */}
                        <th className="py-3 px-6 text-left">Waktu Masuk</th>
                        <th className="py-3 px-6 text-left">Waktu Keluar</th>
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

                            {/* <td className="py-3 px-6">
                                <span
                                    className={`px-3 py-1 rounded-lg text-sm ${getDepartmentColor(employee.department)}`}
                                >
                                    {employee.department}
                                </span>
                            </td> */}

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

