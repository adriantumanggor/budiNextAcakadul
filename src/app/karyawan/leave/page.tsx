import LeaveList from "@/app/components/Leave/LeaveList";

export default function LeavePage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Leave List</h3>
            </div>

            <LeaveList />
        </div>
    );

}