import { BiSearch } from "react-icons/bi"

export default function Searchbar() {
    return (
        <div className="flex items-center justify-start px-4 py-2 gap-2 rounded-full border-2 border-slate-300">
            <BiSearch size={20} />
            <input type="text" placeholder="Search..." className="outline-none text-base" />
        </div>
    )
}