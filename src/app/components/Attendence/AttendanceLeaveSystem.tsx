import AttendanceCard from "./AttendanceCard"
import LeaveRequestCard from "./LeaveRequestCard"

export default function AttendanceLeaveSystem() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceCard />
            <LeaveRequestCard />
        </div>
    )
}

