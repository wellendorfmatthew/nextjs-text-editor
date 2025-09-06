import { BiLogIn } from "react-icons/bi"

export default function ProfileSection() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center rounded-full border-2 w-10 h-10">
                    <p>j</p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start">
                    <p className="font-bold">Azunyan U. Wu</p>
                    <p className="font-medium">Basic Member</p>
                </div>
            </div>
            <BiLogIn size={28} />
        </div>
    )
}