'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useAuth } from "@/context/authContext"
import { createAbsensi } from "@/app/services/attendance"

export default function AttendanceCard() {
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
    const [attendanceStatus, setAttendanceStatus] = useState('Masuk')
    const [isOutMessageOpen, setIsOutMessageOpen] = useState(false)
    const [localCompletedStatus, setLocalCompletedStatus] = useState(false)

    const { user } = useAuth()
    const karyawan_id = user?.karyawan_id || '';
    const is_completed = user?.is_completed; // boolean from context

    if (is_completed) {
        localStorage.setItem(`attendance_completed_${karyawan_id}`, 'true')
    }
    // Effect to load completed status from localStorage on component mount
    useEffect(() => {
        const storedCompletedStatus = localStorage.getItem(`attendance_completed_${karyawan_id}`)
        if (storedCompletedStatus === 'true') {
            setLocalCompletedStatus(true)
        }
        
    }, [karyawan_id])
    console.log("nilai:" + localStorage.getItem(`attendance_completed_${karyawan_id}`))
    
    const handleAttendanceConfirmation = async () => {
        try {
            await createAbsensi(String(karyawan_id));

            if (is_completed || localCompletedStatus) {
                return
            }

            if (attendanceStatus === 'Masuk') {
                setAttendanceStatus('Keluar')
            } else {
                setLocalCompletedStatus(true)
                localStorage.setItem(`attendance_completed_${karyawan_id}`, 'true')
                setAttendanceStatus('Selesai')
                setIsOutMessageOpen(true)
            }
        } catch (error) {
            console.error('Error creating attendance:', error)
        }

        setIsConfirmDialogOpen(false)
    }

    // Determine if button should be disabled
    const isButtonDisabled = is_completed || localCompletedStatus;

    // Determine button classes based on completion status
    const getButtonClasses = () => {
        if (isButtonDisabled) {
            return 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }
        return attendanceStatus === 'Masuk'
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-red-500 hover:bg-red-600 text-white'
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-all duration-200">
            <div className="text-center space-y-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Absensi</h3>
                    <div className="text-gray-500">
                        {isButtonDisabled
                            ? "Sampai jumpa di besok hari!"
                            : `Tandai kehadiran dengan menekan tombol ${attendanceStatus}!`}
                    </div>
                </div>

                {/* Main Attendance Button */}
                <Button
                    disabled={isButtonDisabled}
                    onClick={() => setIsConfirmDialogOpen(true)}
                    className={`w-full py-4 px-6 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md ${getButtonClasses()}`}
                >
                    {isButtonDisabled ? 'Selesai' : attendanceStatus}
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
                            <Button onClick={handleAttendanceConfirmation}>
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