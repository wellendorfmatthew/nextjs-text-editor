import { BiFileBlank, BiShow, BiHide } from "react-icons/bi"
import Link from "next/link"

export default function Signin() {
    return (
        <div className="w-1/2 bg-slate-50 flex flex-col items-center rounded-2xl border-2 border-slate-200 shadow-md gap-10 p-8">
            <div className="flex items-center justify-start gap-2">
                <BiFileBlank size={40} style={{color: "oklch(57.7% 0.245 27.325)"}} />
                <h1 className="text-3xl font-bold">Atlas</h1>
            </div>
            <h1 className="text-3xl font-bold">Sign In</h1>
            <div className="flex flex-col gap-4 items-start justify-start min-w-1/2">
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <label htmlFor="email" className="text-xl font-medium">Email</label>
                    <div className="rounded-full border-2 border-tertiary px-6 py-2 flex items-center justify-between w-full">
                        <input type="email" placeholder="Enter your email" id="email" className="outline-none w-full" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                    <label htmlFor="password" className="text-xl font-medium">Password</label>
                    <div className="rounded-full border-2 border-tertiary px-6 py-2 flex items-center justify-between w-full">
                        <input type="password" placeholder="Enter your password" id="password" className="outline-none w-full" />
                        <BiShow size={24} />
                    </div>
                </div>
                <Link href={"/"} className="font-semibold self-end">Forgot Password?</Link>
                <button className="rounded-full py-2 px-6 bg-secondary flex items-center justify-center font-semibold text-lg text-primary w-full">Sign In</button>
                <p className="self-center">Don't have an account? <Link href={"/"} className="font-semibold">Sign up</Link></p>
            </div>
        </div>
    )
}