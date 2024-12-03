import AttendanceTable from '@/components/Attendence/AttendanceTable';

export default function ManageAttendancePage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Manage Attendance</h1>
            <AttendanceTable />
        </div>
    );
}

