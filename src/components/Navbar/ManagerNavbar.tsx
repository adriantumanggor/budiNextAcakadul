export default function ManagerNavbar() {
    return (
        <div className="mt-8">
            <a href="#" className="w-full flex items-center p-4 bg-blue-50 text-blue-600">
                <i className="fas fa-home mr-4"></i>
                <span>Manager Dashboard</span>
            </a>
            <a href="#" className="w-full flex items-center p-4 hover:bg-blue-50 text-gray-600">
                <i className="fas fa-building mr-4"></i>
                <span>Departments</span>
            </a>
            <a href="#" className="w-full flex items-center p-4 hover:bg-blue-50 text-gray-600">
                <i className="fas fa-clock mr-4"></i>
                <span>Attendance</span>
            </a>
        </div>
    );
}
