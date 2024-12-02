import PayslipTable from "@/components/Payslip/PayslipTable";

export default function PayslipPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gaji anda</h1>
            <PayslipTable />
        </div>
    );

}