import { BiTrashAlt, BiLogIn, BiLeftIndent, BiRightIndent, BiListUl, BiListOl, BiListCheck, 
        BiAlignJustify, BiAlignLeft, BiAlignRight, BiAlignMiddle, BiText, BiFontSize } from "react-icons/bi";
import Dropdown from "../dropdown/dropdown";

export default function SettingsSidebar() {
    return (
        <div className="flex flex-col items-start justify-start p-8 gap-10 h-full border-2 border-secondary">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Font Settings</h2>
                <p className="text-tertiary">Adjust font-family and apply a fixed font-size</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="text-lg font-bold">Font-Family</h3>
                <Dropdown icon={<BiText size={20} />} title="Arial" />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <h3 className="text-lg font-bold">Font-Size</h3>
                <Dropdown icon={<BiFontSize size={20} />} title="Heading 1" />
            </div>
            <hr className="border-2 w-full" />
        </div>
    )
}