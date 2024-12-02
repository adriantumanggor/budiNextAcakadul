'use client'
import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/app/components/ui/dialog"

export default function AttendanceCard() {
  const [attendanceStatus, setAttendanceStatus] = useState('Masuk')
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [isOutMessageOpen, setIsOutMessageOpen] = useState(false)

  const handleMasukConfirmation = () => {
    // Close confirmation dialog
    setIsConfirmDialogOpen(false)
    // Change status to Keluar
    setAttendanceStatus('Keluar')
  }

  const handleKeluarConfirmation = () => {
    // Close confirmation dialog
    setIsConfirmDialogOpen(false)
    // Show out message dialog
    setIsOutMessageOpen(true)
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

        {/* Main Attendance Button */}
        <Button
          onClick={() => setIsConfirmDialogOpen(true)}
          className={`w-full py-4 px-6 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md ${
            attendanceStatus === 'Masuk'
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          {attendanceStatus}
        </Button>

        {/* Confirmation Dialog */}
        <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Konfirmasi {attendanceStatus}</DialogTitle>
              <DialogDescription>
                Apakah Anda yakin ingin melakukan {attendanceStatus.toLowerCase()}?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsConfirmDialogOpen(false)}
              >
                Batal
              </Button>
              <Button 
                onClick={() => {
                  if (attendanceStatus === 'Masuk') {
                    handleMasukConfirmation()
                  } else {
                    handleKeluarConfirmation()
                  }
                }}
              >
                Konfirmasi
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Out Message Dialog */}
        <Dialog open={isOutMessageOpen} onOpenChange={setIsOutMessageOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Anda telah keluar</DialogTitle>
              <DialogDescription>
                Terima kasih atas kerja keras Anda hari ini. Selamat beristirahat!
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setIsOutMessageOpen(false)}>OK</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}