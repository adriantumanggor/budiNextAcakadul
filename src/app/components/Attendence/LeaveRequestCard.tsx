'use client'

import { useState, FormEvent } from 'react'

export default function LeaveRequestCard() {
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Leave request submitted:', { leaveType, startDate, endDate })
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-200">
      <div className="text-center space-y-4">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Ajukan Cuti</h3>
          <div className="text-gray-500">
            Ajukan cuti jika sedang/akan tidak hadir!
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <select 
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          >
            <option value="">Select Leave Type</option>
            <option value="annual">Annual Leave</option>
            <option value="sick">Sick Leave</option>
            <option value="personal">Personal Leave</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <input
              type="date"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
          >
            Kirim 
          </button>
        </form>
      </div>
    </div>
  )
}

