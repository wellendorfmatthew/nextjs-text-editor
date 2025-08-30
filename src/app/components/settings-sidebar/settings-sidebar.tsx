import { BiTrashAlt, BiLogIn, BiLeftIndent, BiRightIndent, BiListUl, BiListOl, BiListCheck, 
        BiAlignJustify, BiAlignLeft, BiAlignRight, BiAlignMiddle, BiText, BiFontSize } from "react-icons/bi";
import Dropdown from "../dropdown/dropdown";

export default function SettingsSidebar() {
    return (
        <div className="flex flex-col items-start justify-start h-full border-2 border-secondary">
            <div className="flex flex-col gap-10 p-8">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Font Settings</h2>
                    <p className="text-tertiary">Adjust font-family and apply a fixed font-size</p>
                </div>
                <div className="flex flex-col gap-2 w-full -mt-4">
                    <h3 className="text-lg font-bold">Font-Family</h3>
                    <Dropdown icon={<BiText size={20} />} title="Arial" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-lg font-bold">Font-Size</h3>
                    <Dropdown icon={<BiFontSize size={20} />} title="Heading 1" />
                </div>
            </div>
            <hr className="border-2 w-full" />
            <div className="flex flex-col gap-10 p-8 w-full">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Text Settings</h2>
                    <p className="text-tertiary">Adjust text-alignment, spacing, and style</p>
                </div>
                <div className="flex flex-col gap-2 w-full -mt-4">
                    <h3 className="text-lg font-bold">Alignment</h3>
                    <div className="rounded-full w-full border-input-border border-2 flex items-center justify-evenly">
                        <div className="py-4">
                            <BiAlignLeft size={24} />
                        </div>
                        <hr className="h-full border border-input-border" />
                        <BiAlignMiddle size={24} />
                        <hr className="h-full border border-input-border" />
                        <BiAlignJustify size={24} />
                        <hr className="h-full border border-input-border" />
                        <BiAlignRight size={24} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-lg font-bold">Style</h3>
                    <div className="rounded-full w-full border-input-border border-2 flex items-center justify-evenly">
                        <div className="py-4">
                            <BiListUl size={24} />
                        </div>
                        <hr className="h-full border border-input-border" />
                        <BiListOl size={24} />
                        <hr className="h-full border border-input-border" />
                        <BiListCheck size={24} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-lg font-bold">Line and Paragraph Spacing</h3>
                    <div className="rounded-full w-full h-[60px] border-input-border border-2 flex items-center justify-evenly">
                        <p className="font-bold text-xl py-4">1</p>
                        <hr className="h-full border border-input-border" />
                        <p className="font-bold text-xl">1.2</p>
                        <hr className="h-full border border-input-border" />
                        <p className="font-bold text-xl">1.5</p>
                        <hr className="h-full border border-input-border" />
                        <p className="font-bold text-xl">2</p>
                    </div>
                </div>
            </div>
            <hr className="border-2 w-full" />
            <div className="flex flex-col items-center justify-center gap-4 p-8 h-full w-full">
                <button className="rounded-full w-full p-2 px-6 border-secondary border-2 flex items-center justify-between">
                    <p className="text-xl font-bold text-secondary">Close Document</p>
                    <BiLogIn size={24} style={{color: "oklch(57.7% 0.245 27.325)"}} />
                </button>
                <button className="rounded-full w-full p-2 px-6 bg-secondary flex items-center justify-between">
                    <p className="text-xl font-bold text-slate-50">Delete Document</p>
                    <BiTrashAlt size={24} style={{color: "oklch(98.4% 0.003 247.858)"}} />
                </button>
            </div>
        </div>
    )
}