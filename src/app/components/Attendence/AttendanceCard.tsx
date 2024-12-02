'use client'

import { useState } from 'react'

export default function AttendanceCard() {
  const [attendanceStatus, setAttendanceStatus] = useState('Masuk')

  const handleAttendance = () => {
    setAttendanceStatus(attendanceStatus === 'Masuk' ? 'Keluar' : 'Masuk')
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-200">
      <div className="text-center space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Absensi</h3>
          <div className="text-gray-500">
            Tandai kehadiran dengan menekan tombol {attendanceStatus}!
          </div>
        </div>

        <button
          onClick={handleAttendance}
          className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl hover:bg-blue-600 transition-colors text-lg font-semibold shadow-sm hover:shadow-md"
        >
          {attendanceStatus}
        </button>
      </div>
    </div>
  )
}

