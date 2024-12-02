export default function StatusCards() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Leave Balance</p>
              <p className="text-2xl font-bold text-gray-800">12 days</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <i className="fas fa-calendar text-blue-500 text-xl"></i>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Today's Status</p>
              <p className="text-2xl font-bold text-green-500">Present</p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <i className="fas fa-check-circle text-green-500 text-xl"></i>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-800">95%</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <i className="fas fa-chart-line text-blue-500 text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  