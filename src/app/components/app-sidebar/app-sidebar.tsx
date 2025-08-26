import { BiFileBlank } from "react-icons/bi"
import Searchbar from "../searchbar/searchbar"
import DocumentsSection from "../documents-section/documents-section"
import ProfileSection from "../profile-section/profile-section"

export default function AppSidebar() {
    return (
        <div className="flex flex-col items-start justify-start p-8 gap-10 h-full border-2 border-secondary">
            <div className="flex items-center justify-start gap-2">
                <BiFileBlank size={40} style={{color: "oklch(57.7% 0.245 27.325)"}} />
                <h1 className="text-3xl font-bold">Atlas</h1>
            </div>
            <Searchbar />
            <DocumentsSection />
            <ProfileSection />
        </div>
    )
}