export default function StaffNavbar() {
    return (
        <div className="mt-8">
            <a href="#" className="w-full flex items-center p-4 bg-blue-50 text-blue-600">
                <i className="fas fa-home mr-4"></i>
                <span>Staff Dashboard</span>
            </a>
            <a href="#" className="w-full flex items-center p-4 hover:bg-blue-50 text-gray-600">
                <i className="fas fa-clock mr-4"></i>
                <span>My Attendance</span>
            </a>
        </div>
    );
}
