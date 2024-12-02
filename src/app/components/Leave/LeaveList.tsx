
type LeaveRequest = {
    id: number
    type: string
    startDate: string
    endDate: string
    status: 'Pending' | 'Approved' | 'Rejected'
}

export default function LeaveList() {
    const leaveRequests = [
        { id: 1, type: 'Annual Leave', startDate: '2023-06-01', endDate: '2023-06-05', status: 'Approved' },
        { id: 2, type: 'Sick Leave', startDate: '2023-06-10', endDate: '2023-06-11', status: 'Pending' },
        { id: 3, type: 'Personal Leave', startDate: '2023-06-20', endDate: '2023-06-21', status: 'Rejected' },
    ]

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                        <th className="px-6 py-3 text-left">Type</th>
                        <th className="px-6 py-3 text-left">Start Date</th>
                        <th className="px-6 py-3 text-left">End Date</th>
                        <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="text-black">
                    {leaveRequests.map((request) => (
                        <tr key={request.id}>
                            <td className="px-6 py-4 text-gray-900">{request.type}</td>
                            <td className="px-6 py-4 ">{request.startDate}</td>
                            <td className="px-6 py-4 ">{request.endDate}</td>
                            <td className="px-6 py-4 ">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : request.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {request.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

