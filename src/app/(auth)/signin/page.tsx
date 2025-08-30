import { BiFileBlank } from "react-icons/bi"

export default function Signin() {
    return (
        <div className="w-1/2 bg-slate-50 flex flex-col items-center rounded-2xl border-2 border-slate-200 shadow-md gap-10 p-8">
            <div className="flex items-center justify-start gap-2">
                <BiFileBlank size={40} style={{color: "oklch(57.7% 0.245 27.325)"}} />
                <h1 className="text-3xl font-bold">Atlas</h1>
            </div>
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <div className="flex flex-col gap-2 items-start justify-start">
                
            </div>
        </div>
    )
}