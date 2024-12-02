import AttendanceLeaveSystem from "../components/Attendence/AttendanceLeaveSystem";
import Greeting from "../components/Greeting/Greeting";
import StatusCards from "@/app/components/Card/StatusCards"

export default async function Page() {

    return (
        <div>
            <div>
                <Greeting />
                <StatusCards />
            </div>
            <div>
                <AttendanceLeaveSystem />
            </div>
        </div>
    );
}