
type Payslip = {
    id: number
    bulan: number
    tahun: number
    gaji_pokok: number
    tunjangan: number
    potongan: number
    total_gaji: number
}

export default function PayslipTable() {
    const payslips = [
        { id: 1, bulan: 5, tahun: 2023, gaji_pokok: 5000000, tunjangan: 1000000, potongan: 200000, total_gaji: 5800000 },
        { id: 2, bulan: 4, tahun: 2023, gaji_pokok: 5000000, tunjangan: 1000000, potongan: 200000, total_gaji: 5800000 },
        { id: 3, bulan: 3, tahun: 2023, gaji_pokok: 5000000, tunjangan: 1000000, potongan: 200000, total_gaji: 5800000 },
    ]

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
    }

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
                        <th className="px-6 py-3 text-left">Period</th>
                        <th className="px-6 py-3 text-left">Base Salary</th>
                        <th className="px-6 py-3 text-left">Allowance</th>
                        <th className="px-6 py-3 text-left">Deduction</th>
                        <th className="px-6 py-3 text-left">Total Salary</th>
                    </tr>
                </thead>
                <tbody className="text-black">
                    {payslips.map((payslip) => (
                        <tr key={payslip.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {`${payslip.bulan}/${payslip.tahun}`}
                            </td>
                            <td >{formatCurrency(payslip.gaji_pokok)}</td>
                            <td >{formatCurrency(payslip.tunjangan)}</td>
                            <td >{formatCurrency(payslip.potongan)}</td>
                            <td >{formatCurrency(payslip.total_gaji)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

