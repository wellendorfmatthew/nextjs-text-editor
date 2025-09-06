import { BiFile, BiPlus } from "react-icons/bi"
import { BiFileBlank } from "react-icons/bi"

export default function DocumentsSection() {
    return (
        <div className="h-full w-full flex flex-col gap-6 items-start justify-start">
            <h2 className="font-bold text-xl">Documents</h2>
            <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex items-center justify-start gap-4">
                    <BiPlus size={20} />
                    <p className="text-lg">Create new document</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                    <BiFileBlank size={20} />
                    <p className="text-lg">Document 1</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                    <BiFileBlank size={20} />
                    <p className="text-lg">Document 2</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                    <BiFileBlank size={20} />
                    <p className="text-lg">Document 3</p>
                </div>
                <div className="flex items-center justify-start gap-4">
                    <BiFileBlank size={20} />
                    <p className="text-lg">Document 4</p>
                </div>
            </div>
        </div>
    )
}