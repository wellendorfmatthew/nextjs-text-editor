import Image from "next/image"
import { JSX } from "react"
import { BiChevronDown } from "react-icons/bi"

type DropdownProps = {
    icon: JSX.Element,
    title: string
}

export default function Dropdown({icon, title}: DropdownProps) {
    return (
        <div className="rounded-full w-full p-4 py-2 border-input-border border-2 flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
                {icon}
                <p>{title}</p>
            </div>
            <BiChevronDown size={28} />
        </div>
    )
}